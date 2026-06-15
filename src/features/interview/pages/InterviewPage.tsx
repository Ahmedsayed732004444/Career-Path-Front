import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetInterviewQuestions, useSubmitInterview } from "../hooks/useInterview";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Flag,
  Clock,
  RotateCcw,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { InterviewAnswer } from "@/features/interview/types/interview";

/* ─── Expandable review card ─── */
const ReviewCard: React.FC<{
  idx: number;
  detail: { questionId: number; question: string; yourAnswer: string; correctAnswer: string; isCorrect: boolean; explanation?: string };
}> = ({ idx, detail }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
      >
        {detail.isCorrect ? (
          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-red-500 shrink-0" />
        )}
        <span className="text-sm font-semibold text-foreground flex-1 leading-relaxed">
          <span className="text-muted-foreground mr-2 font-medium">{idx + 1}.</span>
          {detail.question}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        }
      </button>

      {open && (
        <div className="px-5 pb-5 pt-0 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className={`p-4 rounded-xl border ${detail.isCorrect ? "bg-emerald-500/10 border-emerald-500/20" : "bg-red-500/10 border-red-500/20"}`}>
              <p className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${detail.isCorrect ? "text-emerald-500" : "text-red-500"}`}>YOUR ANSWER</p>
              <p className="text-sm text-foreground leading-relaxed">{detail.yourAnswer}</p>
            </div>
            <div className="p-4 rounded-xl border bg-emerald-500/10 border-emerald-500/20">
              <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-500 mb-2">CORRECT ANSWER</p>
              <p className="text-sm text-foreground leading-relaxed">{detail.correctAnswer}</p>
            </div>
          </div>
          {detail.explanation && (
            <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-foreground">Explanation</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ─── MAIN COMPONENT ─── */
const InterviewPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { data: questions, isLoading, error } = useGetInterviewQuestions(jobId || "");
  const submitInterview = useSubmitInterview();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<InterviewAnswer[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [flagged, setFlagged] = useState(false);
  const [timer, setTimer] = useState(45 * 60);

  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  /* ── Loading ── */
  if (isLoading) {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <Skeleton className="h-2 rounded-full mb-8" />
        <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
          <Skeleton className="h-7 w-3/5 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-4/5 mb-7" />
          {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-[60px] rounded-[10px] mb-2.5" />)}
        </div>
      </div>
    );
  }

  /* ── Error ── */
  if (error || !questions) {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <div className="bg-card border border-border rounded-2xl shadow-sm p-10 text-center">
          <XCircle className="w-10 h-10 text-destructive mx-auto mb-3" />
          <p className="text-[15px] text-muted-foreground mb-4">Failed to load interview questions.</p>
          <button
            onClick={() => navigate(-1)}
            className="h-9 px-5 border border-border rounded-lg bg-card text-foreground cursor-pointer font-semibold text-[13.5px] hover:bg-muted transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /* ── Empty ── */
  if (questions.length === 0) {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <div className="bg-card border border-border rounded-2xl shadow-sm p-10 text-center">
          <p className="text-[15px] text-muted-foreground mb-4">No questions found for this interview.</p>
          <button
            onClick={() => navigate(-1)}
            className="h-9 px-5 border border-border rounded-lg bg-card text-foreground cursor-pointer font-semibold text-[13.5px] hover:bg-muted transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /* ── Results view ── */
  if (isSubmitted && submitInterview.data) {
    const result = submitInterview.data;

    return (
      <div className="bg-background min-h-screen font-sans">
        <div className="max-w-[720px] mx-auto p-4 sm:p-8 pb-16">

          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">
            Interview Results
          </h1>

          {/* Score — only real data */}
          <div className="bg-card border border-border rounded-2xl p-10 shadow-sm mb-8 flex flex-col items-center text-center">
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
              Your Score
            </p>
            <div className="flex items-end justify-center gap-3">
              <span className="text-8xl font-black text-primary leading-none">{result.correctAnswers}</span>
              <span className="text-4xl font-black text-muted-foreground mb-2">/ {result.totalQuestions}</span>
            </div>
            <p className="text-base text-muted-foreground mt-4">correct answers</p>
          </div>

          {/* Detailed review */}
          <h2 className="text-lg font-bold text-foreground mb-1">Detailed Review</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Review your answers and understand the correct solutions.
          </p>
          <div className="space-y-4">
            {result.details.map((detail, idx) => (
              <ReviewCard key={detail.questionId} idx={idx} detail={detail} />
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-10">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setAnswers([]);
                setCurrentQuestionIndex(0);
                setTimer(45 * 60);
              }}
              className="h-10 px-6 border border-border rounded-xl bg-card text-sm font-bold text-foreground cursor-pointer hover:bg-muted transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake
            </button>
            <button
              onClick={() => navigate("/jobs")}
              className="h-10 px-8 rounded-xl bg-primary text-sm font-bold text-primary-foreground cursor-pointer hover:bg-primary/90 transition-all shadow-md"
            >
              Back to Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Assessment view ── */
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = (currentQuestionIndex / questions.length) * 100;
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id);
  const hasSelected = !!currentAnswer;

  const handleSelectOption = (optionId: number) => {
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === currentQuestion.id);
      if (existing >= 0) {
        const next = [...prev];
        next[existing] = { questionId: currentQuestion.id, selectedOptionId: optionId };
        return next;
      }
      return [...prev, { questionId: currentQuestion.id, selectedOptionId: optionId }];
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      if (!jobId) return;
      submitInterview.mutate(
        { jobId, request: { answers } },
        { onSuccess: () => setIsSubmitted(true) }
      );
    } else {
      setCurrentQuestionIndex((p) => p + 1);
    }
  };

  const handlePrevious = () => setCurrentQuestionIndex((p) => Math.max(0, p - 1));
  const timerWarning = timer < 5 * 60;

  return (
    <div className="bg-background min-h-screen font-sans">
      <div className="max-w-[720px] mx-auto p-4 sm:p-8 pb-24">

        {/* Top bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <span className="text-sm text-muted-foreground font-medium">
            Technical Assessment <span className="mx-1 text-border">/</span>
            <span className="text-foreground font-bold">React Core</span>
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setFlagged((f) => !f)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 h-9 px-4 border rounded-xl text-xs font-bold transition-all shadow-sm
                ${flagged
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                  : "bg-card border-border text-muted-foreground hover:bg-muted"
                }`}
            >
              <Flag className="w-3.5 h-3.5" />
              {flagged ? "Flagged" : "Flag"}
            </button>
            <div className={`flex items-center gap-2 h-9 px-4 border rounded-xl text-sm font-bold shadow-sm
              ${timerWarning
                ? "bg-red-500/10 border-red-500/30 text-red-500 animate-pulse"
                : "bg-card border-border text-foreground"
              }`}>
              <Clock className="w-3.5 h-3.5" />
              {formatTime(timer)}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-muted-foreground mb-2 uppercase tracking-widest">
            <span className="text-primary">Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Done</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground leading-tight mb-10 tracking-tight">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const selected = currentAnswer?.selectedOptionId === option.id;
              return (
                <label
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`flex items-center gap-4 p-4 sm:p-5 border-2 rounded-2xl cursor-pointer transition-all duration-200 group
                    ${selected
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/40 bg-card hover:bg-muted/50"
                    }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                    ${selected
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/40 group-hover:border-primary/60 bg-background"
                    }`}>
                    {selected && <div className="w-2 h-2 rounded-full bg-primary-foreground shadow-sm" />}
                  </div>
                  <span className={`text-sm sm:text-base font-semibold leading-relaxed transition-colors
                    ${selected ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>
                    {option.optionText}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0 || submitInterview.isPending}
            className="flex items-center gap-2 h-11 px-5 border border-border rounded-xl bg-card text-sm font-bold text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!hasSelected || submitInterview.isPending}
            className={`flex items-center gap-2 h-11 px-6 rounded-xl text-sm font-bold transition-all shadow-md
              ${!hasSelected || submitInterview.isPending
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95"
              }`}
          >
            {submitInterview.isPending ? "Submitting..." : isLastQuestion ? "Submit Interview" : "Next Question"}
            {!isLastQuestion && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
