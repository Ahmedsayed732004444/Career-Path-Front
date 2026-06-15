import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, MessageSquare, Mail, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/40 backdrop-blur-md border-t border-border/50 text-foreground py-16 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                Career <span className="text-primary">Path</span>
              </span>
              <span className="text-xs text-muted-foreground font-medium">Elevate Your Career Journey</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Empowering professionals to navigate their career journey with AI-driven insights, smart application tracking, interactive mock interviews, and personalized roadmaps.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Browse Jobs</Link>
              </li>
              <li>
                <Link to="/job-tracker" className="text-muted-foreground hover:text-primary transition-colors">Job Tracker</Link>
              </li>
              <li>
                <Link to="/roadmaps" className="text-muted-foreground hover:text-primary transition-colors">AI Roadmaps</Link>
              </li>
              <li>
                <Link to="/ai" className="text-muted-foreground hover:text-primary transition-colors">AI Analysis</Link>
              </li>
              <li>
                <Link to="/posts" className="text-muted-foreground hover:text-primary transition-colors">Community Posts</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing Plans</Link>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a>
              </li>
              <li>
                <a href="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Support</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:support@careerpath.com" className="hover:text-primary transition-colors">support@careerpath.com</a>
            </div>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                <ShieldCheck className="h-3.5 w-3.5" /> All systems operational
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} Career Path. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
