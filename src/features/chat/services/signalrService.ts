import * as signalR from "@microsoft/signalr";
import type { Message } from "../types/chat";

class SignalRService {
  private connection: signalR.HubConnection | null = null;
  private stateListeners: Array<(state: signalR.HubConnectionState) => void> = [];

  subscribeState(listener: (state: signalR.HubConnectionState) => void): () => void {
    this.stateListeners.push(listener);
    listener(this.getConnectionState());
    return () => {
      this.stateListeners = this.stateListeners.filter((l) => l !== listener);
    };
  }

  private notifyStateListeners(): void {
    const state = this.getConnectionState();
    this.stateListeners.forEach((listener) => {
      try {
        listener(state);
      } catch (err) {
        console.error("Error in SignalR state listener:", err);
      }
    });
  }

  /**
   * Create and start the SignalR connection
   */
  async connect(): Promise<void> {
    if (this.connection && this.connection.state === signalR.HubConnectionState.Connected) {
      return;
    }

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(import.meta.env.VITE_HUB_URL, {
        accessTokenFactory: () => localStorage.getItem("auth_token") || "",
      })
      .withAutomaticReconnect()
      .build();

    this.connection.onclose(() => this.notifyStateListeners());
    this.connection.onreconnecting(() => this.notifyStateListeners());
    this.connection.onreconnected(() => this.notifyStateListeners());

    try {
      this.notifyStateListeners(); // updates state to connecting
      await this.connection.start();
      console.log("Connected to Chat Hub ✓");
      this.notifyStateListeners();
    } catch (error) {
      console.error("Failed to connect to Chat Hub:", error);
      this.notifyStateListeners();
      throw error;
    }
  }

  /**
   * Disconnect from the SignalR hub
   */
  async disconnect(): Promise<void> {
    if (this.connection) {
      try {
        await this.connection.stop();
        console.log("Disconnected from Chat Hub");
      } catch (error) {
        console.error("Failed to disconnect from Chat Hub:", error);
      }
      this.connection = null;
      this.notifyStateListeners();
    }
  }

  /**
   * Listen for incoming messages
   */
  onReceiveMessage(callback: (message: Message) => void): void {
    if (this.connection) {
      this.connection.on("ReceiveMessage", callback);
    }
  }

  /**
   * Stop listening for incoming messages
   */
  offReceiveMessage(callback: (message: Message) => void): void {
    if (this.connection) {
      this.connection.off("ReceiveMessage", callback);
    }
  }

  /**
   * Send a message to a specific user
   */
  async sendMessage(receiverId: string, content: string): Promise<void> {
    if (!this.connection || this.connection.state !== signalR.HubConnectionState.Connected) {
      throw new Error("Not connected to Chat Hub");
    }

    await this.connection.invoke("SendMessage", receiverId, content);
  }

  /**
   * Get the current connection state
   */
  getConnectionState(): signalR.HubConnectionState {
    if (!this.connection) {
      return signalR.HubConnectionState.Disconnected;
    }
    return this.connection.state;
  }
}

export const signalrService = new SignalRService();
