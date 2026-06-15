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
  Target,
  Zap,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
} from "lucide-react";
import type { InterviewAnswer } from "@/features/interview/types/interview";

/* ─── Circular score ring ─── */
const ScoreRing: React.FC<{ score: number; label: string }> = ({ score }) => {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const filled = (score / 100) * circ;
  const color = score >= 80 ? "#2563eb" : score >= 60 ? "#f59e0b" : "#ef4444";
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[130px] h-[130px]">
        <svg width="130" height="130" viewBox="0 0 130 130" className="-rotate-90">
          <circle cx="65" cy="65" r={r} fill="none" stroke="currentColor" className="text-border" strokeWidth="8" />
          <circle cx="65" cy="65" r={r} fill="none" stroke={color} strokeWidth="8"
            strokeDasharray={`${filled} ${circ}`} strokeLinecap="round"
            className="transition-[stroke-dasharray] duration-1000 ease-out" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-foreground leading-none">{score}</span>
          <span className="text-[10px] text-muted-foreground mt-1 uppercase font-bold tracking-wider">OF 100</span>
          <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1.5 border border-primary/20 uppercase">Top 10%</span>
        </div>
      </div>
    </div>
  );
};

/* ─── Proficiency bar ─── */
const ProfBar: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="mb-2.5">
    <div className="flex justify-between mb-1">
      <span className="text-[12px] text-muted-foreground font-medium">{label}</span>
      <span className="text-[12px] font-bold text-foreground">{value}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
      <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${value}%` }} />
    </div>
  </div>
);

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
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
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
                <span className="text-xs font-bold text-foreground">Expert Explanation</span>
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
  const [timer, setTimer] = useState(45 * 60); // 45 minutes in seconds

  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

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
          <button onClick={() => navigate(-1)} className="h-9 px-5 border border-border rounded-lg bg-card text-foreground cursor-pointer font-semibold text-[13.5px] hover:bg-muted transition-colors">Go Back</button>
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
          <button onClick={() => navigate(-1)} className="h-9 px-5 border border-border rounded-lg bg-card text-foreground cursor-pointer font-semibold text-[13.5px] hover:bg-muted transition-colors">Go Back</button>
        </div>
      </div>
    );
  }

  /* ── Results view ── */
  if (isSubmitted && submitInterview.data) {
    const result = submitInterview.data;
    const percentage = Math.round((result.score / result.totalQuestions) * 100);
    const status = percentage >= 80 ? "EXCELLENT" : percentage >= 60 ? "GOOD" : "NEEDS IMPROVEMENT";
    const statusColor = percentage >= 80 ? "text-emerald-500" : percentage >= 60 ? "text-amber-500" : "text-red-500";
    const completionMins = Math.floor((45 * 60 - timer) / 60);
    const completionSecs = (45 * 60 - timer) % 60;

    const strengths = ["React Hooks", "State Management", "Component Lifecycle", "Accessibility (a11y)"];
    const growthAreas = ["Performance Optimization", "Webpack Config"];

    return (
      <div className="bg-background min-h-screen font-sans">
        <div className="max-w-[860px] mx-auto p-4 sm:p-8 pb-16">
          {/* Results header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight m-0">Interview Results</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {result.totalQuestions > 0 ? "Alex" : "Candidate"} · Senior Frontend Developer Assessment
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1">
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">OVERALL STATUS</span>
              <span className={`flex items-center gap-1.5 text-base font-extrabold ${statusColor}`}>
                <Award className="w-4 h-4" />
                {status}
              </span>
            </div>
          </div>

          {/* Score card */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr_1fr] gap-8 items-start">
              {/* Score ring */}
              <div className="flex justify-center">
                <ScoreRing score={percentage} label="Score" />
              </div>

              {/* Strengths */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">Strengths</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {strengths.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-500">{s}</span>
                  ))}
                </div>
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Correctness</span>
                    <span className="font-bold text-foreground">{result.correctAnswers} / {result.totalQuestions}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Completion Time</span>
                    <span className="font-bold text-foreground">{completionMins}m {String(completionSecs).padStart(2, "0")}s</span>
                  </div>
                </div>
              </div>

              {/* Growth + Market Readiness */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">Growth Areas</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {growthAreas.map((g) => (
                    <span key={g} className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-amber-500">{g}</span>
                  ))}
                </div>

                {/* Market readiness */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-bold text-foreground">Market Readiness</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Based on your score of {percentage}%, you demonstrate a strong command of core React principles.
                  </p>
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">TECHNICAL PROFICIENCY</span>
                    <ProfBar label="Core React" value={95} />
                    <ProfBar label="Architecture" value={80} />
                    <ProfBar label="Performance" value={65} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed review */}
          <div className="mt-10">
            <h2 className="text-lg font-bold text-foreground mb-1">Detailed Review</h2>
            <p className="text-sm text-muted-foreground mb-6">Review your answers and understand the rationale behind the correct solutions.</p>

            <div className="space-y-4">
              {result.details.map((detail, idx) => (
                <ReviewCard key={detail.questionId} idx={idx} detail={detail} />
              ))}
            </div>
          </div>

          {/* Bottom actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-10">
            <button
              onClick={() => { setIsSubmitted(false); setAnswers([]); setCurrentQuestionIndex(0); setTimer(45 * 60); }}
              className="h-10 px-6 border border-border rounded-xl bg-card text-sm font-bold text-foreground cursor-pointer hover:bg-muted transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake
            </button>
            <button
              onClick={() => navigate("/jobs")}
              className="h-10 px-8 border-none rounded-xl bg-primary text-sm font-bold text-primary-foreground cursor-pointer hover:bg-primary/90 transition-all shadow-md"
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
      submitInterview.mutate({ jobId, request: { answers } }, { onSuccess: () => setIsSubmitted(true) });
    } else {
      setCurrentQuestionIndex((p) => p + 1);
    }
  };

  const handlePrevious = () => setCurrentQuestionIndex((p) => Math.max(0, p - 1));

  const timerWarning = timer < 5 * 60;

  return (
    <div className="bg-background min-h-screen font-sans">
      <div className="max-w-[720px] mx-auto p-4 sm:p-8 pb-24">

        {/* Top bar: breadcrumb + flag + timer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <span className="text-sm text-muted-foreground font-medium">
            Technical Assessment <span className="mx-1 text-border">/</span>
            <span className="text-foreground font-bold">React Core</span>
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setFlagged((f) => !f)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 h-9 px-4 border rounded-xl text-xs font-bold transition-all shadow-sm
                ${flagged ? "bg-amber-500/10 border-amber-500/30 text-amber-500" : "bg-card border-border text-muted-foreground hover:bg-muted"}`}
            >
              <Flag className="w-3.5 h-3.5" />
              {flagged ? "Flagged" : "Flag"}
            </button>
            <div className={`flex items-center gap-2 h-9 px-4 border rounded-xl text-sm font-bold shadow-sm
              ${timerWarning ? "bg-red-500/10 border-red-500/30 text-red-500 animate-pulse" : "bg-card border-border text-foreground"}`}>
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
            <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground leading-tight mb-10 tracking-tight">
            {currentQuestion.question}
          </h2>

          {/* Answer options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const selected = currentAnswer?.selectedOptionId === option.id;
              return (
                <label
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`flex items-center gap-4 p-4 sm:p-5 border-2 rounded-2xl cursor-pointer transition-all duration-200 group
                    ${selected ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/40 bg-card hover:bg-muted/50"}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                    ${selected ? "border-primary bg-primary" : "border-muted-foreground/40 group-hover:border-primary/60 bg-background"}`}>
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
              ${!hasSelected || submitInterview.isPending ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95"}`}
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
