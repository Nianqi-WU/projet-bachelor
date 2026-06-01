import { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Smile, 
  Angry, 
  Meh, 
  Frown, 
  Sparkles, 
  Cloud, 
  Target, 
  Map, 
  BookOpen, 
  Heart, 
  BarChart3, 
  AlertTriangle, 
  LogOut,
  Leaf,
  Zap,
  Flame,
  Moon,
  CloudRain,
  Timer,
  Rocket,
  Clock,
  ArrowLeft,
  Filter,
  ChevronDown
} from 'lucide-react';


const img3DIllustrationOfPersonFreePsd1 = "/assets/profile_cartoon_avatar.png";
const imgCellularConnection = "/assets/7236619a825281ab0cfe2bf9773ade96d0a048e1.svg";
const imgWifi = "/assets/2ebd72882e8544d7707fbd2060631d475717e7ba.svg";
const imgBattery = "/assets/6d872a0840db009aadbd2b74027c8ef6cc7660ff.svg";
const imgIcon = "/assets/8ffd782953dccc6bc53f8e5bfb4b6fce21e83930.svg"; // New Home
const imgIcon1 = "/assets/d58678b6818da300cc36287d92712277edc2a057.svg"; // New Fingerprint
const imgIcon2 = "/assets/90e866e67696f82f3e7d125676a08238ea01f667.svg";
const imgIcon3 = "/assets/db8e930c321cc52b44e56c4f7bb417cfa5c4e9bd.svg";

// Figma Redesign Assets
const imgHomeBg = "/assets/7e8ea2a0fe36a486235b245a178308d986a4c290.png";
const imgDailyCheckedMon = "/assets/e103ce95213436a741a4db17bef38e9e2296e1ea.svg";
const imgDailyCheckedTue = "/assets/e7987b953ed3c8bbbaae6a55816729478361a32e.svg";
const imgDailyCheckedWed = "/assets/202415f0e3bdf3d5d9165e6d2bdf6ac7f7be8e38.svg";
const imgDailyCheckedThr = "/assets/687556a841ca6e139009f0d83735e9b34fba9e18.svg";
const imgDailyCheckedSat = "/assets/e974c35c6243c8a0169e0ab7f0d251f80a84c052.svg";
const imgDailyCheckedSun = "/assets/784d30c25d63316821a9f32a7ec493563aed88bf.svg";
const imgProgressTrack = "/assets/5698b0808837c2b0529aa099d8d4f014ec5936d2.svg";
const imgSettingsIcon = "/assets/2612362e679892cd13e4f7bf18bebfd61a113a73.svg";
const imgIcon4 = "/assets/353a5e0cc3c35eecaca9dbafdd2294b9b2b46564.svg";
const imgIcon5 = "/assets/05e0d9a170149e700d4dd2e056a2f0c1347f11ca.svg";
const imgIcon6 = "/assets/bdf6fc97fa02e99be22bc7dfd504d4a0243bd49e.svg";
const imgIcon7 = "/assets/b1ba78032348b29761345777e65b923e06d3e56e.svg";
const imgIcon8 = "/assets/97280a7d562fb7220e180299d77d7d86f3a695a5.svg";
const imgContainer = "/assets/45002a04f097cdc1e0e1302adc503c4360bc1371.svg";
const imgContainer1 = "/assets/be91a4001f2a108d8925e8eeb9635b8236cf059a.svg";
const imgContainer2 = "/assets/158f9a9516fb821ec3c4c6c5c485adab86d105d7.svg";
const imgFlowerOrbBg = "/assets/flower_orb_bg.png";

const PHONE_WIDTH = 402;
const PHONE_HEIGHT = 874;

const renderGoalWithIcon = (text: string) => {
  // Strip any emoji from text just in case (e.g., if there's an old emoji in localStorage)
  const cleanText = text.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, '').trim();

  return (
    <span className="flex items-center">
      <span className="align-middle">{cleanText}</span>
    </span>
  );
};

const dailyCardImages = [
  "/assets/daily-card-01.jpeg",
  "/assets/daily-card-02.jpeg",
  "/assets/daily-card-03.jpeg",
  "/assets/daily-card-04.jpeg",
  "/assets/daily-card-05.jpeg",
  "/assets/daily-card-06.jpeg",
  "/assets/daily-card-07.jpeg",
  "/assets/daily-card-08.jpeg",
  "/assets/daily-card-09.jpeg",
  "/assets/daily-card-10.jpeg",
  "/assets/daily-card-11.jpeg",
  "/assets/daily-card-12.jpeg",
  "/assets/daily-card-13.jpeg",
  "/assets/daily-card-14.jpeg",
  "/assets/daily-card-15.jpeg",
  "/assets/daily-card-16.jpeg",
  "/assets/daily-card-17.jpeg",
];


import OnboardingFlow from './components/Onboarding/OnboardingFlow';
const GLOBAL_STYLES = `
  * {
    font-family: 'Lexend Deca Variable', 'Lexend Deca', sans-serif !important;
  }

  :root {
    font-family: 'Lexend Deca Variable', 'Lexend Deca', sans-serif;
  }

  .emoji-span {
    font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Android Emoji", sans-serif !important;
    display: inline-block;
    line-height: 1;
    text-align: center;
    vertical-align: middle;
  }

  .slider-energy::-webkit-slider-thumb { background: var(--thumb-color) !important; box-shadow: 0 4px 12px var(--thumb-shadow) !important; }
  .slider-energy::-moz-range-thumb { background: var(--thumb-color) !important; box-shadow: 0 4px 12px var(--thumb-shadow) !important; border: none; }
  .slider-focus::-webkit-slider-thumb { background: var(--thumb-color) !important; box-shadow: 0 4px 12px var(--thumb-shadow) !important; }
  .slider-focus::-moz-range-thumb { background: var(--thumb-color) !important; box-shadow: 0 4px 12px var(--thumb-shadow) !important; border: none; }
  @keyframes breathe {
    0%, 100% { transform: scale(0.88) translateZ(0); opacity: 0.75; }
    50% { transform: scale(1.12) translateZ(0); opacity: 1; }
  }
  .animate-breathe { animation: breathe 4s ease-in-out infinite; will-change: transform, opacity; }
  @keyframes breathe-slow {
    0%, 100% { transform: scale(0.82) translateZ(0); opacity: 0.65; }
    50% { transform: scale(1.18) translateZ(0); opacity: 1; }
  }
  .animate-breathe-slow { animation: breathe-slow 6s ease-in-out infinite; will-change: transform, opacity; }
  @keyframes fadeSlide { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  .animate-fadeSlide { animation: fadeSlide 0.5s ease-out forwards; }
  @keyframes orbPulse { 0% { transform: scale(0.3); opacity: 0; } 40% { transform: scale(1.15); opacity: 1; } 70% { transform: scale(0.9); opacity: 0.9; } 100% { transform: scale(1); opacity: 1; } }
  .animate-orbPulse { animation: orbPulse 1.2s cubic-bezier(0.34,1.56,0.64,1) forwards; }
  @keyframes ripple { 0% { transform: scale(0.5); opacity: 0.7; } 100% { transform: scale(2.4); opacity: 0; } }
  .animate-ripple1 { animation: ripple 2s ease-out infinite; }
  .animate-ripple2 { animation: ripple 2s ease-out 0.5s infinite; }
  .animate-ripple3 { animation: ripple 2s ease-out 1s infinite; }
  @keyframes textReveal { from { opacity: 0; letter-spacing: 0.5em; } to { opacity: 1; letter-spacing: 0.2em; } }
  .animate-textReveal { animation: textReveal 0.8s ease-out 0.6s forwards; opacity: 0; }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
  .animate-float { animation: float 3s ease-in-out infinite; }
  
  @keyframes customFadeIn {
    from { opacity: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); background-color: rgba(255,255,255,0); }
    to { opacity: 1; backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); background-color: rgba(255,255,255,0.4); }
  }
  .animate-customFadeIn { animation: customFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  
  @keyframes springScaleUp {
    0% { opacity: 0; transform: scale(0.9) translateY(12px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  .animate-springScaleUp { animation: springScaleUp 0.48s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; transform-origin: center; }
`;

function StatusBar() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="absolute top-0 left-0 right-0 z-[200] h-[62px] pointer-events-none">
      {/* Time — left side */}
      <div className="absolute left-[36px] top-1/2 -translate-y-1/2 flex items-center">
        <p
          className="text-[17px] text-black whitespace-nowrap leading-normal"
          style={{ fontWeight: 590 }}
        >
          {timeStr}
        </p>
      </div>

      {/* Dynamic Island — centered, pushed down */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[16px] w-[126px] h-[36px] bg-black rounded-[20px]" />

      {/* Right side — Cellular + Wifi + Battery */}
      <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex items-center gap-[7px]">
        <img alt="Cellular" className="w-[19px] h-[12px] object-contain" src={imgCellularConnection} />
        <img alt="Wifi" className="w-[17px] h-[12px] object-contain" src={imgWifi} />
        <img alt="Battery" className="w-[27px] h-[13px] object-contain" src={imgBattery} />
      </div>
    </div>
  );
}

function BottomNav({ currentView, onViewChange }: { currentView: string; onViewChange: (view: any) => void }) {
  const isHome = currentView === 'home';
  const isCheckin = currentView === 'checkin';
  const isObjectives = currentView === 'objectives';
  const isProfile = currentView === 'profile' || currentView === 'dream_timeline' || currentView === 'mood_analytics';

  // Gray filter for inactive icons
  const grayFilter = "invert(33%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)";

  // Premium lavender-blue #A9ADF9 filter for active icons matching brand theme
  const activeFilter = "brightness(0) saturate(100%) invert(71%) sepia(19%) saturate(4124%) hue-rotate(202deg) brightness(101%) contrast(100%)";

  const renderNavItem = (viewName: string, iconSrc: string, label: string, isActive: boolean) => {
    if (isActive) {
      return (
        <div
          onClick={() => onViewChange(viewName)}
          className="border border-[rgba(156,156,156,0.5)] border-solid flex flex-col h-[45px] items-center justify-center relative rounded-[20px] shrink-0 w-[58px] cursor-pointer transition-all active:scale-95 shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.25),inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]"
        >
          <div aria-hidden="true" className="absolute backdrop-blur-[10px] bg-[rgba(240,240,240,0.3)] inset-0 pointer-events-none rounded-[20px]" />
          <img
            alt={label}
            style={{ filter: activeFilter }}
            className="relative z-10 w-[24px] h-[24px] object-contain shrink-0 transition-transform duration-300 scale-105"
            src={iconSrc}
          />
        </div>
      );
    } else {
      return (
        <div
          onClick={() => onViewChange(viewName)}
          className="flex flex-col items-center relative shrink-0 w-[58px] cursor-pointer transition-all hover:opacity-80 active:scale-95"
        >
          <img
            alt={label}
            style={{ filter: grayFilter }}
            className="w-[24px] h-[24px] object-contain shrink-0"
            src={iconSrc}
          />
          <p className="font-['Lexend_Deca',sans-serif] font-semibold text-[#515151] text-[9.8px] leading-[13px] text-center tracking-[0.3px] whitespace-nowrap mt-1.5">
            {label}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="-translate-x-1/2 absolute bottom-[20px] content-stretch flex justify-between gap-[16px] h-[80px] items-center left-1/2 px-[28px] w-[calc(100%-32px)] max-w-[370px] z-50 bg-white/30 backdrop-blur-2xl rounded-[32px] border border-white/40 shadow-[0_12px_40px_rgba(31,38,135,0.08)]">
      {renderNavItem('home', imgIcon, 'Accueil', isHome)}
      {renderNavItem('checkin', imgIcon1, 'Quotidien', isCheckin)}
      {renderNavItem('objectives', imgIcon2, 'Objectifs', isObjectives)}
      {renderNavItem('profile', imgIcon3, 'Profil', isProfile)}
    </div>
  );
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-2xl bg-white/40 border border-white/60 rounded-[32px] p-6 shadow-[0_8px_32px_rgba(31,38,135,0.06)] relative overflow-visible ${className}`}>
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-[32px]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function LoadingScreen({ onDone }: { onDone: () => void }) {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center z-20 bg-white pb-[90px]"
      ref={(el) => { if (el) { setTimeout(onDone, 3000); } }}
    >
      {/* Nebula Orb */}
      <div className="relative flex items-center justify-center" style={{ width: 280, height: 280 }}>

        {/* Outer soft halo - pink */}
        <div className="absolute rounded-full animate-breathe-slow" style={{
          width: 260, height: 260,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,182,193,0.65) 0%, transparent 70%)',
          filter: 'blur(18px)',
          willChange: 'transform, opacity',
        }} />
        {/* Outer halo - blue */}
        <div className="absolute rounded-full animate-breathe-slow" style={{
          width: 240, height: 240,
          background: 'radial-gradient(circle at 30% 60%, rgba(173,216,255,0.65) 0%, transparent 65%)',
          filter: 'blur(16px)',
          animationDelay: '1.5s',
          willChange: 'transform, opacity',
        }} />
        {/* Outer halo - yellow */}
        <div className="absolute rounded-full animate-breathe-slow" style={{
          width: 220, height: 220,
          background: 'radial-gradient(circle at 70% 70%, rgba(255,245,150,0.55) 0%, transparent 60%)',
          filter: 'blur(14px)',
          animationDelay: '0.8s',
          willChange: 'transform, opacity',
        }} />

        {/* Middle layer - iridescent core glow */}
        <div className="absolute rounded-full animate-breathe" style={{
          width: 160, height: 160,
          background: 'conic-gradient(from 0deg, rgba(255,182,193,0.95), rgba(173,216,255,0.95), rgba(200,255,220,0.9), rgba(255,245,180,0.95), rgba(220,190,255,0.95), rgba(255,182,193,0.95))',
          filter: 'blur(6px)',
          opacity: 0.9,
          animationDelay: '0.4s',
          willChange: 'transform, opacity',
        }} />

        {/* Inner white-blue shimmer */}
        <div className="absolute rounded-full animate-breathe" style={{
          width: 100, height: 100,
          background: 'radial-gradient(circle at 40% 35%, #ffffff 0%, rgba(200,230,255,0.95) 40%, rgba(180,200,255,0.8) 100%)',
          filter: 'blur(4px)',
          boxShadow: '0 0 24px 10px rgba(255,255,255,0.85)',
          animationDelay: '0.9s',
          willChange: 'transform, opacity',
        }} />

        {/* Bright center point */}
        <div className="absolute rounded-full animate-breathe" style={{
          width: 28, height: 28,
          background: 'radial-gradient(circle, #ffffff 0%, rgba(230,240,255,0.9) 100%)',
          filter: 'blur(2px)',
          boxShadow: '0 0 14px 8px rgba(255,255,255,1)',
          animationDelay: '1.2s',
          willChange: 'transform, opacity',
        }} />
      </div>

      {/* Text */}
      <p className="font-light text-[#b0b8c8] text-[11px] tracking-[0.25em] mt-8 animate-textReveal">
        ANALYSE EN COURS...
      </p>
    </div>
  );
}

const imgMeditationIcon = "/assets/924722505b3691e6e6b7174fe50e3164869ef900.svg";
const imgAuraBackground = "/assets/363aea9999cc00505fbf11e2e9ff860e48b435d6.svg";

function DailyCardOverlay({ insight, onClose, onStart }: { insight: DailyInsight; onClose: () => void, onStart: () => void }) {
  const dateObj = new Date();
  const dateStr = dateObj.toLocaleDateString('fr-FR', { month: 'short', day: '2-digit' }).replace('.', '');
  // dateStr in fr-FR format is "DD MMM", e.g., "11 mai"
  const parts = dateStr.split(' ');
  const day = parts[0] || '11';
  const monthStr = parts[1] || 'mai';
  const month = monthStr.charAt(0).toUpperCase() + monthStr.slice(1);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-[100] flex flex-col items-center justify-center gap-10 p-6 pt-[78px] bg-white/50 backdrop-blur-2xl animate-fadeSlide" onClick={onClose}>

      {/* Card Container (holds Aura + Card) */}
      <div className="relative flex items-center justify-center" style={{ width: '270px', height: '356px' }}>

        {/* Background Aura Layer behind the card */}
        <div className="absolute pointer-events-none flex items-center justify-center z-0">
          <div className="rotate-[-3.26deg]">
            <div className="relative w-[380px] h-[486px]">
              <img alt="" className="absolute inset-0 w-[140%] h-[140%] max-w-none -translate-x-[15%] -translate-y-[15%] object-cover" src={imgAuraBackground} />
            </div>
          </div>
        </div>

        {/* The Card itself */}
        <div
          className="overflow-clip absolute inset-0 rounded-[20px] shadow-[0_24px_46px_-14px_rgba(84,89,158,0.28)] bg-white flex flex-col z-10"
          onClick={e => e.stopPropagation()}
        >
          <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={insight.image} />
          <div className="absolute inset-0 bg-white/10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[172px] bg-gradient-to-t from-white via-white/95 to-white/0 pointer-events-none" />

          {/* Empty space to push content to the bottom */}
          <div className="flex-1" />

          {/* Content Container */}
          <div className="relative z-10 w-full px-[20px] pb-[20px] flex flex-col gap-[28px]">

            {/* Date & Icon Row */}
            <div className="flex items-end justify-between w-full">
              <img alt="Meditation" className="w-[40px] h-[35px] object-contain pb-1" src={imgMeditationIcon} />
              <div className="flex items-baseline gap-1.5 text-[#54599e]">
                <span className="font-medium text-[41px] leading-none tracking-tight">{month}</span>
                <span className="font-thin text-[41px] leading-none">{day}</span>
              </div>
            </div>

            {/* Tags Section */}
            <div className="flex flex-col gap-[7px]">
              <div className="flex flex-wrap gap-[6px]">
                {insight.tags.map(tag => (
                  <div key={tag} className="bg-[#eeeffc]/90 text-[#4a569d] px-[7px] py-[3.5px] rounded-full text-[8.5px] font-semibold tracking-wide uppercase whitespace-nowrap">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Today Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onStart();
        }}
        className="relative z-10 px-8 py-3.5 w-[270px] rounded-[24px] overflow-hidden hover:opacity-95 transition-all active:scale-[0.98] shadow-[0_6px_24px_rgba(169,173,249,0.35)]"
        style={{ background: 'linear-gradient(135deg, #c7d2fe 0%, #a9adf9 40%, #e0bbff 100%)' }}
      >
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
        <p className="relative z-10 font-semibold text-white text-[15px] tracking-wide">Commencer aujourd'hui</p>
      </button>

    </div>
  );
}

const getTagStyles = (tag: string) => {
  const lower = tag.toLowerCase();
  if (lower.includes('principal') || lower.includes('objectif') || lower.includes('rapide') || lower.includes('max') || lower.includes('quotidien')) {
    return { bg: 'bg-[rgba(184,188,255,0.3)]', text: 'text-[#313578]' };
  }
  if (lower.includes('repos') || lower.includes('calme') || lower.includes('énergie') || lower.includes('fin')) {
    return { bg: 'bg-[#e6e8ec]', text: 'text-[#5c5f63]' };
  }
  if (lower.includes('bien-être') || lower.includes('santé')) {
    return { bg: 'bg-[#b3ecf3]/30', text: 'text-[#1e5a60]' };
  }
  return { bg: 'bg-[rgba(184,188,255,0.3)]', text: 'text-[#313578]' };
};

const goalLabels: Record<string, string> = {
  procrastination: 'sortir de la procrastination',
  habits: 'installer un rituel durable',
  focus: 'retrouver une concentration calme',
  wellbeing: 'préserver ton bien-être',
  other: 'honorer ton objectif personnel',
};

interface AppTask {
  id: number;
  type: 'core' | 'normal' | 'rest';
  tag: string | null;
  title: string;
  desc: string;
  time: string;
}

interface DailyInsight {
  title: string;
  subtitle: string;
  tags: string[];
  palette: string;
  image: string;
}

function normalizeMood(mood: string | null) {
  const lower = (mood ?? '').toLowerCase();
  if (lower.includes('inspir')) return 'inspired';
  if (lower.includes('stress')) return 'stressed';
  if (lower.includes('rêv') || lower.includes('rev') || lower.includes('dream')) return 'dreamy';
  return 'calm';
}

function getTextSignals(text: string) {
  const lower = text.toLowerCase();
  return {
    hasDream: /dream|rêve|reve|梦|cauchemar|nightmare|sleep|sommeil|醒|睡/.test(lower),
    hasAnxiety: /stress|anx|peur|worried|担心|焦虑|害怕|紧张|panic/.test(lower),
    hasCreation: /create|creative|design|figma|write|dessin|projet|灵感|创作|设计|写/.test(lower),
    hasStudy: /study|learn|course|exam|mémoire|thesis|毕设|学习|论文|作业|cours/.test(lower),
    hasTired: /tired|fatigue|épuis|sleepy|累|疲惫|困|low/.test(lower),
  };
}

function getGoalFocus(goals: string[], otherGoal: string) {
  if (goals.includes('other') && otherGoal.trim()) return otherGoal.trim();
  const firstGoal = goals.find(goal => goal !== 'other');
  return firstGoal ? goalLabels[firstGoal] : 'avancer avec douceur';
}

function pickDailyCardImage(text: string, energy: number, focus: number, mood: string | null, goals: string[]) {
  const seedSource = `${text.trim() || 'daily'}|${energy}|${focus}|${mood ?? ''}|${goals.join(',')}|${new Date().toDateString()}`;
  let hash = 0;
  for (let i = 0; i < seedSource.length; i += 1) {
    hash = (hash * 31 + seedSource.charCodeAt(i)) >>> 0;
  }
  return dailyCardImages[hash % dailyCardImages.length];
}

function buildDailyInsight(text: string, energy: number, focus: number, mood: string | null, goals: string[], otherGoal: string): DailyInsight {
  const signals = getTextSignals(text);
  const moodKey = normalizeMood(mood);
  const goalFocus = getGoalFocus(goals, otherGoal);
  const hasText = text.trim().length > 0;

  const tags = [
    signals.hasDream ? 'DREAM SIGNAL' : 'DAILY SIGNAL',
    energy < 40 ? 'LOW ENERGY' : energy > 70 ? 'HIGH ENERGY' : 'BALANCED',
    focus < 45 ? 'SOFT FOCUS' : 'CLEAR FOCUS',
    moodKey.toUpperCase(),
  ];

  let title = 'Soft Reset';
  if (signals.hasDream && signals.hasStudy) title = 'Dream to Thesis';
  else if (signals.hasDream && signals.hasCreation) title = 'Dream to Creation';
  else if (signals.hasDream) title = 'Dream Anchor';
  else if (signals.hasAnxiety) title = 'Calm Priority';
  else if (signals.hasCreation) title = 'Creative Focus';
  else if (signals.hasStudy) title = 'Study Rhythm';

  const subtitle = hasText
    ? `Transforme le signal de ce matin en une action reliée à ${goalFocus}, sans recopier ton récit.`
    : `Construis une journée légère autour de ${goalFocus}.`;

  const palette = signals.hasAnxiety
    ? 'radial-gradient(circle at 28% 26%, rgba(255,245,222,0.96) 0%, transparent 36%), radial-gradient(circle at 72% 34%, rgba(169,173,249,0.7) 0%, transparent 42%), radial-gradient(circle at 48% 78%, rgba(245,166,202,0.55) 0%, transparent 46%), linear-gradient(145deg, #fff6ee 0%, #eef3ff 56%, #ffe4ef 100%)'
    : signals.hasCreation
      ? 'radial-gradient(circle at 30% 28%, rgba(255,199,170,0.9) 0%, transparent 38%), radial-gradient(circle at 74% 38%, rgba(169,173,249,0.72) 0%, transparent 45%), radial-gradient(circle at 48% 78%, rgba(179,236,243,0.6) 0%, transparent 44%), linear-gradient(145deg, #fff1e7 0%, #eef1ff 50%, #eafffb 100%)'
      : 'radial-gradient(circle at 28% 26%, rgba(255,255,255,0.98) 0%, transparent 34%), radial-gradient(circle at 68% 34%, rgba(181,214,255,0.72) 0%, transparent 44%), radial-gradient(circle at 42% 78%, rgba(255,189,160,0.52) 0%, transparent 46%), linear-gradient(145deg, #f9fbff 0%, #f0edff 48%, #ffe8dd 100%)';

  return { title, subtitle, tags, palette, image: pickDailyCardImage(text, energy, focus, mood, goals) };
}

function generateAppTasks(energy: number, focus: number, mood: string | null, goals: string[], otherGoal: string, checkinText: string): AppTask[] {
  const tasks: AppTask[] = [];
  let id = 1;

  const isHighEnergy = energy > 65;
  const isHighFocus = focus > 65;
  const isLowEnergy = energy < 35;
  const signals = getTextSignals(checkinText);
  const hasText = checkinText.trim().length > 0;
  const goalFocus = getGoalFocus(goals, otherGoal);

  const moodLabel = normalizeMood(mood);

  // 1. Core Focus (based on morning mood)
  const coreTasks: Record<string, AppTask> = {
    inspired: {
      id: id++, type: 'core', tag: 'FOCUS PRINCIPAL',
      title: 'Exploiter l\'Élan Créatif',
      desc: 'Vous vous sentez inspiré — profitez de ce moment pour brainstormer et créer librement sans filtre.',
      time: '30 min'
    },
    calm: {
      id: id++, type: 'core', tag: 'FOCUS PRINCIPAL',
      title: 'Session de Travail Profond',
      desc: 'Votre état calme est idéal pour une concentration ininterrompue. Attaquez votre tâche principale.',
      time: '45 min'
    },
    stressed: {
      id: id++, type: 'core', tag: 'FOCUS PRINCIPAL',
      title: 'Simplifier & Prioriser',
      desc: 'Le stress nécessite de la clarté. Notez vos 3 priorités absolues et mettez de côté le reste pour l\'instant.',
      time: '15 min'
    },
    dreamy: {
      id: id++, type: 'core', tag: 'FOCUS PRINCIPAL',
      title: 'Planification Douce',
      desc: 'Votre esprit rêveur est parfait pour imaginer l\'avenir. Esquissez un plan de la semaine sans pression.',
      time: '20 min'
    }
  };
  if (hasText) {
    tasks.push({
      id: id++,
      type: 'core',
      tag: signals.hasDream ? 'SIGNAL DU RÊVE' : 'SIGNAL DU MATIN',
      title: signals.hasDream ? 'Transformer le rêve en direction' : 'Extraire la priorité du matin',
      desc: `Repère l'émotion dominante de ta note, puis choisis une seule action qui sert ${goalFocus}. Le récit reste une source, pas une tâche à répéter.`,
      time: signals.hasAnxiety || isLowEnergy ? '12 min' : '20 min',
    });
  } else {
    tasks.push(coreTasks[moodLabel] ?? coreTasks['calm']);
  }

  // 2. Goal-based tasks
  if (goals.includes('procrastination')) {
    tasks.push({
      id: id++,
      type: isHighEnergy ? 'normal' : 'rest',
      tag: isLowEnergy ? 'AJUSTÉ POUR ÉNERGIE' : 'ACTION RAPIDE',
      title: isHighEnergy ? 'Sprint des 2 Minutes' : 'Un Tout Petit Pas',
      desc: isHighEnergy
        ? 'Choisissez la tâche que vous repoussez le plus. Lancez un minuteur de 2 minutes et commencez.'
        : 'Votre énergie est basse. Choisissez une micro-tâche de moins de 5 min. Mieux vaut fait que parfait.',
      time: isHighEnergy ? '25 min' : '10 min'
    });
  }

  if (goals.includes('habits')) {
    tasks.push({
      id: id++, type: 'normal', tag: 'RITUEL QUOTIDIEN',
      title: 'Suivi des Habitudes',
      desc: 'Passez en revue vos habitudes du jour. Marquez ce qui est fait et ajoutez une micro-habitude de 1 min.',
      time: '10 min'
    });
  }

  if (goals.includes('focus')) {
    tasks.push({
      id: id++,
      type: isHighFocus ? 'core' : 'normal',
      tag: isHighFocus ? 'FOCUS MAX' : 'RETOUR AU CALME',
      title: signals.hasDream ? 'Focus aligné au symbole du matin' : isHighFocus ? 'Ultra-Concentration' : 'Méthode Pomodoro Douce',
      desc: signals.hasDream
        ? `Utilise l'image centrale de ton rêve comme repère mental, puis avance sur ${goalFocus} dans un bloc court et protégé.`
        : isHighFocus
          ? 'Votre esprit est vif. Bloquez toutes les distractions pour un sprint de 50 minutes en immersion totale.'
          : 'Commencez par 25 minutes de Pomodoro. Téléphone rangé, un seul onglet ouvert. Un pas après l\'autre.',
      time: isHighFocus ? '50 min' : '25 min'
    });
  }

  if (goals.includes('wellbeing')) {
    tasks.push({
      id: id++,
      type: 'normal',
      tag: 'BIEN-ÊTRE',
      title: signals.hasAnxiety ? 'Décharger avant d\'agir' : isLowEnergy ? 'Pause de Récupération' : 'Pause de Mouvement Actif',
      desc: signals.hasAnxiety
        ? 'Avant la prochaine tâche, écris trois lignes pour déposer la tension, puis reviens à une action assez petite pour rester douce.'
        : isLowEnergy
          ? 'Votre corps demande du repos. Faites une sieste de 20 min ou étirez-vous doucement près de la fenêtre.'
          : 'Profitez de votre vitalité pour faire 10 minutes de marche rapide, d\'étirements ou de yoga.',
      time: isLowEnergy ? '20 min' : '10 min'
    });
  }

  if (signals.hasStudy && !goals.includes('focus')) {
    tasks.push({
      id: id++,
      type: 'normal',
      tag: 'ANCRAGE PROJET',
      title: 'Relier la note au travail réel',
      desc: `Convertis le thème de ton entrée en une décision concrète pour ${goalFocus}: une page, un croquis, une source ou une mini-livrable.`,
      time: '25 min'
    });
  }

  if (goals.includes('other') && otherGoal.trim()) {
    tasks.push({
      id: id++, type: 'normal', tag: 'VOTRE OBJECTIF',
      title: otherGoal.length > 40 ? otherGoal.slice(0, 40) + '…' : otherGoal,
      desc: 'Vous avez défini cet objectif vous-même. Consacrez-y un moment de concentration aujourd\'hui.',
      time: '30 min'
    });
  }

  // 3. Always end with reflection
  tasks.push({
    id: id++, type: 'normal', tag: 'FIN DE JOURNÉE',
    title: 'Bilan & Réflexion du Soir',
    desc: 'Avant de dormir, écrivez 3 choses : ce que vous avez accompli, ce que vous avez ressenti, et vos souhaits pour demain.',
    time: '10 min'
  });

  return tasks;
}

function ObjectivesEditor({
  longTermGoal: _longTermGoal,
  goals: _goals,
  otherGoal: _otherGoal,
  onSavePlan
}: {
  longTermGoal: string;
  goals: string[];
  otherGoal: string;
  onSavePlan: (goal: string, plan: string, direction: string, goals: string[], otherGoal: string, answers: string[]) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<'procrastination' | 'habits' | 'focus' | 'wellbeing' | 'other'>('other');
  const [customGoal, setCustomGoal] = useState('');
  
  // AI Question state
  const [qaStep, setQaStep] = useState(0); // 0: edit goal, 1: stress question, 2: time question
  const [pressureAnswer, setPressureAnswer] = useState('');
  const [qInput, setQInput] = useState('');

  const pressureOptions = [
    { label: "Très serein(e)", icon: Leaf, color: "text-[#40c057]" },
    { label: "Un peu stressé(e)", icon: Zap, color: "text-[#e28743]" },
    { label: "Grosse pression", icon: Flame, color: "text-[#e03131]" }
  ];

  const timeOptions = [
    { label: "15-30 min", icon: Timer, color: "text-[#4a569d]" },
    { label: "1-2 heures", icon: Rocket, color: "text-[#4a569d]" },
    { label: "Demi-journée", icon: Target, color: "text-[#4a569d]" }
  ];

  const startReplan = () => {
    setEditing(true);
    setQaStep(0);
    setPressureAnswer('');
    setQInput('');
    setCustomGoal('');
  };

  const handleNextStep = () => {
    if (qaStep === 0) {
      if (selectedPreset === 'other' && !customGoal.trim()) return;
      setQaStep(1);
      setQInput('');
    } else if (qaStep === 1) {
      const ans = qInput || "Modéré";
      setPressureAnswer(ans);
      setQaStep(2);
      setQInput('');
    } else if (qaStep === 2) {
      const finalTime = qInput || "1-2 heures";
      
      const selectedGoals = [selectedPreset];
      const selectedOtherGoal = selectedPreset === 'other' ? customGoal : '';
      
      const translations: Record<string, string> = {
        procrastination: 'Vaincre la procrastination',
        habits: 'Bâtir des rituels durables',
        focus: 'Retrouver une concentration calme',
        wellbeing: 'Préserver mon bien-être',
      };
      
      let finalGoal = selectedPreset === 'other' ? customGoal.trim() : translations[selectedPreset];
      
      let milestonePlan = "Étape 1 : Diagnostic & Clarté globale";
      let milestoneDirection = "Prendre du recul, observer vos déclencheurs sans jugement.";
      
      const isStressed = pressureAnswer.includes('Grosse') || pressureAnswer.includes('stressé') || qInput.includes('Grosse') || qInput.includes('stressé');
      const isShortTime = finalTime.includes('15-30');

      if (selectedPreset === 'procrastination') {
        milestonePlan = "Étape 1 : Ancrage & Micro-actions (1-2 semaines)";
        milestoneDirection = isStressed
          ? "Viser des blocs très courts (10 min) pour désamorcer l'anxiété du début."
          : "Instaurer la règle des 2 minutes sur une tâche prioritaire par jour.";
      } else if (selectedPreset === 'focus') {
        milestonePlan = "Étape 1 : Sanctuarisation de l'attention (10 jours)";
        milestoneDirection = isShortTime
          ? "Un seul onglet ouvert pendant 20 minutes d'immersion totale."
          : "Protéger une session de 45 minutes de travail profond le matin.";
      } else if (selectedPreset === 'wellbeing') {
        milestonePlan = "Étape 1 : Régulation du rythme corporel (2 semaines)";
        milestoneDirection = "Alterner travail et micro-étirements, en écoutant l'énergie matinale.";
      } else if (selectedPreset === 'habits') {
        milestonePlan = "Étape 1 : Rituels durables & Micro-habitudes";
        milestoneDirection = "Associer une nouvelle habitude de 1 min à une routine déjà ancrée.";
      } else {
        milestonePlan = "Étape 1 : Définition des jalons & Pratique douce";
        milestoneDirection = isStressed 
          ? "Avancer par micro-pas de 15 min, en évitant toute surcharge mentale."
          : `Consacrer un moment d'ancrage quotidien de ${finalTime} à votre intention.`;
      }

      onSavePlan(finalGoal, milestonePlan, milestoneDirection, selectedGoals, selectedOtherGoal, [pressureAnswer, finalTime]);
      setEditing(false);
    }
  };

  const handleQuickTag = (opt: string) => {
    setQInput(opt);
  };

  if (!editing) {
    return (
      <button
        onClick={startReplan}
        className="w-full py-3 backdrop-blur-[4.5px] border-2 border-solid border-white bg-gradient-to-r from-white/60 via-[#a9adf9]/45 to-white/60 flex items-center justify-center rounded-full transition-all hover:scale-[0.98] active:scale-[0.95] cursor-pointer shadow-md gap-2"
      >
        <p className="font-semibold text-[14px] text-[#1c2b33] tracking-wide">✧ Modifier mon Plan d'Intention</p>
      </button>
    );
  }

  return (
    <div className="bg-white/95 border border-white/80 backdrop-blur-md rounded-[20px] p-5 flex flex-col gap-4 animate-fadeSlide text-[#1c2b33] shadow-lg font-['Lexend_Deca',sans-serif]">
      {qaStep === 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-semibold text-[#54599e] uppercase tracking-wider">Quel est votre nouvel objectif ?</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'procrastination', label: 'Procrastination' },
              { id: 'habits', label: 'Rituels/Habitudes' },
              { id: 'focus', label: 'Concentration' },
              { id: 'wellbeing', label: 'Bien-être' },
              { id: 'other', label: 'Personnalisé' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedPreset(item.id as any)}
                className={`py-2 px-3 text-[11px] font-medium rounded-lg border transition-all cursor-pointer ${
                  selectedPreset === item.id
                    ? 'bg-[#a9adf9]/20 border-[#a9adf9] text-[#4a569d] font-bold shadow-sm'
                    : 'bg-white hover:bg-gray-50 border-white/40 text-[#2f3336]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {selectedPreset === 'other' && (
            <input
              type="text"
              value={customGoal}
              onChange={e => setCustomGoal(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#a9adf9] text-[#1c2b33]"
              placeholder="Décrivez votre objectif principal..."
            />
          )}
        </div>
      )}

      {qaStep === 1 && (
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-semibold text-[#54599e] uppercase tracking-wider flex items-center gap-1.5">
            <span>Niveau de stress face à cet objectif ?</span>
            <Smile className="size-4 text-[#54599e]" />
          </p>
          <div className="flex flex-wrap gap-2">
            {pressureOptions.map(opt => {
              const IconComp = opt.icon;
              const isSelected = qInput === opt.label;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => handleQuickTag(opt.label)}
                  className={`py-2 px-3 text-[11px] font-medium rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#a9adf9]/20 border-[#a9adf9] text-[#4a569d] font-bold shadow-sm'
                      : 'bg-white hover:bg-gray-50 border-white/40 text-[#2f3336]'
                  }`}
                >
                  <IconComp className={`size-[13px] shrink-0 ${opt.color}`} />
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
          <input
            type="text"
            value={qInput}
            onChange={e => setQInput(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#a9adf9] text-[#1c2b33]"
            placeholder="Ou tapez votre propre réponse..."
          />
        </div>
      )}

      {qaStep === 2 && (
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-semibold text-[#54599e] uppercase tracking-wider flex items-center gap-1.5">
            <span>Combien de temps y accorder chaque jour ?</span>
            <Clock className="size-4 text-[#54599e]" />
          </p>
          <div className="flex flex-wrap gap-2">
            {timeOptions.map(opt => {
              const IconComp = opt.icon;
              const isSelected = qInput === opt.label;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => handleQuickTag(opt.label)}
                  className={`py-2 px-3 text-[11px] font-medium rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#a9adf9]/20 border-[#a9adf9] text-[#4a569d] font-bold shadow-sm'
                      : 'bg-white hover:bg-gray-50 border-white/40 text-[#2f3336]'
                  }`}
                >
                  <IconComp className={`size-[13px] shrink-0 ${opt.color}`} />
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
          <input
            type="text"
            value={qInput}
            onChange={e => setQInput(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#a9adf9] text-[#1c2b33]"
            placeholder="Ou tapez votre propre réponse..."
          />
        </div>
      )}

      <div className="flex gap-2 justify-end mt-2">
        <button
          type="button"
          onClick={() => {
            if (qaStep > 0) setQaStep(qaStep - 1);
            else setEditing(false);
          }}
          className="px-4 py-2 bg-gray-150 hover:bg-gray-200 text-[#5c5f63] text-[11px] rounded-lg font-medium transition-colors cursor-pointer"
        >
          {qaStep > 0 ? "Retour" : "Annuler"}
        </button>
        <button
          type="button"
          onClick={handleNextStep}
          disabled={qaStep === 0 && selectedPreset === 'other' && !customGoal.trim()}
          className="px-4 py-2 bg-[#a9adf9] hover:bg-[#999df5] text-white text-[11px] rounded-lg font-medium transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-1"
        >
          {qaStep === 2 ? (
            <>
              Valider <Sparkles className="size-3.5 text-white" />
            </>
          ) : "Continuer ➔"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [phoneScale, setPhoneScale] = useState(1);

  useEffect(() => {
    const updatePhoneScale = () => {
      const pagePadding = window.innerWidth >= 640 ? 64 : 32;
      const widthScale = (window.innerWidth - pagePadding) / PHONE_WIDTH;
      const heightScale = (window.innerHeight - pagePadding) / PHONE_HEIGHT;

      setPhoneScale(Math.max(0.1, Math.min(1, widthScale, heightScale)));
    };

    updatePhoneScale();
    window.addEventListener('resize', updatePhoneScale);
    return () => window.removeEventListener('resize', updatePhoneScale);
  }, []);

  // 长期目标与用户 Session
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem('lumo_user_email') || '');
  const [longTermGoal, setLongTermGoal] = useState(() => localStorage.getItem('lumo_long_term_goal') || '');
  const [milestonePlan, setMilestonePlan] = useState(() => localStorage.getItem('lumo_milestone_plan') || '');
  const [milestoneDirection, setMilestoneDirection] = useState(() => localStorage.getItem('lumo_milestone_direction') || '');
  const [goals, setGoals] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('lumo_goals') || '["procrastination", "focus"]');
    } catch {
      return ['procrastination', 'focus'];
    }
  });
  const [otherGoal, setOtherGoal] = useState(() => localStorage.getItem('lumo_other_goal') || '');
  const [_aiAnswers, setAiAnswers] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('lumo_ai_answers') || '[]');
    } catch {
      return [];
    }
  });

  // 睡眠目标设置
  const [sleepTarget, setSleepTarget] = useState(() => {
    const val = localStorage.getItem('lumo_sleep_target');
    return val ? parseFloat(val) : 8.0;
  });

  // 页面切换
  const [view, setView] = useState<'onboarding' | 'checkin' | 'loading' | 'summary' | 'home' | 'objectives' | 'profile' | 'dream_timeline' | 'mood_analytics'>('onboarding');

  // 梦境时间轴活动卡片索引
  const [activeDreamIndex, setActiveDreamIndex] = useState(0);
  
  // 梦境时间轴列表是否展开
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);

  // 情绪热力图选中索引
  const [selectedHeatmapDayIndex, setSelectedHeatmapDayIndex] = useState(0);

  // 每一张卡片是原始还是Figma样式记录
  const [cardStyles, setCardStyles] = useState<Record<number, 'original' | 'figma'>>({});

  // 放大放大的梦境卡片ID
  const [expandedDreamId, setExpandedDreamId] = useState<number | null>(null);

  // 情绪热力图当前选中年月和下拉显隐
  const [heatmapMonth, setHeatmapMonth] = useState('Mai 2026');
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  // 梦境日历魔态弹窗状态
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [calendarMode, setCalendarMode] = useState<'weekly' | 'monthly'>('weekly');

  // 拖动/划动坐标记录
  const dragStartX = useRef(0);

  const [showDailyCard, setShowDailyCard] = useState(false);
  const [showDreamModal, setShowDreamModal] = useState(false);
  const [showMoodModal, setShowMoodModal] = useState(false);
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(50);
  const [mentalFocus, setMentalFocus] = useState(50);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [checkinText, setCheckinText] = useState('');
  const [dailyGoalActive, setDailyGoalActive] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  const startVoiceRecording = () => {
    if (isRecording) return;
    setIsRecording(true);
    // 模拟一段极富画面感的晨间主观体验梦境（包含毕设学术焦虑与疲惫的信号）
    setTimeout(() => {
      setCheckinText("J'ai rêvé que je présentais ma soutenance de mémoire dans une salle vide, puis mes slides se sont transformées en vagues d'eau. Je me réveille fatigué mais inspiré par cette image.");
      setIsRecording(false);
    }, 2200);
  };

  // 今日任务与完成状态（持久化）
  const [dailyTasks, setDailyTasks] = useState<AppTask[]>(() => {
    try {
      const val = localStorage.getItem('lumo_daily_tasks');
      return val ? JSON.parse(val) : [];
    } catch {
      return [];
    }
  });
  const [selectedTasks, setSelectedTasks] = useState<number[]>(() => {
    try {
      const val = localStorage.getItem('lumo_selected_tasks');
      return val ? JSON.parse(val) : [];
    } catch {
      return [];
    }
  });

  // 历史打卡日历状态（持久化）
  const [dailyHistory, setDailyHistory] = useState<Record<string, { mood: string | null; energy: number; focus: number; completed: boolean }>>(() => {
    try {
      const val = localStorage.getItem('lumo_daily_history');
      return val ? JSON.parse(val) : {};
    } catch {
      return {};
    }
  });

  // 修改任务的临时状态
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState('');
  const [editingTaskDesc, setEditingTaskDesc] = useState('');

  const startEditingTask = (task: AppTask) => {
    setEditingTaskId(task.id);
    setEditingTaskTitle(task.title);
    setEditingTaskDesc(task.desc);
  };

  const saveTaskEdit = (id: number) => {
    setDailyTasks(prev => {
      const updated = prev.map(t => t.id === id ? { ...t, title: editingTaskTitle, desc: editingTaskDesc } : t);
      localStorage.setItem('lumo_daily_tasks', JSON.stringify(updated));
      return updated;
    });
    setEditingTaskId(null);
  };

  const ignoreTask = (id: number) => {
    setDailyTasks(prev => {
      const updated = prev.filter(t => t.id !== id);
      localStorage.setItem('lumo_daily_tasks', JSON.stringify(updated));
      return updated;
    });
    setSelectedTasks(prev => {
      const updated = prev.filter(tid => tid !== id);
      localStorage.setItem('lumo_selected_tasks', JSON.stringify(updated));
      return updated;
    });
  };


  const toggleTask = (id: number) => {
    setSelectedTasks(prev => {
      const next = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      localStorage.setItem('lumo_selected_tasks', JSON.stringify(next));
      
      // 检查今天是否打卡 100% 完成
      const totalCount = dailyTasks.length;
      if (totalCount > 0) {
        const completedCount = next.filter(tid => dailyTasks.some(t => t.id === tid)).length;
        const isDone = completedCount === totalCount;
        
        // 更新历史打卡数据中 Friday (或今日) 的状态
        const todayKey = "ven"; // standard representation for Fri
        setDailyHistory(prevHist => {
          const updated = {
            ...prevHist,
            [todayKey]: {
              mood: selectedMood,
              energy: energyLevel,
              focus: mentalFocus,
              completed: isDone
            }
          };
          localStorage.setItem('lumo_daily_history', JSON.stringify(updated));
          return updated;
        });
      }
      return next;
    });
  };

  // 这里的 tasks 仅仅作为展示，在 summary 和 home 页面均读取 dailyTasks
  const tasks = dailyTasks;

  const dailyInsight = useMemo(() => {
    return buildDailyInsight(checkinText, energyLevel, mentalFocus, selectedMood, goals, otherGoal);
  }, [checkinText, energyLevel, mentalFocus, selectedMood, goals, otherGoal]);

  // Mock timeline data matching Image 2, structured in French, with Friday dynamically linked to checkinText
  const dreamTimelineData = useMemo(() => [
    {
      id: 0,
      date: "Mai 08",
      dayName: "Vendredi",
      dayShort: "Ven",
      weekday: "Fri",
      dayNum: "08",
      title: "La symphonie des vagues",
      content: checkinText.trim() || "Je présentais ma soutenance de mémoire dans une salle vide, puis mes slides se sont transformées en vagues d'eau cristalline. Je me sens inspiré par cette image.",
      tags: ["INSPIRÉ", "EAU CRISTALLINE", "SOUTENANCE"],
      mood: "créatif • serein",
      energy: "Moyenne",
      energyVal: 2,
      image: "/assets/daily-card-04.jpeg"
    },
    {
      id: 1,
      date: "Mai 07",
      dayName: "Jeudi",
      dayShort: "Jeu",
      weekday: "Thu",
      dayNum: "07",
      title: "Le labyrinthe doré",
      content: "Je marchais dans un palais infini où chaque miroir reflétait une version différente de mon avenir. Une douce lueur dorée me guidait vers la sortie.",
      tags: ["CALME", "LUMIÈRE DORÉE", "CHEMIN"],
      mood: "calme • curieux",
      energy: "Haute",
      energyVal: 3,
      image: "/assets/daily-card-05.jpeg"
    },
    {
      id: 2,
      date: "Mai 06",
      dayName: "Mercredi",
      dayShort: "Mer",
      weekday: "Wed",
      dayNum: "06",
      title: "L'horloge de sable",
      content: "Un immense sablier flottait au-dessus de la mer. Le sable s'écoulait vers le haut, et le bruit des vagues s'harmonisait avec mon rythme respiratoire.",
      tags: ["REPOS", "HYPNOTIQUE", "CALME"],
      mood: "apaisé • pensif",
      energy: "Basse",
      energyVal: 1,
      image: "/assets/daily-card-06.jpeg"
    },
    {
      id: 3,
      date: "Mai 05",
      dayName: "Mardi",
      dayShort: "Mar",
      weekday: "Tue",
      dayNum: "05",
      title: "Le vol au-dessus du dôme",
      content: "Je flottais dans les airs sans aucun effort. En dessous de moi se tenait une magnifique cité de verre violet et or. L'air était pur, frais et calme.",
      tags: ["VOLER", "CITÉ DE VERRE", "DÔME"],
      mood: "libéré • nostalgique",
      energy: "Basse",
      energyVal: 1,
      image: "/assets/daily-card-01.jpeg"
    },
    {
      id: 4,
      date: "Mai 04",
      dayName: "Lundi",
      dayShort: "Lun",
      weekday: "Mon",
      dayNum: "04",
      title: "La bibliothèque étoilée",
      content: "Des milliers de livres ouverts flottaient dans l'espace. Les pages brillaient comme des constellations, révélant des symboles oubliés.",
      tags: ["SAGESSE", "ANCRAGE PROJET", "ÉTOILES"],
      mood: "inspiré • calme",
      energy: "Moyenne",
      energyVal: 2,
      image: "/assets/daily-card-02.jpeg"
    },
    {
      id: 5,
      date: "Mai 03",
      dayName: "Dimanche",
      dayShort: "Dim",
      weekday: "Sun",
      dayNum: "03",
      title: "Le temple suspendu",
      content: "Je flottais au-dessus d'une montagne embrumée où un temple de marbre blanc lévitait au rythme du vent. Des cloches d'or chantaient au loin.",
      tags: ["PAISIBLE", "SAGESSE", "LÉVITATION"],
      mood: "apaisé • inspiré",
      energy: "Moyenne",
      energyVal: 2,
      image: "/assets/daily-card-03.jpeg"
    },
    {
      id: 6,
      date: "Mai 02",
      dayName: "Samedi",
      dayShort: "Sam",
      weekday: "Sat",
      dayNum: "02",
      title: "La forêt phosphorescente",
      content: "Chaque pas sur le sol faisait s'éveiller des milliers de fleurs lumineuses. Des papillons bleus scintillaient comme des lucioles géantes.",
      tags: ["MAGIQUE", "LUMIÈRE", "CONFIANT"],
      mood: "joyeux • curieux",
      energy: "Haute",
      energyVal: 3,
      image: "/assets/daily-card-04.jpeg"
    },
    {
      id: 7,
      date: "Mai 01",
      dayName: "Vendredi",
      dayShort: "Ven",
      weekday: "Fri",
      dayNum: "01",
      title: "L'océan de nuages",
      content: "Je naviguais sur un bateau en bois doré au milieu d'un océan de nuages roses et mauves. Le soleil couchant réchauffait mon visage.",
      tags: ["LIBERTÉ", "SÉRÉNITÉ", "VOYAGE"],
      mood: "serein • nostalgique",
      energy: "Basse",
      energyVal: 1,
      image: "/assets/daily-card-05.jpeg"
    }
  ], [checkinText]);

  // 30-day mock mood history data array for Mood Heatmap Screen
  const moodHistoryData = useMemo(() => {
    const getMappedMood = (selected: string | null): 'serein' | 'créatif' | 'stressé' | 'neutre' | 'fatigué' => {
      if (!selected) return 'serein';
      switch (selected) {
        case 'Calme': return 'serein';
        case 'Inspiré': return 'créatif';
        case 'Stressé': return 'stressé';
        case 'Rêveur': return 'neutre';
        default: return 'serein';
      }
    };

    return [
      {
        id: 0,
        date: "Aujourd'hui",
        dayName: "Vendredi",
        moodType: getMappedMood(selectedMood),
        intensity: selectedMood ? 5 : 4,
        title: selectedMood ? `Humeur : ${selectedMood}` : "Clarté Matinale",
        note: checkinText.trim() || "Aucune note saisie aujourd'hui. L'esprit reste serein et réceptif aux énergies calmes du matin.",
        energyVal: selectedMood === 'Stressé' ? 2 : selectedMood === 'Calme' ? 3 : 2
      },
      {
        id: 1,
        date: "Hier",
        dayName: "Jeudi",
        moodType: "créatif" as const,
        intensity: 5,
        title: "Éveil créatif",
        note: "Une immense vague d'idées neuves m'a traversé ce matin. Mes rêves de la veille ont nourri mes croquis professionnels.",
        energyVal: 3
      },
      {
        id: 2,
        date: "20 Mai",
        dayName: "Mercredi",
        moodType: "serein" as const,
        intensity: 4,
        title: "Harmonie intérieure",
        note: "Séance de méditation profonde au réveil. La respiration est fluide, aucun nuage à l'horizon mental.",
        energyVal: 2
      },
      {
        id: 3,
        date: "19 Mai",
        dayName: "Mardi",
        moodType: "fatigué" as const,
        intensity: 2,
        title: "Énergie basse",
        note: "Nuit agitée avec des réveils fréquents. L'esprit est un peu embrumé, besoin de repos et d'un bon thé chaud.",
        energyVal: 1
      },
      {
        id: 4,
        date: "18 Mai",
        dayName: "Lundi",
        moodType: "stressé" as const,
        intensity: 3,
        title: "Légère anxiété",
        note: "La pression des projets de la semaine se fait sentir dès le réveil. J'essaie de me concentrer sur une tâche à la fois.",
        energyVal: 2
      },
      {
        id: 5,
        date: "17 Mai",
        dayName: "Dimanche",
        moodType: "neutre" as const,
        intensity: 3,
        title: "Flânerie mentale",
        note: "Pas d'humeur dominante aujourd'hui. Je me laisse porter par les heures sans but précis, une douce léthargie poétique.",
        energyVal: 2
      },
      {
        id: 6,
        date: "16 Mai",
        dayName: "Samedi",
        moodType: "serein" as const,
        intensity: 5,
        title: "Calme absolu",
        note: "Réveil sans alarme. Le silence du matin est un baume. Alignement parfait entre le corps et l'esprit.",
        energyVal: 3
      },
      {
        id: 7,
        date: "15 Mai",
        dayName: "Vendredi",
        moodType: "créatif" as const,
        intensity: 4,
        title: "Esprit en effervescence",
        note: "Inspiré par une lecture nocturne. J'écris plusieurs pages dans mon carnet dès le lever du soleil.",
        energyVal: 3
      },
      {
        id: 8,
        date: "14 Mai",
        dayName: "Jeudi",
        moodType: "neutre" as const,
        intensity: 3,
        title: "Songe éveillé",
        note: "Impression persistante d'un rêve étrange de cité céleste. Je reste observateur de mes pensées.",
        energyVal: 2
      },
      {
        id: 9,
        date: "13 Mai",
        dayName: "Mercredi",
        moodType: "fatigué" as const,
        intensity: 2,
        title: "Sommeil non récupérateur",
        note: "Corps lourd au réveil. La journée demande un rythme ralenti et de la bienveillance envers moi-même.",
        energyVal: 1
      },
      {
        id: 10,
        date: "12 Mai",
        dayName: "Mardi",
        moodType: "stressé" as const,
        intensity: 4,
        title: "Turbulences matinales",
        note: "Beaucoup de courriels en attente. Une sensation de course contre la montre s'installe. Respiration ventrale nécessaire.",
        energyVal: 2
      },
      {
        id: 11,
        date: "11 Mai",
        dayName: "Lundi",
        moodType: "serein" as const,
        intensity: 4,
        title: "Nouveau départ",
        note: "Lundi serein. Les objectifs de la semaine sont clairs et motivants. Esprit parfaitement apaisé.",
        energyVal: 3
      },
      {
        id: 12,
        date: "10 Mai",
        dayName: "Dimanche",
        moodType: "créatif" as const,
        intensity: 5,
        title: "Rêves lucides inspirants",
        note: "J'ai contrôlé mon vol au-dessus d'une forêt lumineuse en rêve. Je me réveille avec une énergie débordante.",
        energyVal: 3
      },
      {
        id: 13,
        date: "09 Mai",
        dayName: "Samedi",
        moodType: "neutre" as const,
        intensity: 2,
        title: "Calme plat",
        note: "Rien de particulier à signaler. Une humeur stable, idéale pour ranger mon espace de vie et me ressourcer.",
        energyVal: 2
      },
      {
        id: 14,
        date: "08 Mai",
        dayName: "Vendredi",
        moodType: "serein" as const,
        intensity: 4,
        title: "Stabilité retrouvée",
        note: "Après quelques jours intenses, je retrouve mon ancrage. Les pensées sont claires, la posture est solide.",
        energyVal: 2
      },
      {
        id: 15,
        date: "07 Mai",
        dayName: "Jeudi",
        moodType: "fatigué" as const,
        intensity: 1,
        title: "Épuisement passager",
        note: "Besoin urgent d'une journée de déconnexion totale. Mes batteries sont au plus bas.",
        energyVal: 1
      },
      {
        id: 16,
        date: "06 Mai",
        dayName: "Mercredi",
        moodType: "créatif" as const,
        intensity: 3,
        title: "Étincelle artistique",
        note: "Une mélodie entendue en rêve me trotte dans la tête. Je tente de la reproduire sur mon instrument.",
        energyVal: 2
      },
      {
        id: 17,
        date: "05 Mai",
        dayName: "Mardi",
        moodType: "stressé" as const,
        intensity: 3,
        title: "Pensées parasites",
        note: "Difficulté à me concentrer ce matin. Le bruit ambiant m'agace un peu. Séance de cohérence cardiaque prévue.",
        energyVal: 1
      },
      {
        id: 18,
        date: "04 Mai",
        dayName: "Lundi",
        moodType: "serein" as const,
        intensity: 5,
        title: "Zénitude totale",
        note: "Sentiment profond de gratitude au réveil. La lumière matinale traverse les rideaux avec douceur.",
        energyVal: 3
      },
      {
        id: 19,
        date: "03 Mai",
        dayName: "Dimanche",
        moodType: "neutre" as const,
        intensity: 3,
        title: "Rêverie dominicale",
        note: "J'observe la pluie tomber en buvant mon café. Une mélancolie agréable et tranquille m'accompagne.",
        energyVal: 2
      },
      {
        id: 20,
        date: "02 Mai",
        dayName: "Samedi",
        moodType: "serein" as const,
        intensity: 4,
        title: "Sérénité printanière",
        note: "Le chant des oiseaux m'accueille. Une belle journée s'annonce, propice à la marche en forêt.",
        energyVal: 3
      },
      {
        id: 21,
        date: "01 Mai",
        dayName: "Vendredi",
        moodType: "créatif" as const,
        intensity: 4,
        title: "Vision claire",
        note: "Mes rêves m'ont apporté la solution à un problème technique persistant. L'inconscient fait des merveilles.",
        energyVal: 3
      },
      {
        id: 22,
        date: "30 Avr",
        dayName: "Jeudi",
        moodType: "fatigué" as const,
        intensity: 2,
        title: "Lenteur agréable",
        note: "Ralentir pour mieux avancer. Aujourd'hui, je m'accorde le droit de ne pas être ultra-productif.",
        energyVal: 1
      },
      {
        id: 23,
        date: "29 Avr",
        dayName: "Mercredi",
        moodType: "stressé" as const,
        intensity: 4,
        title: "Surmenage mental",
        note: "Trop de tâches simultanées. J'écris tout sur papier pour libérer de la bande passante mentale.",
        energyVal: 2
      },
      {
        id: 24,
        date: "28 Avr",
        dayName: "Mardi",
        moodType: "serein" as const,
        intensity: 4,
        title: "Ancrage profond",
        note: "Je me sens fort et stable comme un arbre centenaire. Les petits tracas n'ont pas d'emprise sur moi.",
        energyVal: 3
      },
      {
        id: 25,
        date: "27 Avr",
        dayName: "Lundi",
        moodType: "créatif" as const,
        intensity: 5,
        title: "Inspiration divine",
        note: "Une sensation d'unité avec l'univers au réveil. Mes rêves étaient colorés de teintes chatoyantes.",
        energyVal: 3
      },
      {
        id: 26,
        date: "26 Avr",
        dayName: "Dimanche",
        moodType: "neutre" as const,
        intensity: 3,
        title: "Transition douce",
        note: "Sommeil lourd et sans rêves notables. Je me réveille reposé, prêt pour une journée tranquille.",
        energyVal: 2
      },
      {
        id: 27,
        date: "25 Avr",
        dayName: "Samedi",
        moodType: "serein" as const,
        intensity: 5,
        title: "Joie pure",
        note: "Un réveil lumineux rempli d'enthousiasme. Hâte de partager de bons moments avec mes proches.",
        energyVal: 3
      },
      {
        id: 28,
        date: "24 Avr",
        dayName: "Vendredi",
        moodType: "fatigué" as const,
        intensity: 2,
        title: "Fatigue accumulée",
        note: "Fin de semaine difficile au niveau corporel. Mes jambes sont lourdes, la sieste sera obligatoire.",
        energyVal: 1
      },
      {
        id: 29,
        date: "23 Avr",
        dayName: "Jeudi",
        moodType: "serein" as const,
        intensity: 4,
        title: "Paix intérieure",
        note: "Calme mental propice à la réflexion stratégique. Une belle clarté d'esprit pour finir les dossiers.",
        energyVal: 2
      }
    ];
  }, [selectedMood, checkinText]);

  // Calculate mood distribution stats dynamically
  const moodStats = useMemo(() => {
    const counts = { serein: 0, créatif: 0, neutre: 0, fatigué: 0, stressé: 0 };
    moodHistoryData.forEach(d => {
      counts[d.moodType] = (counts[d.moodType] || 0) + 1;
    });
    return counts;
  }, [moodHistoryData]);

  const remainingTasks = useMemo(() => {
    return tasks.length - selectedTasks.filter(id => tasks.some(t => t.id === id)).length;
  }, [tasks, selectedTasks]);

  const progress = useMemo(() => {
    const total = tasks.length;
    if (total === 0) return 0;
    const completed = total - remainingTasks;
    return (completed / total) * 100;
  }, [tasks, remainingTasks]);

  const getMoodEmoji = (mood: string | null): React.ReactNode => {
    switch (mood) {
      case 'Calme': return <Smile className="size-[18px] text-[#0d9488] fill-[#0d9488]/15" />;
      case 'Inspiré': return <Sparkles className="size-[18px] text-[#4f46e5] fill-[#4f46e5]/15" />;
      case 'Stressé': return <Frown className="size-[18px] text-[#e11d48] fill-[#e11d48]/15" />;
      case 'Rêveur': return <Cloud className="size-[18px] text-[#0284c7] fill-[#0284c7]/15" />;
      default: return <Smile className="size-[18px] text-[#059669] fill-[#059669]/15" />;
    }
  };

  const energyHue = 220 - (energyLevel / 100) * 200;
  const energyThumbColor = `hsl(${energyHue}, 85%, 65%)`;
  const focusHue = 270 - (mentalFocus / 100) * 90;
  const focusThumbColor = `hsl(${focusHue}, 80%, 65%)`;

  // Interpret energy for the summary label
  const energyLabel = energyLevel <= 25 ? 'Douce & Basse énergie'
    : energyLevel <= 50 ? 'Calme & Équilibrée'
      : energyLevel <= 75 ? 'Active & Concentrée'
        : 'Dynamique & Haute énergie';

  const userName = useMemo(() => {
    if (!userEmail) return 'Nianqi';
    const parts = userEmail.split('@');
    if (!parts[0]) return 'Nianqi';
    // Capitalize first letter
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  }, [userEmail]);

  const sliderBase = "w-full h-2 rounded-full appearance-none bg-white/50 border border-white/40 shadow-inner focus:outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-7 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:transition-colors [&::-webkit-slider-thumb]:duration-300 [&::-moz-range-thumb]:size-7 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white";
  return (
    <div className="bg-[#fcfaf8] min-h-screen flex items-center justify-center p-4 sm:p-8 overflow-auto">
      <style>{GLOBAL_STYLES}</style>

      <div
        className="relative shrink-0"
        style={{
          height: PHONE_HEIGHT * phoneScale,
          width: PHONE_WIDTH * phoneScale,
        }}
      >
        <div
          className="bg-[#f4f2f7] relative rounded-[48px] shadow-2xl overflow-hidden flex flex-col z-0"
          style={{
            height: PHONE_HEIGHT,
            width: PHONE_WIDTH,
            transform: `scale(${phoneScale})`,
            transformOrigin: 'top left',
          }}
        >
        <StatusBar />
        {/* Removed spacer to make top bar transparent */}

        {/* Fixed background mesh gradient behind views (except onboarding and loading) */}
        {view !== 'onboarding' && view !== 'loading' && (
          <img
            src={imgHomeBg}
            alt="Mesh Background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          />
        )}

        {/* ── ONBOARDING VIEW ── */}
        {view === 'onboarding' && (
          <OnboardingFlow
            onComplete={(data: {
              email: string;
              goals: string[];
              otherGoal: string;
              pressureAnswer: string;
              timeAnswer: string;
              milestonePlan: string;
              milestoneDirection: string;
            }) => {
              const translations: Record<string, string> = {
                procrastination: 'Vaincre la procrastination',
                habits: 'Bâtir des rituels durables',
                focus: 'Retrouver une concentration calme',
                wellbeing: 'Préserver mon bien-être',
              };
              let primary = "Avancer avec alignement";
              if (data.goals.includes('other') && data.otherGoal.trim()) {
                primary = data.otherGoal.trim();
              } else {
                const firstPreset = data.goals.find(g => g !== 'other');
                if (firstPreset) primary = translations[firstPreset];
              }

              // 保存到 LocalStorage
              localStorage.setItem('lumo_user_email', data.email);
              localStorage.setItem('lumo_long_term_goal', primary);
              localStorage.setItem('lumo_milestone_plan', data.milestonePlan);
              localStorage.setItem('lumo_milestone_direction', data.milestoneDirection);
              localStorage.setItem('lumo_goals', JSON.stringify(data.goals));
              localStorage.setItem('lumo_other_goal', data.otherGoal);
              localStorage.setItem('lumo_ai_answers', JSON.stringify([data.pressureAnswer, data.timeAnswer]));

              // 更新全局 State
              setUserEmail(data.email);
              setLongTermGoal(primary);
              setMilestonePlan(data.milestonePlan);
              setMilestoneDirection(data.milestoneDirection);
              setGoals(data.goals);
              setOtherGoal(data.otherGoal);
              setAiAnswers([data.pressureAnswer, data.timeAnswer]);

              // 初始化任务
              setDailyTasks([]);
              setSelectedTasks([]);
              setView('home');
            }}
          />
        )}

        {/* ── CHECK-IN VIEW ── */}
        {view === 'checkin' && (
          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[168px] flex flex-col items-center z-10 pt-[62px]">

            {/* Header */}
            <div className="w-full px-8 mt-6 flex flex-col items-end">
              <img alt="Avatar" className="rounded-full w-[57px] h-[57px] object-cover shadow-sm bg-white" src={img3DIllustrationOfPersonFreePsd1} />
              <div className="mt-[24px] flex items-baseline justify-end whitespace-nowrap text-[#404040] tracking-wide w-full">
                <span className="font-thin text-[19px]">Bonjour , &nbsp;</span>
                <span className="font-light text-[32px]">{userName}</span>
              </div>
            </div>

            {/* Figma-style diffuse orb */}
            <div className="relative flex items-center justify-center mt-[18px] mb-[22px] shrink-0 size-[179px]">
              {/* Ripple Ring effects when recording */}
              {isRecording && (
                <>
                  <div className="absolute rounded-full bg-red-400/40 blur-sm size-[190px] animate-ripple1" />
                  <div className="absolute rounded-full bg-orange-400/35 blur-sm size-[170px] animate-ripple2" />
                  <div className="absolute rounded-full bg-pink-400/30 blur-md size-[150px] animate-ripple3" />
                </>
              )}
              <div className="absolute inset-0 rounded-full bg-white blur-[17.9px] overflow-hidden animate-breathe-slow">
                <img
                  alt=""
                  src={imgFlowerOrbBg}
                  className="absolute left-1/2 top-1/2 h-[406px] w-[188px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-90"
                />
              </div>
              <div className="absolute inset-[26px] rounded-full bg-white/25 blur-[18px]" />
              <img
                alt="Microphone"
                onClick={startVoiceRecording}
                className={`relative z-10 w-[25px] h-[25px] object-contain cursor-pointer transition-all duration-300 ${
                  isRecording ? 'animate-bounce scale-125' : 'hover:opacity-80'
                }`}
                src={imgIcon8}
              />
              {isRecording && (
                <div className="absolute -bottom-4 text-[10px] text-red-500 font-semibold tracking-[1px] animate-pulse">
                  ÉCOUTE EN COURS...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="w-full px-8 mt-4">
              <textarea
                value={checkinText}
                onChange={(e) => setCheckinText(e.target.value)}
                placeholder="Start Typing..."
                rows={checkinText.length > 70 ? 3 : 1}
                className="bg-white/40 backdrop-blur-xl w-full resize-none rounded-[20px] border border-white/70 px-6 py-3 text-center text-[16px] font-light tracking-[-0.32px] text-[#1c2b33] shadow-[inset_0px_-5px_4px_rgba(255,255,255,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25),0_4px_16px_rgba(0,0,0,0.03)] outline-none placeholder:text-[#1c2b33]/35 focus:bg-white/55 focus:ring-2 focus:ring-white/80"
              />
            </div>

            {/* Cards */}
            <div className="w-full px-6 mt-10 flex flex-col gap-6">

              {/* Energy */}
              <GlassCard>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-3">
                    <img alt="" className="w-4 h-5" src={imgContainer} />
                    <p className="font-semibold text-[#2f3336] text-[18px]">Niveau d'énergie</p>
                  </div>
                  <p className="font-normal text-[#5c5f63] text-[14px]">À quel point vous sentez-vous vital en ce moment ?</p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <input type="range" min="0" max="100" step="25" value={energyLevel}
                    onChange={(e) => setEnergyLevel(Number(e.target.value))}
                    className={`slider-energy ${sliderBase}`}
                    style={{ '--thumb-color': energyThumbColor, '--thumb-shadow': `hsla(${energyHue}, 85%, 65%, 0.4)` } as React.CSSProperties}
                  />
                  <div className="flex justify-between">
                    <p className="font-medium text-[#5c5f63] text-[11px] tracking-widest uppercase">Calme</p>
                    <p className="font-medium text-[#5c5f63] text-[11px] tracking-widest uppercase">Dynamique</p>
                  </div>
                </div>
              </GlassCard>

              {/* Focus */}
              <GlassCard>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-3">
                    <img alt="" className="size-[18px]" src={imgContainer1} />
                    <p className="font-semibold text-[#2f3336] text-[18px]">Concentration Mentale</p>
                  </div>
                  <p className="font-normal text-[#5c5f63] text-[14px]">Votre esprit est-il clair ou vagabond ?</p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <input type="range" min="0" max="100" step="25" value={mentalFocus}
                    onChange={(e) => setMentalFocus(Number(e.target.value))}
                    className={`slider-focus ${sliderBase}`}
                    style={{ '--thumb-color': focusThumbColor, '--thumb-shadow': `hsla(${focusHue}, 80%, 65%, 0.4)` } as React.CSSProperties}
                  />
                  <div className="flex justify-between">
                    <p className="font-medium text-[#5c5f63] text-[11px] tracking-widest uppercase">Diffus</p>
                    <p className="font-medium text-[#5c5f63] text-[11px] tracking-widest uppercase">Vif</p>
                  </div>
                </div>
              </GlassCard>

              {/* Mood */}
              <GlassCard>
                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-center gap-3">
                    <img alt="" className="size-5" src={imgContainer2} />
                    <p className="font-semibold text-[#2f3336] text-[18px]">Humeur Matinale</p>
                  </div>
                  <p className="font-normal text-[#5c5f63] text-[14px]">Saisissez la qualité émotionnelle de votre réveil.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full mb-6">
                  {[
                    { label: 'Calme', src: imgIcon4, w: 'w-[23px] h-[20px]' },
                    { label: 'Inspiré', src: imgIcon5, w: 'w-[19px] h-[25px]' },
                    { label: 'Stressé', src: imgIcon6, w: 'w-[25px] h-[21px]' },
                    { label: 'Rêveur', src: imgIcon7, w: 'w-[25px] h-[25px]' },
                  ].map(({ label, src, w }) => {
                    const isSelected = selectedMood === label;
                    return (
                      <div
                        key={label}
                        onClick={() => setSelectedMood(isSelected ? null : label)}
                        className={`flex flex-col gap-3 items-center justify-center py-6 rounded-[24px] shadow-sm border cursor-pointer transition-all active:scale-[0.95] ${isSelected
                          ? 'bg-[#a9adf9]/20 border-[#a9adf9] shadow-[0_0_16px_rgba(169,173,249,0.3)]'
                          : 'bg-white/50 backdrop-blur-md border-white/80 hover:bg-white/70'
                          }`}
                      >
                        <img alt="" className={`${w} object-contain shrink-0 transition-transform ${isSelected ? 'scale-110' : ''}`} src={src} />
                        <p className={`font-medium text-[12px] tracking-widest uppercase transition-colors ${isSelected ? 'text-[#4852ff]' : 'text-[#2f3336]'}`}>{label}</p>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={() => (selectedMood || checkinText.trim()) && setView('loading')}
                  disabled={!selectedMood && !checkinText.trim()}
                  className={`rounded-full w-full py-4 transition-all active:scale-[0.98] ${
                    selectedMood || checkinText.trim()
                      ? 'backdrop-blur-[4.5px] border-2 border-solid border-white bg-gradient-to-r from-white/60 via-[#a9adf9]/45 to-white/60 shadow-md hover:scale-[0.98] cursor-pointer'
                      : 'bg-[#f0f0f2] border-2 border-white/60 cursor-not-allowed opacity-50'
                  }`}
                >
                  <p className={`font-semibold text-[18px] ${selectedMood || checkinText.trim() ? 'text-[#1c2b33]' : 'text-[#aab0bb]'}`}>Suivant</p>
                </button>
              </GlassCard>

            </div>
          </div>
        )}

        {/* ── LOADING VIEW ── */}
        {view === 'loading' && (
          <LoadingScreen
            onDone={() => {
              const newTasks = generateAppTasks(energyLevel, mentalFocus, selectedMood, goals, otherGoal, checkinText);
              setDailyTasks(newTasks);
              localStorage.setItem('lumo_daily_tasks', JSON.stringify(newTasks));
              setSelectedTasks([]);
              localStorage.setItem('lumo_selected_tasks', JSON.stringify([]));
              setView('summary');
            }}
          />
        )}

        {/* ── SUMMARY VIEW ── */}
        {view === 'summary' && (
          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[168px] flex flex-col items-center z-10 animate-fadeSlide pt-[62px]">

            {/* Back Button */}
            <div className="w-full px-6 mt-3 flex items-center">
              <button
                onClick={() => setView('checkin')}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer"
              >
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <path d="M9 1L1 9L9 17" stroke="#1c2b33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Vitality Orb - perfect circle */}
            <div className="relative mt-10 mb-6 shrink-0" style={{ width: 192, height: 192 }}>
              <div className="absolute rounded-full animate-breathe" style={{ inset: 0, background: '#9ae5ee', filter: 'blur(16px)', opacity: 0.75 }} />
              <div className="absolute rounded-full animate-breathe" style={{ inset: 20, background: '#a9adf9', filter: 'blur(10px)', opacity: 0.9 }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 z-10">
                <p className="font-normal text-[36px] text-white leading-none">{energyLevel}%</p>
                <p className="font-normal text-[10px] text-white/90 tracking-[1px] uppercase">Vitalité</p>
              </div>
            </div>

            {/* Energy label */}
            <h2 className="font-normal text-[#2f3336] text-[28px] text-center tracking-[-0.7px] px-6 mt-4 leading-tight">
              {energyLabel}
            </h2>

            {/* Description */}
            <p className="font-normal text-[#5c5f63] text-[16px] tracking-[0.3px] text-center px-8 mt-4 leading-relaxed">
              {checkinText.trim()
                ? `Votre plan transforme votre note du matin en actions reliées à ${getGoalFocus(goals, otherGoal)}. Il ne répète pas le rêve: il en extrait une direction utile.`
                : 'Votre bilan suggère un rythme restaurateur. Le système a automatiquement déplacé vos tâches intensives à demain et priorisé les activités nourrissantes.'}
            </p>

            {/* To Do List */}
            <div className="w-full px-6 mt-8 flex flex-col gap-6">
              <div className="flex items-center justify-between px-2">
                <p className="font-normal text-[#2f3336] text-[22px] tracking-[-0.5px]">Liste de tâches</p>
                <div className="bg-[#b3ecf3] px-4 py-1 rounded-full">
                  <p className="font-normal text-[#1e5a60] text-[13px]">{tasks.length} suggérée{tasks.length !== 1 ? 's' : ''}</p>
                </div>
              </div>

              {tasks.map((task) => {
                const tagStyles = task.tag ? getTagStyles(task.tag) : null;
                const isEditing = editingTaskId === task.id;

                if (isEditing) {
                  return (
                    <div
                      key={task.id}
                      className="backdrop-blur-2xl border rounded-[28px] p-6 shadow-[0_4px_20px_rgba(31,38,135,0.05)] relative overflow-hidden bg-white/70 border-white/80 animate-fadeSlide"
                    >
                      <div className="flex flex-col gap-3 relative z-10">
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold text-[#5c5f63] tracking-[1px] uppercase">Titre de la tâche</label>
                          <input
                            type="text"
                            value={editingTaskTitle}
                            onChange={(e) => setEditingTaskTitle(e.target.value)}
                            className="w-full bg-white/80 border border-gray-200 rounded-xl px-3 py-2 text-[14px] text-[#2f3336] focus:outline-none focus:ring-1 focus:ring-[#a9adf9]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-bold text-[#5c5f63] tracking-[1px] uppercase">Description</label>
                          <textarea
                            rows={2}
                            value={editingTaskDesc}
                            onChange={(e) => setEditingTaskDesc(e.target.value)}
                            className="w-full bg-white/80 border border-gray-200 rounded-xl px-3 py-2 text-[13px] text-[#5c5f63] resize-none focus:outline-none focus:ring-1 focus:ring-[#a9adf9]"
                          />
                        </div>
                        <div className="flex gap-2 justify-end mt-1">
                          <button
                            onClick={() => setEditingTaskId(null)}
                            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-150 text-[#5c5f63] text-[11px] rounded-lg font-medium transition-all cursor-pointer"
                          >
                            Annuler
                          </button>
                          <button
                            onClick={() => saveTaskEdit(task.id)}
                            className="px-3 py-1.5 bg-[#a9adf9]/20 hover:bg-[#a9adf9]/30 text-[#4a569d] text-[11px] rounded-lg font-semibold transition-all cursor-pointer border border-[#a9adf9]/30"
                          >
                            Enregistrer ✓
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={task.id}
                    className="backdrop-blur-2xl border rounded-[28px] p-6 shadow-[0_4px_20px_rgba(31,38,135,0.05)] relative overflow-hidden bg-white/40 border-white/60 hover:bg-white/50 transition-all"
                  >
                    <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
                    <div className="flex items-start justify-between gap-4 relative z-10">
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        {task.tag && tagStyles && (
                          <div className={`${tagStyles.bg} self-start px-3 py-1 rounded-full`}>
                            <p className={`font-normal ${tagStyles.text} text-[10px] tracking-[1px] uppercase`}>{task.tag}</p>
                          </div>
                        )}
                        <p className="font-normal text-[#2f3336] text-[18px] leading-snug break-words">{task.title}</p>
                        <p className="font-normal text-[#5c5f63] text-[13px] leading-relaxed break-words">{task.desc}</p>
                      </div>

                      <div className="flex flex-col gap-3 items-end shrink-0">
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditingTask(task)}
                            className="bg-white/60 border border-white/80 backdrop-blur-sm flex items-center justify-center size-9 rounded-full cursor-pointer hover:bg-white/95 hover:border-[#a9adf9]/50 transition-all shadow-sm active:scale-90"
                            title="Modifier la tâche"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#54599e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => ignoreTask(task.id)}
                            className="bg-white/60 border border-white/80 backdrop-blur-sm flex items-center justify-center size-9 rounded-full cursor-pointer hover:bg-red-50 hover:border-red-200 transition-all shadow-sm active:scale-90"
                            title="Ignorer la tâche"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                          </button>
                        </div>
                        <p className="font-normal text-[#777b7f] text-[12px]">{task.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* CTA: Adopt plan */}
              <div className="flex justify-center">
                <button
                  onClick={() => setShowDailyCard(true)}
                  className="backdrop-blur-[4.5px] border-2 border-solid border-white bg-gradient-to-r from-white/60 via-[#a9adf9]/45 to-white/60 flex items-center justify-center py-3 px-8 rounded-full transition-all hover:scale-[0.98] active:scale-[0.95] cursor-pointer shadow-md"
                >
                  <p className="font-['Lexend_Deca',sans-serif] font-semibold text-[15px] text-[#1c2b33] tracking-wide text-center">
                    Commencer ma journée ✦
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── HOME VIEW ── */}
        {view === 'home' && (
          <div
            className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[168px] flex flex-col items-center z-10 animate-fadeSlide relative no-scrollbar pt-[62px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 75%, rgba(244,242,247,0.45) 100%), url(${imgHomeBg})`,
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >

            {/* Header Top Bar */}
            <div className="w-full px-[24px] mt-[16px] flex items-center justify-between z-10 relative">
              <div className="flex items-center gap-3">
                <img
                  alt="Avatar"
                  onClick={() => setView('profile')}
                  className="w-[48px] h-[48px] rounded-full object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] ring-2 ring-white/60 bg-white cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  src={img3DIllustrationOfPersonFreePsd1}
                />
                <div className="flex flex-col">
                  <span className="font-light text-[13px] text-[#515151]/75 leading-tight">Bonjour,</span>
                  <span className="font-semibold text-[20px] text-[#2f3336] leading-tight">{userName}</span>
                </div>
              </div>
              
              {/* Settings Button */}
              <button
                onClick={() => setView('profile')}
                className="size-[40px] rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-sm hover:bg-white/50 active:scale-95 transition-all"
              >
                <img
                  src={imgSettingsIcon}
                  alt="Settings"
                  className="w-[20px] h-[20px] object-contain opacity-80"
                />
              </button>
            </div>

            {/* Dynamic Progress Ring & Vitality Orb */}
            <div className="relative mt-[28px] mb-[12px] flex items-center justify-center z-10 shrink-0">
              <div className="relative w-[271px] h-[271px] flex items-center justify-center">
                {/* White Track SVG background */}
                <img
                  src={imgProgressTrack}
                  alt="Progress Track"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
                
                {/* Dynamic Active Progress Ring */}
                <svg
                  width="271"
                  height="271"
                  viewBox="0 0 271 271"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 -rotate-90 transform origin-center z-10 pointer-events-none"
                >
                  <circle
                    cx="135.5"
                    cy="135.5"
                    r={115.75}
                    stroke="#A9ADF9"
                    strokeWidth={18}
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 115.75}
                    strokeDashoffset={2 * Math.PI * 115.75 - (progress / 100) * (2 * Math.PI * 115.75)}
                    style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  />
                </svg>

                {/* Vitality Orb Core */}
                <div className="relative w-[195px] h-[195px] rounded-full flex flex-col items-center justify-center z-20 overflow-hidden active:scale-95 transition-all">
                  {/* Iridescent blurs */}
                  <div className="absolute inset-0 bg-[#9ae5ee] blur-[12px] opacity-75 rounded-full animate-breathe" />
                  <div className="absolute inset-[12px] bg-[#a9adf9] blur-[8px] opacity-90 rounded-full animate-breathe-slow" />
                  
                  {/* Central Content */}
                  <div className="relative z-30 flex flex-col items-center justify-center">
                    <p className="font-semibold text-[38px] text-white leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">{energyLevel}%</p>
                    <p className="font-medium text-[10px] text-white/95 tracking-[1.5px] uppercase mt-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">Vitality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy label text */}
            <h2 className="font-normal text-[#2f3336] text-[24px] text-center tracking-[-0.5px] px-6 mt-2 leading-tight z-10 relative">
              {energyLabel}
            </h2>

            {/* Content cards container */}
            <div className="w-[357px] flex flex-col gap-4 mt-[32px] z-10 relative">
              
              {/* Daily Goal Card */}
              <div className="backdrop-blur-[12.5px] bg-white/30 border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.04)] rounded-[20px] p-4 flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <p className="font-semibold text-[#2f3336] text-[15px] tracking-wide">Objectif quotidien</p>
                    <p className="text-[#515151]/80 text-[11px] font-light">Complétez vos tâches quotidiennes</p>
                  </div>
                  {/* Toggle Switch */}
                  <div
                    onClick={() => setDailyGoalActive(!dailyGoalActive)}
                    className={`w-[48px] h-[26px] rounded-full p-[2px] cursor-pointer transition-all duration-300 relative flex items-center ${
                      dailyGoalActive ? 'bg-[#A9ADF9]' : 'bg-[#e5e7eb]/20 border border-white/20'
                    }`}
                  >
                    <div
                      className={`size-[20px] bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
                        dailyGoalActive ? 'translate-x-[22px]' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </div>
                
                {/* Weekly calendar row */}
                <div className={`flex justify-between items-center w-full mt-1 transition-all duration-300 ${dailyGoalActive ? 'opacity-100' : 'opacity-45 pointer-events-none'}`}>
                  {[
                    { day: 'L', date: 'Mon', checked: true, img: imgDailyCheckedMon, past: true },
                    { day: 'M', date: 'Tue', checked: true, img: imgDailyCheckedTue, past: true },
                    { day: 'M', date: 'Wed', checked: true, img: imgDailyCheckedWed, past: true },
                    { day: 'J', date: 'Thu', checked: true, img: imgDailyCheckedThr, past: true },
                    { day: 'V', date: 'Fri', current: true, completed: dailyHistory['ven']?.completed },
                    { day: 'S', date: 'Sat', checked: false, img: imgDailyCheckedSat, future: true },
                    { day: 'D', date: 'Sun', checked: false, img: imgDailyCheckedSun, future: true }
                  ].map((item, idx) => {
                    return (
                      <div key={idx} className="flex flex-col items-center gap-2">
                        <span className="text-[#2f3336] text-[11.5px] font-semibold uppercase">{item.day}</span>
                        
                        {item.past ? (
                          <div className="size-[32px] rounded-full bg-[#969beb]/55 flex items-center justify-center border border-[#858ae3]/50 shadow-md transition-transform hover:scale-110 ring-2 ring-[#858ae3]/50">
                            <img src={item.img} className="w-[12px] h-[12px] object-contain brightness-[1.2]" alt="checked" />
                          </div>
                        ) : item.current ? (
                          item.completed ? (
                            <div className="size-[32px] rounded-full bg-gradient-to-tr from-[#c8e635] via-[#a2adfc] to-[#a9adf9] flex items-center justify-center border-2 border-white shadow-[0_0_15px_#c8e635] transition-transform hover:scale-110 ring-2 ring-[#858ae3]/75">
                              <span className="text-white text-[13px] font-extrabold">★</span>
                            </div>
                          ) : (
                            <div className="size-[32px] rounded-full border-2 border-[#54599e] bg-[#54599e]/15 flex items-center justify-center shadow-md animate-pulse ring-2 ring-[#54599e]/40">
                              <span className="text-[#4a569d] text-[13px] font-extrabold">V</span>
                            </div>
                          )
                        ) : (
                          <div className="size-[32px] rounded-full bg-[#54599e]/15 flex items-center justify-center border border-white/10 shadow-sm opacity-40 ring-1 ring-[#A9ADF9]/10">
                            <img src={item.img} className="w-[12px] h-[12px] object-contain opacity-25 brightness-[1.0]" alt="checked" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Emotional Check-ins Card */}
              <div className="backdrop-blur-[12.5px] bg-white/30 border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.04)] rounded-[20px] p-4 flex flex-col gap-5 w-full">
                <div className="flex flex-col">
                  <p className="font-semibold text-[#2f3336] text-[15px] tracking-wide">Sommeil & Humeur</p>
                  <p className="text-[#515151]/80 text-[11px] font-light">Statistiques et timeline hebdomadaire</p>
                </div>

                {/* 3-Column Sleep Statistics Grid */}
                <div className="grid grid-cols-3 gap-2 w-full">
                  {/* Target */}
                  <div className="flex items-center gap-2 pl-2 border-l-[3.5px] border-[#d9f171] h-[34px]">
                    <div className="flex flex-col justify-center">
                      <span className="text-[13px] font-bold text-[#2f3336] leading-none">{sleepTarget.toFixed(1)}h</span>
                      <span className="text-[9px] text-[#515151]/80 uppercase tracking-[0.5px] mt-1 font-light">Cible</span>
                    </div>
                  </div>
                  {/* Achieved */}
                  <div className="flex items-center gap-2 pl-2 border-l-[3.5px] border-[#818cf8] h-[34px]">
                    <div className="flex flex-col justify-center">
                      <span className="text-[13px] font-bold text-[#2f3336] leading-none">6.5h</span>
                      <span className="text-[9px] text-[#515151]/80 uppercase tracking-[0.5px] mt-1 font-light">Atteint</span>
                    </div>
                  </div>
                  {/* Deficit */}
                  <div className="flex items-center gap-2 pl-2 border-l-[3.5px] border-[#f472b6] h-[34px]">
                    <div className="flex flex-col justify-center">
                      <span className="text-[13px] font-bold text-[#2f3336] leading-none">{(Math.max(0, sleepTarget - 6.5)).toFixed(1)}h</span>
                      <span className="text-[9px] text-[#515151]/80 uppercase tracking-[0.5px] mt-1 font-light">Manquant</span>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/20" />

                {/* Weekly Mood Timeline */}
                <div className="flex justify-between items-center w-full px-1">
                  {[
                    { label: 'L', emoji: <Angry className="size-[18px] text-[#f43f5e] fill-[#f43f5e]/15" />, active: false },
                    { label: 'M', emoji: <Meh className="size-[18px] text-[#d97706] fill-[#d97706]/15" />, active: false },
                    { label: 'M', emoji: <Frown className="size-[18px] text-[#ea580c] fill-[#ea580c]/15" />, active: false },
                    { label: 'J', emoji: <Smile className="size-[18px] text-[#ca8a04] fill-[#ca8a04]/15" />, active: false },
                    { label: 'V', emoji: getMoodEmoji(selectedMood), active: true },
                    { label: 'S', emoji: <Smile className="size-[18px] text-[#9ca3af] fill-[#9ca3af]/10" />, active: false, future: true },
                    { label: 'D', emoji: <Smile className="size-[18px] text-[#9ca3af] fill-[#9ca3af]/10" />, active: false, future: true }
                  ].map((item, idx) => {
                    return (
                      <div key={idx} className="flex flex-col items-center gap-2 transition-transform hover:scale-110 cursor-pointer">
                        <div
                          className={`size-[32px] rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 ${
                            item.active 
                              ? 'bg-[#A9ADF9]/20 border-[#A9ADF9] ring-2 ring-[#A9ADF9]/45 scale-105 shadow-[#A9ADF9]/10' 
                              : item.future
                                ? 'bg-white/40 border-white/60 opacity-60'
                                : 'bg-white/60 border-white/80 hover:bg-white/80'
                          }`}
                        >
                          <span className={item.active ? 'animate-bounce' : ''}>
                            {item.emoji}
                          </span>
                        </div>
                        <span className={`text-[10px] uppercase font-semibold ${item.active ? 'text-[#2f3336] font-bold' : item.future ? 'text-[#515151]/40' : 'text-[#515151]/75'}`}>
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Checklist Card */}
              <div className="backdrop-blur-[12.5px] bg-white/30 border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.04)] rounded-[20px] p-5 flex flex-col gap-4 w-full mb-6">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <p className="font-semibold text-[#2f3336] text-[15px] tracking-wide">Tâches d'aujourd'hui</p>
                    <p className="text-[#515151]/80 text-[11px] font-light">
                      {remainingTasks === 0 ? (
                        <span className="flex items-center gap-1 text-[#2f3336]/90">
                          Félicitations ! Tout est accompli
                        </span>
                      ) : (
                        `${remainingTasks} tâche${remainingTasks > 1 ? 's' : ''} restante${remainingTasks > 1 ? 's' : ''}`
                      )}
                    </p>
                  </div>
                  <div className="bg-[#1e5a60]/10 px-3 py-1 rounded-full border border-[#1e5a60]/10">
                    <p className="font-semibold text-[#1e5a60] text-[11px]">{Math.round(progress)}%</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {dailyTasks.length === 0 ? (
                    <div className="text-center py-6 text-[#515151]/60 text-[13px] font-light">
                      Aucune tâche pour aujourd'hui.<br />Faites votre Daily Check-in pour en générer !
                    </div>
                  ) : (
                    dailyTasks.map(task => {
                      const isCompleted = selectedTasks.includes(task.id);
                      const tagStyles = task.tag ? getTagStyles(task.tag) : null;
                      return (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                            isCompleted
                              ? 'bg-white/10 border-white/15 opacity-60 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]'
                              : 'bg-white/25 border-white/35 hover:bg-white/30 shadow-sm'
                          }`}
                        >
                          {/* Custom Checkbox */}
                          <div className={`size-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isCompleted ? 'bg-[#a9adf9] border-[#a9adf9] scale-105 shadow-[0_0_8px_rgba(169,173,249,0.5)]' : 'border-[#515151]/30 bg-white/40'
                          }`}>
                            {isCompleted && (
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>

                          {/* Task Info */}
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            {task.tag && tagStyles && (
                              <span className={`text-[9px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full self-start ${tagStyles.bg} ${tagStyles.text}`}>
                                {task.tag}
                              </span>
                            )}
                            <p className={`text-[15px] font-medium text-[#2f3336] leading-snug truncate ${isCompleted ? 'line-through opacity-40 text-[#515151]' : ''}`}>
                              {task.title}
                            </p>
                            <p className={`text-[12px] text-[#515151] leading-relaxed font-light mt-0.5 ${isCompleted ? 'opacity-40' : ''}`}>
                              {task.desc}
                            </p>
                          </div>
                          
                          {/* Duration Tag */}
                          <span className={`text-[11px] font-medium shrink-0 self-center ${isCompleted ? 'text-[#515151]/30' : 'text-[#515151]/60'}`}>
                            {task.time}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── OBJECTIVES VIEW ── */}
        {view === 'objectives' && (
          <div className="flex-1 w-full min-h-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[168px] flex flex-col items-center z-10 animate-fadeSlide pt-[62px] px-6">
            <div className="w-full mt-6 mb-6 flex flex-col items-start">
              <p className="font-semibold text-[#2f3336] text-[24px] tracking-tight">Mon Intention Plan</p>
              <p className="text-[#515151]/75 text-[13px] font-light mt-1">Gérez vos buts à long terme et l'alignement IA</p>
            </div>
            <GlassCard className="w-full mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="size-5 text-[#4a569d]" />
                <p className="font-semibold text-[#2f3336] text-[18px]">Objectif Actuel</p>
              </div>
              <div className="p-4 bg-white/30 border border-white/40 rounded-2xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] mb-4 w-full">
                <div className="font-medium text-[#4a569d] text-[16px] leading-relaxed">
                  {renderGoalWithIcon(longTermGoal || "Avancer avec alignement")}
                </div>
              </div>
              <p className="font-normal text-[#5c5f63] text-[13px] leading-relaxed">
                Cet objectif sert de phare pour la sélection quotidienne de vos micro-tâches adaptatives.
              </p>
            </GlassCard>
            <GlassCard className="w-full mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Map className="size-5 text-[#4a569d]" />
                <p className="font-semibold text-[#2f3336] text-[18px]">Jalon Recommandé</p>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="p-4 bg-[#a9adf9]/22 border border-[#a9adf9]/35 rounded-2xl">
                  <p className="font-bold text-[#4a569d] text-[11px] tracking-[1.5px] uppercase mb-1">Phase Actuelle</p>
                  <p className="font-semibold text-[#2f3336] text-[15px] leading-snug">
                    {milestonePlan || "Étape 1 : Diagnostic & Clarté globale"}
                  </p>
                </div>
                <div className="p-4 bg-white/30 border border-white/40 rounded-2xl">
                  <p className="font-bold text-[#5c5f63] text-[11px] tracking-[1.5px] uppercase mb-1">Direction Recommandée</p>
                  <p className="font-normal text-[#2f3336] text-[13px] leading-relaxed">
                    {milestoneDirection || "Prendre du recul, observer vos déclencheurs sans jugement."}
                  </p>
                </div>
              </div>
            </GlassCard>
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col px-1 mb-2">
                <p className="font-semibold text-[#2f3336] text-[15px]">Ajuster l'orientation</p>
                <p className="text-[#515151]/70 text-[12px] font-light mt-0.5">Besoin de modifier vos priorités ? Relancez le diagnostic IA.</p>
              </div>
              <ObjectivesEditor
                longTermGoal={longTermGoal}
                goals={goals}
                otherGoal={otherGoal}
                onSavePlan={(goal, plan, direction, newGoals, newOtherGoal, answers) => {
                  setLongTermGoal(goal);
                  setMilestonePlan(plan);
                  setMilestoneDirection(direction);
                  setGoals(newGoals);
                  setOtherGoal(newOtherGoal);
                  setAiAnswers(answers);
                  localStorage.setItem('lumo_long_term_goal', goal);
                  localStorage.setItem('lumo_milestone_plan', plan);
                  localStorage.setItem('lumo_milestone_direction', direction);
                  localStorage.setItem('lumo_goals', JSON.stringify(newGoals));
                  localStorage.setItem('lumo_other_goal', newOtherGoal);
                  localStorage.setItem('lumo_ai_answers', JSON.stringify(answers));
                }}
              />
            </div>
          </div>
        )}

        {/* ── PROFILE VIEW ── */}
        {view === 'profile' && (
          <div className="flex-1 w-full min-h-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[168px] flex flex-col items-center z-10 animate-fadeSlide pt-[62px] px-6">
            {/* Profile Header */}
            <div className="w-full mt-6 mb-6 flex flex-col items-center text-center">
              <div className="relative shrink-0 size-[104px] mb-3">
                {/* 3D Glass Pulsing Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#a9adf9]/50 to-[#c7d2fe]/50 blur-md opacity-70 animate-pulse" />
                <div className="absolute -inset-1 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm" />
                <img
                  alt="Avatar"
                  className="relative z-10 rounded-full w-[104px] h-[104px] object-cover border-4 border-white shadow-md bg-white"
                  src="/assets/profile_cartoon_avatar.png"
                />
              </div>
              <h2 className="font-semibold text-[#2f3336] text-[24px] tracking-tight">{userName}</h2>
              <p className="text-[#515151]/75 text-[12px] font-light mt-1 max-w-[280px] text-center italic">
                "Écoutez votre intérieur, grandissez en douceur"
              </p>
            </div>

            {/* 3-Column Glassmorphic Stats Row */}
            <div className="w-full bg-white/30 border border-white/50 backdrop-blur-md rounded-[24px] py-4 px-6 shadow-sm flex items-center justify-around text-center mb-6">
              <div className="flex flex-col">
                <span className="font-bold text-[#2f3336] text-[20px]">127</span>
                <span className="text-[#515151]/75 text-[11px] font-medium tracking-wide">Rêves</span>
              </div>
              <div className="w-[1px] h-8 bg-[#515151]/15" />
              <div className="flex flex-col">
                <span className="font-bold text-[#2f3336] text-[20px]">83</span>
                <span className="text-[#515151]/75 text-[11px] font-medium tracking-wide">Jours</span>
              </div>
              <div className="w-[1px] h-8 bg-[#515151]/15" />
              <div className="flex flex-col">
                <span className="font-bold text-[#2f3336] text-[20px]">24</span>
                <span className="text-[#515151]/75 text-[11px] font-medium tracking-wide">Analyses</span>
              </div>
            </div>

            {/* 4-Item List Menu Section */}
            <div className="w-full flex flex-col gap-3 mb-6">
              {[
                {
                  id: 'dreams',
                  icon: <BookOpen className="size-5 text-indigo-500" />,
                  iconBg: 'bg-[#e0e7ff]/60 border-[#c7d2fe]/40',
                  title: 'Journal de Rêves',
                  desc: 'Vos rêves et souvenirs subconscients',
                  badge: 127,
                  action: () => setView('dream_timeline')
                },
                {
                  id: 'emotions',
                  icon: <Smile className="size-5 text-emerald-500" />,
                  iconBg: 'bg-[#ecfdf5]/60 border-[#a7f3d0]/40',
                  title: "Suivi d'Émotion",
                  desc: 'Explorez vos schémas émotionnels',
                  badge: 83,
                  action: () => setView('mood_analytics')
                },
                {
                  id: 'insights',
                  icon: <BarChart3 className="size-5 text-amber-500" />,
                  iconBg: 'bg-[#fef3c7]/60 border-[#fde68a]/40',
                  title: 'Analyses & Intentions',
                  desc: 'Découvrez vos thèmes et intentions',
                  badge: 24,
                  action: () => setView('objectives')
                },


              ].map((item) => (
                <div
                  key={item.id}
                  onClick={item.action}
                  className="w-full p-4 bg-white/35 hover:bg-white/45 active:scale-[0.98] border border-white/50 backdrop-blur-md rounded-[20px] shadow-sm flex items-center justify-between transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`size-11 rounded-full flex items-center justify-center border shrink-0 ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="font-semibold text-[#2f3336] text-[14px] leading-tight group-hover:text-[#4a569d] transition-colors">{item.title}</p>
                      <p className="text-[#515151]/70 text-[11px] font-light mt-0.5 truncate">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-2">
                    <span className="text-[11px] font-bold text-[#4a569d]/80 bg-white/50 px-2 py-0.5 rounded-full border border-white/60">
                      {item.badge}
                    </span>
                    <span className="text-[#a9adf9] text-[12px] group-hover:translate-x-0.5 transition-transform">➔</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Energy Card */}
            <GlassCard className="w-full mb-6">
              <div className="flex flex-col gap-2 mb-4">
                <div className="grid h-10 grid-cols-[40px_1fr] items-center gap-3">
                  <div className="size-10 rounded-full flex items-center justify-center border border-amber-200/50 bg-amber-50/40 shrink-0">
                    <svg className="block size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M13 2L4.5 13.25H11L10 22L19.5 9.75H13L13 2Z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-semibold text-[#2f3336] text-[16px] leading-[40px]">Suivi d'Énergie</p>
                </div>
                <p className="text-[#515151]/75 text-[12px] font-light ml-[52px] leading-[16px]">Fluctuations d'énergie (feedback en direct)</p>
              </div>
              <div className="w-full flex items-center justify-center py-2 relative h-[140px] bg-white/20 rounded-2xl border border-white/30 overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.01)]">
                <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a9adf9" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#a9adf9" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#a9adf9" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="30" x2="300" y2="30" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4" />
                  <line x1="0" y1="90" x2="300" y2="90" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4" />
                  {(() => {
                    const weeklyVals = [
                      dailyHistory['mon']?.energy ?? 70,
                      dailyHistory['tue']?.energy ?? 45,
                      dailyHistory['wed']?.energy ?? 60,
                      dailyHistory['thu']?.energy ?? 80,
                      energyLevel,
                      dailyHistory['sat']?.energy ?? 50,
                      dailyHistory['sun']?.energy ?? 55
                    ];
                    const pts = weeklyVals.map((v, i) => ({
                      x: i * 50,
                      y: 110 - (v / 100) * 85
                    }));
                    let p = `M 0 ${pts[0].y}`;
                    for (let i = 0; i < pts.length - 1; i++) {
                      const cp1x = pts[i].x + 25;
                      const cp1y = pts[i].y;
                      const cp2x = pts[i+1].x - 25;
                      const cp2y = pts[i+1].y;
                      p += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pts[i+1].x} ${pts[i+1].y}`;
                    }
                    const filledPath = `${p} L 300 120 L 0 120 Z`;
                    return (
                      <>
                        <path d={filledPath} fill="url(#chartGrad)" />
                        <path d={p} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />
                        {pts.map((pt, idx) => {
                          const isToday = idx === 4;
                          return (
                            <g key={idx}>
                              <circle cx={pt.x} cy={pt.y} r={isToday ? 6 : 4} fill={isToday ? '#ffffff' : '#818cf8'} stroke={isToday ? '#a9adf9' : 'white'} strokeWidth={2} className={isToday ? 'animate-ping' : ''} style={isToday ? { transformOrigin: `${pt.x}px ${pt.y}px`, animationDuration: '2s' } : undefined} />
                              <circle cx={pt.x} cy={pt.y} r={isToday ? 5 : 3.5} fill={isToday ? '#a9adf9' : '#818cf8'} stroke="white" strokeWidth={1.5} />
                            </g>
                          );
                        })}
                      </>
                    );
                  })()}
                </svg>
                <div className="absolute bottom-1 inset-x-0 flex justify-between px-3 text-[9px] text-[#2f3336]/60 font-semibold tracking-wider">
                  <span>L</span><span>M</span><span>M</span><span>J</span><span className="text-[#a9adf9] font-bold">V</span><span>S</span><span>D</span>
                </div>
              </div>
            </GlassCard>

            {/* Sleep Target Card */}
            <GlassCard className="w-full mb-6">
              <div className="flex flex-col gap-2 mb-4">
                <div className="grid h-10 grid-cols-[40px_1fr] items-center gap-3">
                  <div className="size-10 rounded-full flex items-center justify-center border border-indigo-200/50 bg-indigo-50/40 shrink-0">
                    <svg className="block size-5" viewBox="0 0 24 24" fill="none" stroke="#54599e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/>
                      <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/>
                      <path d="M12 4v6"/>
                      <path d="M2 18h20"/>
                    </svg>
                  </div>
                  <p className="font-semibold text-[#2f3336] text-[16px] leading-[40px]">Objectif de Sommeil</p>
                </div>
                <p className="text-[#515151]/75 text-[12px] font-light ml-[52px] leading-[16px]">Ajustez votre temps de sommeil idéal pour calculer le déficit quotidien</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between items-baseline pl-[52px]">
                  <p className="font-medium text-[#5c5f63] text-[11px] tracking-wider uppercase">Cible de Sommeil</p>
                  <p className="font-bold text-[#4a569d] text-[18px]">{sleepTarget.toFixed(1)} heures</p>
                </div>
                <div className="pl-[52px] w-full">
                  <input
                    type="range"
                    min="5.0"
                    max="10.0"
                    step="0.5"
                    value={sleepTarget}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setSleepTarget(val);
                      localStorage.setItem('lumo_sleep_target', val.toString());
                    }}
                    className={`slider-focus ${sliderBase}`}
                    style={{ '--thumb-color': '#a9adf9', '--thumb-shadow': 'rgba(169, 173, 249, 0.4)' } as React.CSSProperties}
                  />
                  <div className="flex justify-between text-[9px] text-[#515151]/75 font-semibold mt-2">
                    <span>5.0 H</span><span>7.5 H</span><span>10.0 H</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-3">
              <button
                onClick={() => { localStorage.clear(); window.location.reload(); }}
                className="w-full py-3.5 bg-red-500/10 hover:bg-red-500/15 backdrop-blur-md rounded-xl text-red-600 font-medium text-[13px] tracking-wide border border-red-500/25 active:scale-[0.97] transition-all flex items-center justify-center gap-2 cursor-pointer animate-fadeSlide"
              >
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="size-4 text-red-600" />
                  Réinitialiser l'Application
                </span>
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('lumo_user_email');
                  localStorage.removeItem('lumo_long_term_goal');
                  localStorage.removeItem('lumo_milestone_plan');
                  localStorage.removeItem('lumo_milestone_direction');
                  localStorage.removeItem('lumo_goals');
                  localStorage.removeItem('lumo_other_goal');
                  localStorage.removeItem('lumo_ai_answers');
                  localStorage.removeItem('lumo_daily_tasks');
                  localStorage.removeItem('lumo_selected_tasks');
                  localStorage.removeItem('lumo_daily_history');
                  localStorage.removeItem('lumo_sleep_target');
                  setUserEmail('');
                  setLongTermGoal('');
                  setMilestonePlan('');
                  setMilestoneDirection('');
                  setGoals(['procrastination', 'focus']);
                  setOtherGoal('');
                  setAiAnswers([]);
                  setDailyTasks([]);
                  setSelectedTasks([]);
                  setDailyHistory({});
                  setSleepTarget(8.0);
                  setView('onboarding');
                }}
                className="w-full py-3.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-[#5c5f63] font-medium text-[13px] tracking-wide border border-black/10 active:scale-[0.97] transition-all flex items-center justify-center gap-2 cursor-pointer animate-fadeSlide"
              >
                <span className="flex items-center gap-1.5">
                  <LogOut className="size-4 text-[#5c5f63]" />
                  Se Déconnecter
                </span>
              </button>
            </div>
          </div>
        )}

        {/* ── DREAM TIMELINE VIEW (New) ── */}
        {view === 'dream_timeline' && (
          <div className="flex-1 w-full min-h-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[168px] flex flex-col items-center z-10 animate-fadeSlide pt-[62px] px-6">
            
            {/* Header top bar */}
            <div className="w-full mt-4 mb-4 flex items-center justify-between z-10 relative">
              <button
                onClick={() => setView('profile')}
                className="size-[40px] rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-sm hover:bg-white/50 active:scale-95 transition-all cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f3336" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              
              <div className="flex flex-col items-center text-center flex-1 mx-2">
                <h1 className="font-semibold text-[#2f3336] text-[20px] tracking-tight" style={{ fontFamily: "'Outfit', 'Lexend Deca', sans-serif" }}>
                  Dream Timeline
                </h1>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowCalendarModal(true)}
                  className="size-[40px] rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-sm hover:bg-white/50 active:scale-95 transition-all cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f3336" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </button>
                <button className="size-[40px] rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-sm hover:bg-white/50 active:scale-95 transition-all cursor-pointer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f3336" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Weekly Strip Header */}
            <div className="w-full flex justify-between items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl py-2 px-2.5 shadow-sm mb-5 z-10">
              {[
                { label: "Lun", num: "04", index: 4 },
                { label: "Mar", num: "05", index: 3 },
                { label: "Mer", num: "06", index: 2 },
                { label: "Jeu", num: "07", index: 1 },
                { label: "Ven", num: "08", index: 0 },
                { label: "Sam", num: "09", index: -1 },
                { label: "Dim", num: "10", index: -2 }
              ].map((day, idx) => {
                const isActive = day.index === activeDreamIndex;
                const hasDream = day.index >= 0;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (hasDream) {
                        setActiveDreamIndex(day.index);
                      }
                    }}
                    className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#a9adf9]/25 border border-[#a9adf9]/45 text-[#3b4890] scale-105 font-semibold' 
                        : hasDream
                          ? 'text-[#2f3336] cursor-pointer hover:bg-white/10'
                          : 'text-[#2f3336]/35 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-[10px] font-medium opacity-75">{day.label}</span>
                    <span className="text-[14px] font-bold tracking-tight mt-0.5">{day.num}</span>
                    <span className={`w-1 h-1 rounded-full mt-1 ${isActive ? 'bg-[#4a569d]' : hasDream ? 'bg-[#515151]/20' : 'bg-transparent'}`} />
                  </div>
                );
              })}
            </div>

            {/* Swiper Carousel Container with Dynamic Glow Background */}
            <div className="relative w-full flex flex-col items-center justify-center select-none py-2 my-2 min-h-[352px] z-10 overflow-visible">
              
              {/* Diffuse Orb background behind active card */}
              <div className="absolute top-[40px] size-[180px] rounded-full bg-gradient-to-tr from-[#a9adf9]/50 via-[#c7d2fe]/30 to-[#b3ecf3]/45 blur-2xl opacity-80 animate-breathe-slow pointer-events-none z-0" />
              
              {/* Active Dream details card Carousel */}
              <div className="relative flex items-center justify-center w-full z-10 h-[330px] overflow-visible">
                {dreamTimelineData.map((dream, index) => {
                  const offset = index - activeDreamIndex;
                  const isCenter = index === activeDreamIndex;
                  
                  // Hide items that are too far away for simplicity
                  if (Math.abs(offset) > 1) return null;
                  
                  // Calculate visual transforms
                  let transformClass = "translate-x-0 scale-100 z-20 opacity-100 shadow-[0_16px_36px_rgba(84,89,158,0.2)]";
                  if (offset === -1) {
                    transformClass = "-translate-x-[115px] scale-[0.84] z-10 opacity-30 blur-[0.5px] cursor-pointer";
                  } else if (offset === 1) {
                    transformClass = "translate-x-[115px] scale-[0.84] z-10 opacity-30 blur-[0.5px] cursor-pointer";
                  }
                  
                  const style = cardStyles[dream.id] || 'original';

                  if (dream.id === 0) {
                    // Daily generated card layout style matching Figure 1
                    return (
                      <div
                        key={dream.id}
                        onClick={() => {
                          if (!isCenter) setActiveDreamIndex(dream.id);
                        }}
                        className={`absolute w-[232px] h-[330px] rounded-[24px] bg-white border border-white/90 shadow-md flex flex-col p-[20px] select-none overflow-hidden transition-all duration-500 ease-out ${transformClass}`}
                      >
                        {/* Background cover */}
                        <div 
                          className="absolute inset-0 z-0 cursor-pointer group"
                          onClick={(e) => {
                            if (isCenter) {
                              e.stopPropagation();
                              setShowDailyCard(true); // Open the full size check-in card overlay!
                            }
                          }}
                        >
                          <img
                            src={dream.image}
                            alt=""
                            className="w-full h-full object-cover opacity-[0.98] transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                          <div className="absolute inset-x-0 bottom-0 h-[172px] bg-gradient-to-t from-white via-white/95 to-white/0 pointer-events-none" />
                        </div>

                        {/* Top empty space to push content to the bottom */}
                        <div className="flex-1 pointer-events-none" />

                        {/* Date & Icon Row */}
                        <div className="relative z-10 flex items-end justify-between w-full pointer-events-none">
                          <img alt="Meditation" className="w-[34px] h-[30px] object-contain pb-0.5" src={imgMeditationIcon} />
                          <div className="flex items-baseline gap-1.5 text-[#54599e]">
                            <span className="font-semibold text-[32px] leading-none tracking-tight">
                              {dream.date.split(' ')[0]}
                            </span>
                            <span className="font-light text-[32px] leading-none">
                              {dream.date.split(' ')[1]}
                            </span>
                          </div>
                        </div>

                        {/* Tags Section */}
                        <div className="relative z-10 flex flex-col gap-1.5 mt-3 pointer-events-none">
                          <div className="flex flex-wrap gap-1">
                            {(() => {
                              const isVen = dream.dayShort === 'Ven';
                              const dailyTags = [
                                dream.tags.includes('DREAM') || isVen ? 'DREAM SIGNAL' : 'DAILY SIGNAL',
                                dream.energy === 'Haute' ? 'HIGH ENERGY' : dream.energy === 'Basse' ? 'LOW ENERGY' : 'BALANCED',
                                dream.tags.includes('CALME') || dream.tags.includes('REPOS') ? 'SOFT FOCUS' : 'CLEAR FOCUS',
                                dream.mood.split(' • ')[0].toUpperCase()
                              ];
                              return dailyTags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="bg-[#eeeffc]/90 text-[#4a569d] px-[7px] py-[3.5px] rounded-full text-[8.2px] font-bold tracking-wide uppercase whitespace-nowrap"
                                >
                                  {tag}
                                </span>
                              ));
                            })()}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return style === 'original' ? (
                    <div
                      key={dream.id}
                      onClick={() => {
                        if (!isCenter) setActiveDreamIndex(dream.id);
                      }}
                      className={`absolute w-[232px] h-[330px] rounded-[24px] bg-white border border-white/90 shadow-md flex flex-col p-4 select-none overflow-hidden transition-all duration-500 ease-out ${transformClass}`}
                    >
                      {/* Image cover + fade gradient */}
                      <div 
                        className="absolute inset-0 z-0 cursor-pointer group"
                        onClick={(e) => {
                          if (isCenter) {
                            e.stopPropagation();
                            setExpandedDreamId(dream.id);
                          }
                        }}
                      >
                        <img
                          src={dream.image}
                          alt=""
                          className="w-full h-full object-cover opacity-[0.98] transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-[190px] bg-gradient-to-t from-white via-white/95 to-white/0 pointer-events-none" />
                      </div>
                      
                      {/* Top Header Card row */}
                      <div className="relative z-10 flex items-center justify-between w-full pointer-events-none">
                        <div className="size-9 rounded-full bg-white/60 border border-white/80 flex items-center justify-center shadow-sm">
                          <svg className="size-[18px] text-[#4a569d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                        </div>
                        <div className="flex flex-col items-end text-[#4a569d] font-bold leading-none">
                          <span className="text-[12px] tracking-tight">{dream.dayName}</span>
                          <span className="text-[18px] mt-0.5">{dream.date.split(' ')[1]}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1 pointer-events-none" />
                      
                      {/* Dream contents & details in Card */}
                      <div className="relative z-10 w-full flex flex-col gap-2 pointer-events-none">
                        {/* Tags list */}
                        <div className="flex flex-wrap gap-1.5 mb-1 max-h-[18px] overflow-hidden">
                          {dream.tags.map((tag, idx) => (
                            <span key={idx} className="bg-[#eeeffc]/90 text-[#4a569d] px-2 py-0.5 rounded-full text-[8.2px] font-bold tracking-wide uppercase whitespace-nowrap">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Dream poetic description text - Hidden when not clicked per user request */}
                        {/*
                        <div className="relative py-1">
                          <span className="absolute -left-1 -top-2 text-[26px] font-serif text-[#a9adf9]/50 leading-none">“</span>
                          <p className="text-[#2f3336] text-[12.5px] leading-[1.4] font-medium font-serif italic line-clamp-4 pl-3.5 pr-2 pt-0.5">
                            {dream.content}
                          </p>
                        </div>
                        */}
                        
                        {/* Meta box row at bottom */}
                        <div className="mt-2 pt-2 border-t border-[#515151]/5 flex justify-between items-center text-[10px] text-[#5c5f63]">
                          <div className="flex flex-col">
                            <span className="text-[8.5px] text-[#515151]/50 uppercase tracking-wider font-semibold">Humeur</span>
                            <span className="font-bold text-[#2f3336] mt-0.5">{dream.mood}</span>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-[8.5px] text-[#515151]/50 uppercase tracking-wider font-semibold">Énergie</span>
                            <span className="font-bold text-[#2f3336] mt-0.5 flex items-center gap-1">
                              {dream.energy}
                              <svg className="size-3.5 inline text-[#4a569d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
                                <line x1="22" y1="11" x2="22" y2="13" />
                                {dream.energyVal >= 1 && <line x1="6" y1="11" x2="6" y2="13" />}
                                {dream.energyVal >= 2 && <line x1="10" y1="11" x2="10" y2="13" />}
                                {dream.energyVal >= 3 && <line x1="14" y1="11" x2="14" y2="13" />}
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={dream.id}
                      onClick={() => {
                        if (!isCenter) setActiveDreamIndex(dream.id);
                      }}
                      className={`absolute w-[232px] h-[330px] rounded-[24px] bg-white border border-white/90 shadow-md flex flex-col select-none overflow-hidden transition-all duration-500 ease-out ${transformClass}`}
                    >
                      {/* Image header part */}
                      <div 
                        className="w-full h-[125px] relative overflow-hidden cursor-pointer shrink-0 group"
                        onClick={(e) => {
                          if (isCenter) {
                            e.stopPropagation();
                            setCardStyles(prev => ({
                              ...prev,
                              [dream.id]: 'original'
                            }));
                          }
                        }}
                      >
                        <img
                          src={dream.image}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors" />
                        {/* Corner badge removed per user request */}
                      </div>

                      {/* Figma Content Area */}
                      <div className="flex-1 flex flex-col p-3 pt-2">
                        {/* Left/Right metadata block */}
                        <div className="flex justify-between items-start leading-tight">
                          <div className="flex flex-col gap-0.5 max-w-[65%]">
                            <h4 className="text-[#5a62a5] text-[13px] font-bold tracking-tight truncate">
                              {dream.id === 2 ? 'Floating' : dream.title}
                            </h4>
                            <p className="text-[#bdc2e4] text-[8.5px] font-medium leading-[1.2] line-clamp-2">
                              {dream.id === 2 ? 'A gentle, distant kind of peace.' : dream.tags.slice(0, 2).join(' • ')}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-0.5">
                            <div className="flex gap-0.5 items-baseline text-[12px] font-bold text-[#5e67a5]">
                              <span>Mai</span>
                              <span className="font-light text-[#7480bf]">{dream.dayNum}</span>
                            </div>
                            <p className="text-[#b9bee0] text-[8px] font-medium text-right uppercase tracking-wider">
                              {dream.dayName}
                            </p>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#eff2fb] my-1.5" />

                        {/* Quote section */}
                        <div className="relative flex-1 flex flex-col justify-center px-1 my-0.5">
                          <span className="absolute left-0 top-0 text-[18px] text-[#a7aedf] leading-none select-none">“</span>
                          <p className="text-[#7e86c0] text-[10px] leading-relaxed font-serif italic text-center px-3.5 font-medium line-clamp-3">
                            {dream.id === 2 ? 'Warm light, distant voices, and a feeling I couldn’t name.' : dream.content}
                          </p>
                          <span className="absolute right-0 bottom-0 text-[18px] text-[#a7aedf] leading-none select-none rotate-180 -scale-y-100">“</span>
                        </div>

                        {/* Bottom metrics pill */}
                        <div className="bg-[#ffffff]/90 border border-[#f0f1fa] shadow-[0_2px_8px_rgba(240,241,250,0.6)] rounded-[13px] px-2 py-1 flex items-center justify-between mt-auto">
                          {/* Emotions side */}
                          <div className="flex items-center gap-1 overflow-hidden">
                            <span className="text-[#b6bce0] text-[5.5px] font-semibold tracking-wider">EMOTIONS</span>
                            {dream.mood.split(' • ').map((tag, idx) => {
                              const isAlt = idx % 2 === 1;
                              const tagBg = isAlt ? 'bg-[#fff1eb]' : 'bg-[#eff2fb]';
                              const tagText = isAlt ? 'text-[#e58974]' : 'text-[#6973b6]';
                              return (
                                <span key={idx} className={`${tagBg} ${tagText} text-[7px] font-bold px-1.5 py-0.5 rounded-[6px] uppercase whitespace-nowrap`}>
                                  {tag === 'serein' ? 'calm' : tag === 'apaisé' ? 'nostalgique' : tag}
                                </span>
                              );
                            })}
                          </div>

                          {/* Pill separator */}
                          <div className="bg-[#eceffa] h-3.5 w-[1px] mx-1" />

                          {/* Energy side */}
                          <div className="flex items-center gap-1 shrink-0">
                            <span className="text-[#b6bce0] text-[5.5px] font-semibold tracking-wider">ENERGY</span>
                            <div className="size-1 rounded-full bg-[#7f88c4]" />
                            <span className="text-[#7f88c4] text-[7px] font-bold">
                              {dream.energyVal === 1 ? 'Low' : dream.energyVal === 2 ? 'Medium' : 'High'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagination dots indicator */}
            <div className="flex justify-center gap-2 mb-6 z-10 relative">
              {dreamTimelineData.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveDreamIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeDreamIndex 
                      ? 'w-5 bg-[#4a569d]' 
                      : 'w-2 bg-[#515151]/25 hover:bg-[#515151]/40'
                  }`}
                />
              ))}
            </div>

            {/* Timeline List Section */}
            <div className="w-full mt-4 z-10 relative">
              <div className="flex justify-between items-center mb-4 pl-1">
                <h3 className="font-semibold text-[#2f3336] text-[16px]">Timeline des Rêves</h3>
                <button className="flex items-center gap-1.5 px-3 py-1 bg-white/30 backdrop-blur-md border border-white/40 hover:bg-white/50 text-[#5c5f63] font-semibold text-[11px] rounded-full transition-all cursor-pointer shadow-sm">
                  <span>Filtrer</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </button>
              </div>

              {/* Vertical list items with timeline design */}
              <div className="relative pl-7 flex flex-col gap-4">
                
                {/* Visual timeline connector line */}
                <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#a9adf9]/50 via-[#c7d2fe]/30 to-[#eeeffc]/10 pointer-events-none" />
                
                {(isTimelineExpanded ? dreamTimelineData : dreamTimelineData.slice(0, 3)).map((item) => {
                  const isActive = item.id === activeDreamIndex;
                  return (
                    <div key={item.id} className="relative w-full">
                      
                      {/* Timeline dot node */}
                      <div
                        onClick={() => setActiveDreamIndex(item.id)}
                        className={`absolute -left-[22px] top-1/2 -translate-y-1/2 size-4 rounded-full border-2 bg-white flex items-center justify-center transition-all cursor-pointer z-10 ${
                          isActive 
                            ? 'border-[#4a569d] scale-125 shadow-md shadow-[#4a569d]/20' 
                            : 'border-[#515151]/20 hover:border-[#515151]/40'
                        }`}
                      >
                        <div className={`size-1.5 rounded-full ${isActive ? 'bg-[#4a569d]' : 'bg-[#515151]/15'}`} />
                      </div>
                      
                      {/* Horizontal list card */}
                      <div
                        onClick={() => setActiveDreamIndex(item.id)}
                        className={`p-3 bg-white/35 backdrop-blur-md border rounded-[20px] shadow-sm flex items-center justify-between transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? 'bg-white/65 border-[#a9adf9] shadow-md scale-[1.01]' 
                            : 'border-white/50 hover:bg-white/45'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          
                          {/* Mini Thumbnail cover */}
                          <div className="size-11 rounded-xl overflow-hidden border border-white/60 shrink-0 shadow-sm relative">
                            <img src={item.image} alt="" className="w-full h-full object-cover" />
                          </div>
                          
                          <div className="flex flex-col min-w-0 flex-1 pr-2">
                            <div className="flex justify-between items-baseline">
                              <span className="font-semibold text-[#2f3336] text-[13px] leading-tight truncate">
                                {(() => {
                                  if (item.id === 0) {
                                    if (item.tags.includes('CALME')) return 'Priorité Calme';
                                    if (item.tags.includes('INSPIRÉ')) return 'Focus Créatif';
                                    if (item.tags.includes('REPOS')) return 'Restauration Douce';
                                    if (item.tags.includes('SAGESSE')) return 'Ancre de Clarté';
                                    return 'Signal Quotidien';
                                  }
                                  return item.title;
                                })()}
                              </span>
                            </div>
                            <p className="text-[#515151]/75 text-[11px] font-light mt-0.5 line-clamp-1 leading-tight">
                              {(() => {
                                  if (item.id === 0) {
                                    return checkinText.trim()
                                      ? checkinText
                                      : `Bilan quotidien de vitalité (${item.energy.toLowerCase()}) et d'intention d'ancrage.`;
                                  }
                                  return item.content;
                              })()}
                            </p>
                          </div>
                        </div>

                        {/* Right side Metadata column */}
                        <div className="flex flex-col items-end gap-1.5 shrink-0 pl-1">
                          <span className="text-[9.5px] font-medium text-[#5c5f63]/80 bg-white/50 px-2 py-0.5 rounded-full border border-white/60">
                            {item.dayShort} {item.date.split(' ')[1]}
                          </span>
                          <span className="text-[8.5px] font-bold text-[#4a569d]/80 bg-[#eeeffc]/60 px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                            {item.id === 0 
                              ? (item.energy === 'Haute' ? 'VIT. HAUTE' : item.energy === 'Basse' ? 'VIT. BASSE' : 'BALANCED')
                              : item.mood.split(' • ')[0]
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* "Voir plus" trigger button */}
              <div className="w-full flex justify-center mt-5 mb-2">
                <button 
                  onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 text-[#5c5f63]/80 font-bold text-[11.5px] rounded-full border border-black/5 shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <span>{isTimelineExpanded ? "Voir moins" : "Voir plus de rêves"}</span>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isTimelineExpanded ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── MOOD HEATMAP ANALYTICS VIEW ── */}
        {view === 'mood_analytics' && (() => {
          const getHeatmapCellClass = (moodType: string, intensity: number, isSelected: boolean) => {
            let bg = '';
            let text = '';
            let border = '';
            
            switch (moodType) {
              case 'serein':
                bg = intensity >= 4 ? 'bg-[#9BF2FF]/75' : 'bg-[#9BF2FF]/30';
                text = intensity >= 4 ? 'text-[#004b57]' : 'text-[#064e5b]';
                border = intensity >= 4 ? 'border-[#9BF2FF]/70' : 'border-[#9BF2FF]/35';
                break;
              case 'créatif':
              case 'neutre':
                bg = intensity >= 4 ? 'bg-[#B8BCFF]/75' : 'bg-[#B8BCFF]/30';
                text = intensity >= 4 ? 'text-[#1e1b4b]' : 'text-[#2c2875]';
                border = intensity >= 4 ? 'border-[#B8BCFF]/70' : 'border-[#B8BCFF]/35';
                break;
              case 'fatigué':
              case 'stressé':
                bg = intensity >= 4 ? 'bg-[#FFACDE]/75' : 'bg-[#FFACDE]/30';
                text = intensity >= 4 ? 'text-[#500730]' : 'text-[#691845]';
                border = intensity >= 4 ? 'border-[#FFACDE]/70' : 'border-[#FFACDE]/35';
                break;
            }

            let interactive = isSelected 
              ? 'border-[#4852ff] border-2 scale-105 shadow-[0_0_12px_rgba(72,82,255,0.35)] z-20 font-semibold' 
              : `${border} hover:bg-white/20 hover:scale-105 border`;
            
            return `${bg} ${text} ${interactive} backdrop-blur-md`;
          };

          // 30 days grid chronologically: oldest (Day 29) to newest (Day 0)
          const chronDays = [...moodHistoryData].reverse();

          return (
            <div className="flex-1 w-full min-h-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[168px] flex flex-col items-center z-10 animate-fadeSlide pt-[62px] px-6 relative">
              
              {/* Breathing background neon spots */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[120px] -left-12 size-[180px] bg-[#a9adf9]/15 rounded-full blur-[40px] animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute top-[280px] -right-12 size-[220px] bg-[#f472b6]/10 rounded-full blur-[50px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[200px] left-10 size-[160px] bg-[#2dd4bf]/8 rounded-full blur-[45px] animate-pulse" style={{ animationDuration: '7s' }} />
              </div>

              {/* Header Top Bar */}
              <div className="w-full mt-4 mb-5 flex items-center justify-between z-10 relative">
                <button
                  onClick={() => setView('profile')}
                  className="size-[40px] rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-sm hover:bg-white/50 active:scale-95 transition-all cursor-pointer"
                >
                  <ArrowLeft className="size-5 text-[#2f3336]" />
                </button>
                
                <div className="flex flex-col items-center text-center flex-1 mx-2">
                  <h1 className="font-semibold text-[#2f3336] text-[20px] tracking-tight" style={{ fontFamily: "'Outfit', 'Lexend Deca', sans-serif" }}>
                    Suivi d'Émotion
                  </h1>
                  <span className="text-[#515151]/75 text-[9px] tracking-widest uppercase mt-0.5">
                    Schémas Émotionnels • Analyse Temporelle
                  </span>
                </div>
                
                <button className="size-[40px] rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-sm hover:bg-white/50 active:scale-95 transition-all cursor-pointer">
                  <Filter className="size-[18px] text-[#2f3336]" />
                </button>
              </div>

              {/* 1. Overall Score Glass Card */}
              <div className="w-full bg-white/40 backdrop-blur-xl border border-white/60 p-5 rounded-[24px] shadow-sm flex flex-col gap-4 mb-5 z-10">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[#515151]/60 text-[11px] tracking-wider uppercase font-semibold">Indice de Bonheur</span>
                    <h2 className="text-[#2f3336] text-[36px] font-bold tracking-tight leading-none mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      83% <span className="text-[14px] text-emerald-500 font-semibold bg-emerald-100/50 px-2 py-0.5 rounded-full inline-block align-middle ml-1">+2.4%</span>
                    </h2>
                  </div>
                </div>

                {/* Progress bar line */}
                <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#a9adf9] via-[#c7d2fe] to-[#38bdf8] rounded-full transition-all duration-1000" 
                    style={{ width: '83%' }}
                  />
                </div>

                {/* Diagnostic text */}
                <p className="text-[#5c5f63] text-[12.5px] leading-relaxed font-light">
                  Votre harmonie intérieure reste robuste avec une stabilité émotionnelle élevée. Vos signaux montrent un bel équilibre cette semaine.
                </p>
              </div>

              {/* 2. Heatmap Grid Card */}
              <div className="w-full bg-white/30 backdrop-blur-xl border border-white/50 p-5 rounded-[24px] shadow-sm mb-5 z-10 flex flex-col gap-4">
                <div className="flex justify-between items-center relative">
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-[#2f3336] text-[15px]">Calendrier des 30 Derniers Jours</h3>
                    <p className="text-[#515151]/60 text-[10.5px] font-light mt-0.5">Cliquez sur une case pour inspecter les détails</p>
                  </div>

                  {/* Month Selection Badge */}
                  <div className="relative">
                    <button
                      onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                      className="flex items-center gap-1.5 bg-white/50 hover:bg-white/70 active:scale-95 transition-all backdrop-blur-md border border-white/60 px-3 py-1.5 rounded-full text-[11px] font-medium text-[#4a569d] shadow-sm cursor-pointer"
                    >
                      <span>{heatmapMonth}</span>
                      <ChevronDown className={`size-3 text-[#4a569d] transition-transform duration-300 ${showMonthDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showMonthDropdown && (
                      <>
                        {/* Backdrop to close */}
                        <div className="fixed inset-0 z-40" onClick={() => setShowMonthDropdown(false)} />

                        {/* Dropdown Menu */}
                        <div className="absolute right-0 mt-1.5 w-[115px] bg-white/95 backdrop-blur-2xl border border-white/55 rounded-[16px] shadow-lg p-1.5 z-50 flex flex-col gap-0.5 animate-scaleUp">
                          {['Mai 2026', 'Avril 2026', 'Mars 2026'].map((m) => (
                            <button
                              key={m}
                              onClick={() => {
                                setHeatmapMonth(m);
                                setShowMonthDropdown(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-[10px] text-[11.5px] font-semibold transition-all ${
                                heatmapMonth === m
                                  ? 'bg-[#a9adf9]/20 text-[#4a569d]'
                                  : 'text-[#2f3336] hover:bg-black/5'
                              }`}
                            >
                              {m}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Heatmap Grid (6 cols x 5 rows) */}
                <div className="grid grid-cols-6 gap-2.5 w-full my-1 justify-items-stretch">
                  {chronDays.map((item) => {
                    const isSelected = selectedHeatmapDayIndex === item.id;
                    let displayLabel = '';
                    if (heatmapMonth === 'Mai 2026') {
                      displayLabel = item.id === 0 ? "Auj." : (item.date.split(' ')[1] || "Mai");
                    } else if (heatmapMonth === 'Avril 2026') {
                      displayLabel = item.id === 0 ? "30 Avr" : "Avr";
                    } else {
                      displayLabel = item.id === 0 ? "31 Mar" : "Mar";
                    }

                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedHeatmapDayIndex(item.id)}
                        className={`aspect-square w-full rounded-[14px] border flex flex-col items-center justify-center text-[10.5px] transition-all duration-300 active:scale-90 ${getHeatmapCellClass(
                          item.moodType,
                          item.intensity,
                          isSelected
                        )}`}
                      >
                        {displayLabel}
                      </button>
                    );
                  })}
                </div>

                {/* Heatmap Grid Legend */}
                <div className="flex items-center justify-between text-[9px] text-[#515151]/60 border-t border-black/5 pt-3.5 mt-1">
                  <span>Moins intense</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="size-2.5 rounded-sm bg-[#9BF2FF]/30 border border-[#9BF2FF]/35 backdrop-blur-[1px]" />
                    <span className="size-2.5 rounded-sm bg-[#9BF2FF]/75 border border-[#9BF2FF]/70 backdrop-blur-[1px]" />
                    <span className="size-2.5 rounded-sm bg-[#B8BCFF]/75 border border-[#B8BCFF]/70 backdrop-blur-[1px]" />
                    <span className="size-2.5 rounded-sm bg-[#FFACDE]/75 border border-[#FFACDE]/70 backdrop-blur-[1px]" />
                  </div>
                  <span>Plus intense</span>
                </div>
              </div>

              {/* 4. Glass Capsule Distribution Vertical Thermometer Charts */}
              <div className="w-full bg-white/30 backdrop-blur-xl border border-white/50 p-5 rounded-[24px] shadow-sm mb-2 z-10 flex flex-col gap-4">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[#2f3336] text-[15px] tracking-wide">Répartition des Humeurs</h3>
                  <p className="text-[#515151]/60 text-[10.5px] font-light mt-1.5 tracking-wider">Pourcentage et volume sur 30 jours</p>
                </div>

                {/* Vertical columns bar container */}
                <div className="flex items-end justify-between px-2 mt-6 pt-6 h-[175px] border-b border-black/5 pb-2">
                  {[
                    { type: 'serein', count: moodStats.serein, grad: 'bg-[#9BF2FF]/75 border border-[#9BF2FF]/70 backdrop-blur-[2px]', icon: <Smile className="size-[18px]" strokeWidth={2.6} />, color: 'text-[#004b57] bg-[#9BF2FF]/35 border-[#9BF2FF]/60 shadow-[0_2px_8px_rgba(155,242,255,0.15)]' },
                    { type: 'créatif', count: moodStats.créatif, grad: 'bg-[#B8BCFF]/75 border border-[#B8BCFF]/70 backdrop-blur-[2px]', icon: <Sparkles className="size-[18px]" strokeWidth={2.6} />, color: 'text-[#1e1b4b] bg-[#B8BCFF]/35 border-[#B8BCFF]/60 shadow-[0_2px_8px_rgba(184,188,255,0.15)]' },
                    { type: 'neutre', count: moodStats.neutre, grad: 'bg-[#B8BCFF]/40 border border-[#B8BCFF]/35 backdrop-blur-[2px]', icon: <Moon className="size-[18px]" strokeWidth={2.6} />, color: 'text-[#2c2875] bg-[#B8BCFF]/25 border-[#B8BCFF]/50 shadow-[0_2px_8px_rgba(184,188,255,0.1)]' },
                    { type: 'fatigué', count: moodStats.fatigué, grad: 'bg-[#FFACDE]/40 border border-[#FFACDE]/35 backdrop-blur-[2px]', icon: <Meh className="size-[18px]" strokeWidth={2.6} />, color: 'text-[#691845] bg-[#FFACDE]/25 border-[#FFACDE]/50 shadow-[0_2px_8px_rgba(255,172,222,0.1)]' },
                    { type: 'stressé', count: moodStats.stressé, grad: 'bg-[#FFACDE]/75 border border-[#FFACDE]/70 backdrop-blur-[2px]', icon: <Frown className="size-[18px]" strokeWidth={2.6} />, color: 'text-[#500730] bg-[#FFACDE]/35 border-[#FFACDE]/60 shadow-[0_2px_8px_rgba(255,172,222,0.15)]' }
                  ].map((col) => {
                    const percent = Math.round((col.count / 30) * 100);
                    return (
                      <div key={col.type} className="flex flex-col items-center gap-2.5 flex-1">
                        {/* Day count label floating above bar */}
                        <span className="text-[10px] font-bold text-[#2f3336]/80 tracking-wide">{col.count}j</span>
                        
                        {/* Thermometer track */}
                        <div className="w-[14px] h-[100px] bg-white/20 backdrop-blur-[1px] rounded-full overflow-hidden relative border border-white/30 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)]">
                          {/* Colored bar fill */}
                          <div 
                            className={`absolute bottom-0 w-full ${col.grad} rounded-full transition-all duration-1000 ease-out`}
                            style={{ height: `${percent}%` }}
                          />
                        </div>

                        {/* Percentage description */}
                        <span className="text-[10px] font-bold text-[#515151] tracking-wide mt-0.5">{percent}%</span>

                        {/* Circular glass Lucide button below */}
                        <div className={`size-[30px] rounded-full flex items-center justify-center border transition-all mt-1 ${col.color} hover:scale-105 active:scale-95 duration-200 cursor-pointer`}>
                          {col.icon}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtitle labels */}
                <div className="grid grid-cols-5 text-center text-[10px] font-bold text-[#2f3336] mt-2 tracking-tight">
                  <span>Calme</span>
                  <span>Créatif</span>
                  <span>Rêveur</span>
                  <span>Fatigué</span>
                  <span>Stressé</span>
                </div>
              </div>

            </div>
          );
        })()}

        {showDailyCard && (
          <DailyCardOverlay
            insight={dailyInsight}
            onClose={() => setShowDailyCard(false)}
            onStart={() => {
              setShowDailyCard(false);
              setView('home');
            }}
          />
        )}

        {showCalendarModal && (() => {
          // Define helper functions and variables in an IIFE so they don't pollute the upper scope
          const currentDream = dreamTimelineData[activeDreamIndex] || dreamTimelineData[0];
          
          const getDayInfoForIndex = (idx: number) => {
            const baseDate = new Date(2026, 4, 8); // May 8, 2026
            const targetDate = new Date(baseDate.getTime() - idx * 24 * 60 * 60 * 1000);
            
            const daysFrench = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
            const monthsFrench = ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."];
            
            const dayNum = String(targetDate.getDate()).padStart(2, '0');
            const dayShort = daysFrench[targetDate.getDay()];
            const dayName = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][targetDate.getDay()];
            const monthShort = monthsFrench[targetDate.getMonth()];
            
            return {
              dayNum,
              dayShort,
              dayName,
              date: `${monthShort} ${dayNum}`,
              id: idx,
              isOutOfRange: idx < 0 || idx > 7
            };
          };

          const getCurveStyles = (dx: number) => {
            const abs = Math.abs(dx);
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            
            if (abs === 0) {
              translateY = 0;
              scale = 1.15;
              opacity = 1;
            } else if (abs === 1) {
              translateY = 6;
              scale = 0.95;
              opacity = 0.8;
            } else if (abs === 2) {
              translateY = 20;
              scale = 0.82;
              opacity = 0.45;
            } else if (abs === 3) {
              translateY = 38;
              scale = 0.7;
              opacity = 0.18;
            }
            
            return {
              transform: `translate3d(calc(-50% + ${dx * 42}px), ${translateY}px, 0) scale(${scale})`,
              opacity,
              zIndex: 10 - abs,
            };
          };

          const handleDragStart = (clientX: number) => {
            dragStartX.current = clientX;
          };

          const handleDragEnd = (clientX: number) => {
            const diff = dragStartX.current - clientX;
            if (Math.abs(diff) > 40) {
              if (diff > 0) {
                // Swipe Left -> Older date (index increases)
                setActiveDreamIndex(prev => Math.min(7, prev + 1));
              } else {
                // Swipe Right -> Newer date (index decreases)
                setActiveDreamIndex(prev => Math.max(0, prev - 1));
              }
            }
          };

          return (
            <div className="absolute inset-0 z-[300] flex items-center justify-center px-4 animate-fadeSlide select-none" style={{ backdropFilter: 'blur(6px)', background: 'rgba(220, 225, 255, 0.12)' }}>
              {/* Background click to close */}
              <div className="absolute inset-0 cursor-default" onClick={() => setShowCalendarModal(false)} />
              
              {/* Glassmorphic Calendar Card */}
              <div 
                className="w-[342px] rounded-[32px] p-6 relative flex flex-col gap-6 text-[#2d3250] overflow-hidden transition-all duration-300 animate-scaleUp"
                style={{
                  background: 'rgba(255, 255, 255, 0.70)',
                  backdropFilter: 'blur(32px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.80)',
                  boxShadow: '0 20px 60px rgba(120, 130, 200, 0.15), 0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
                }}
              >
                {/* Glowing aesthetic backdrop orbs */}
                <div className="absolute -top-12 -left-12 size-[160px] rounded-full bg-[#a9adf9]/25 blur-[50px] pointer-events-none animate-breathe" />
                <div className="absolute -bottom-12 -right-12 size-[160px] rounded-full bg-[#c782e3]/20 blur-[50px] pointer-events-none animate-breathe-slow" />
                
                {/* Top selector pills */}
                <div className="flex justify-between items-center w-full z-10">
                  <div className="flex p-0.5 bg-black/6 backdrop-blur-md rounded-full border border-black/8 w-[160px] relative">
                    <div 
                      className="absolute top-0.5 bottom-0.5 rounded-full bg-white transition-all duration-300 shadow-sm"
                      style={{
                        width: 'calc(50% - 2px)',
                        left: calendarMode === 'weekly' ? '2px' : 'calc(50%)'
                      }}
                    />
                    <button 
                      onClick={() => setCalendarMode('weekly')}
                      className={`flex-1 text-[10px] font-bold py-1.5 rounded-full z-10 transition-colors duration-300 ${calendarMode === 'weekly' ? 'text-[#333d54]' : 'text-[#333d54]/45'}`}
                    >
                      Weekly
                    </button>
                    <button 
                      onClick={() => setCalendarMode('monthly')}
                      className={`flex-1 text-[10px] font-bold py-1.5 rounded-full z-10 transition-colors duration-300 ${calendarMode === 'monthly' ? 'text-[#333d54]' : 'text-[#333d54]/45'}`}
                    >
                      Monthly
                    </button>
                  </div>
                  
                  {/* Settings gear & Close button */}
                  <div className="flex gap-2">
                    <button className="size-8 rounded-full bg-black/5 hover:bg-black/10 active:scale-95 transition-all flex items-center justify-center border border-black/8 cursor-pointer text-[#2d3250]/60">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setShowCalendarModal(false)}
                      className="size-8 rounded-full bg-black/8 hover:bg-black/12 active:scale-95 transition-all flex items-center justify-center border border-black/8 cursor-pointer text-[#2d3250]/70"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Big typography selected day displaying */}
                <div className="flex justify-between items-baseline px-1.5 z-10">
                  <span className="text-[28px] font-semibold text-[#2d3250] font-serif" style={{ fontFamily: "'Outfit', 'Lexend Deca', sans-serif" }}>
                    {currentDream.dayName}
                  </span>
                  <span className="text-[44px] font-black tracking-tight text-[#2d3250] leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {currentDream.dayNum}
                  </span>
                </div>

                {/* Main Content Area: Switch between Weekly and Monthly */}
                <div className="relative z-10 flex flex-col justify-center min-h-[120px]">
                  {calendarMode === 'weekly' ? (
                    <div 
                      className="w-full h-[110px] relative overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
                      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
                      onMouseDown={(e) => handleDragStart(e.clientX)}
                      onMouseUp={(e) => handleDragEnd(e.clientX)}
                    >
                      
                      {/* Render 7 days: offsets -3 to 3 */}
                      {[-3, -2, -1, 0, 1, 2, 3].map((dx) => {
                        const targetIdx = activeDreamIndex - dx;
                        const dayInfo = getDayInfoForIndex(targetIdx);
                        const curveStyle = getCurveStyles(dx);
                        const isOutOfRange = targetIdx < 0 || targetIdx > 7;
                        
                        return (
                          <div
                            key={`dial-${dx}-${dayInfo.dayNum}`}
                            onClick={() => {
                              if (!isOutOfRange) {
                                setActiveDreamIndex(targetIdx);
                              }
                            }}
                            className="absolute top-1 left-1/2 flex flex-col items-center cursor-pointer transition-all duration-300 ease-out"
                            style={curveStyle}
                          >
                            <span className="text-[8.5px] font-bold tracking-wider uppercase text-[#2d3250]/40 mb-1.5">
                              {dayInfo.dayShort}
                            </span>
                            <div 
                              className={`size-[34px] rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-300 ${
                                dx === 0 
                                  ? 'bg-[#a9adf9] text-white shadow-lg shadow-[#a9adf9]/40 border border-white/20 scale-105' 
                                  : isOutOfRange
                                    ? 'bg-transparent text-[#2d3250]/15 border border-transparent'
                                    : 'bg-black/5 hover:bg-black/10 text-[#2d3250]/65 border border-black/5'
                              }`}
                            >
                              {dayInfo.dayNum}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Elegant Morand Glassmorphic Monthly Calendar */
                    <div className="w-full flex flex-col gap-2 animate-fadeSlide py-1">
                      {/* Weekday headers */}
                      <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-bold text-[#2d3250]/40 uppercase tracking-wider">
                        <span>Lun</span>
                        <span>Mar</span>
                        <span>Mer</span>
                        <span>Jeu</span>
                        <span>Ven</span>
                        <span>Sam</span>
                        <span>Dim</span>
                      </div>
                      
                      {/* Days grid */}
                      <div className="grid grid-cols-7 gap-1.5 mt-1">
                        {/* May 2026 starts on Friday, so 4 empty spaces (Mon, Tue, Wed, Thu) */}
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={`empty-${i}`} className="aspect-square flex items-center justify-center text-[10px] text-[#2d3250]/15">
                            •
                          </div>
                        ))}
                        
                        {/* Days 1 to 31 */}
                        {Array.from({ length: 31 }).map((_, i) => {
                          const dayNum = i + 1;
                          const hasDream = dayNum >= 1 && dayNum <= 8;
                          const dreamIdx = hasDream ? 8 - dayNum : -1;
                          const isActive = hasDream && dreamIdx === activeDreamIndex;
                          
                          return (
                            <button
                              key={`day-${dayNum}`}
                              disabled={!hasDream}
                              onClick={() => {
                                if (hasDream) {
                                  setActiveDreamIndex(dreamIdx);
                                }
                              }}
                              className={`aspect-square rounded-xl flex flex-col items-center justify-center text-[11px] transition-all relative ${
                                isActive 
                                  ? 'bg-[#a9adf9] text-white font-bold shadow-md shadow-[#a9adf9]/20 scale-105 z-10 border border-[#a9adf9]/30' 
                                  : hasDream 
                                    ? 'bg-black/5 text-[#2d3250]/80 border border-black/5 hover:bg-black/10 active:scale-95 cursor-pointer' 
                                    : 'text-[#2d3250]/20 border border-transparent cursor-not-allowed'
                              }`}
                            >
                              <span>{dayNum}</span>
                              {hasDream && !isActive && (
                                <span className="absolute bottom-1 size-1 rounded-full bg-[#c782e3]/70" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom interactive row */}
                <div className="flex items-center justify-between gap-3 mt-1 z-10">
                  <button 
                    onClick={() => {
                      setShowCalendarModal(false);
                      // focus text input or just open checkin
                      setView('checkin');
                    }}
                    className="bg-black/5 hover:bg-black/8 px-3 py-2.5 rounded-2xl flex items-center gap-2 border border-black/8 text-[#2d3250]/50 text-[11px] flex-1 text-left transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                    <span>Note rapide...</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      setShowCalendarModal(false);
                      setView('checkin');
                    }}
                    className="bg-gradient-to-r from-[#a9adf9] to-[#c782e3] hover:brightness-110 active:scale-95 transition-all text-white font-bold text-[11px] py-2.5 px-4 rounded-2xl shadow-md shadow-[#a9adf9]/20 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>+ Nouveau Rêve</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Interactive Modals Overlays */}
        {showDreamModal && (
          <div className="absolute inset-0 bg-black/25 backdrop-blur-md z-[300] flex items-end justify-center animate-fadeSlide">
            <div className="w-full bg-white/95 border-t border-white/80 rounded-t-[32px] p-6 max-h-[82%] overflow-y-auto flex flex-col gap-4 shadow-2xl animate-fadeSlide pb-[100px]">
              <div className="flex items-center justify-between pb-3 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-5 text-indigo-500" />
                  <p className="font-bold text-[#2f3336] text-[18px]">Journal de Rêves</p>
                </div>
                <button
                  onClick={() => setShowDreamModal(false)}
                  className="size-8 rounded-full bg-[#515151]/10 hover:bg-[#515151]/20 flex items-center justify-center font-bold text-[#515151]/75 text-[14px]"
                >
                  ✕
                </button>
              </div>
              <p className="text-[#515151]/75 text-[12px] font-light italic mb-2">
                Ces rêves alimentent directement les suggestions intelligentes de votre plan de croissance adaptatif.
              </p>
              
              {/* Recent dream logged by the user */}
              <div className="p-4 bg-[#a9adf9]/10 border border-[#a9adf9]/20 rounded-2xl flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-[#4a569d] tracking-wide uppercase">Dernier Rêve Enregistré</span>
                  <span className="text-[10px] text-[#515151]/75 font-medium">Aujourd'hui</span>
                </div>
                <p className="text-[#2f3336] text-[13px] leading-relaxed font-light">
                  {checkinText || "Aucun rêve enregistré aujourd'hui. Enregistrez votre premier rêve pendant votre Daily Check-in !"}
                </p>
              </div>

              {/* Historical dreams */}
              <div className="flex flex-col gap-3 mt-2">
                <span className="text-[11px] font-bold text-[#515151]/70 tracking-wider uppercase pl-1">Historique des Rêves</span>
                {[
                  {
                    date: "Hier",
                    title: "Le vol au-dessus du dôme cristallin",
                    content: "Je flottais dans les airs sans aucun effort. En dessous de moi se tenait une magnifique cité de verre violet et or. L'air était pur et calme.",
                    color: "border-indigo-100 bg-indigo-50/20"
                  },
                  {
                    date: "19 Mai 2026",
                    title: "L'horloge de sable doré",
                    content: "Un sablier géant suspendu au milieu du vide. Chaque grain de sable brillait d'une lumière chaude. Je sentais que le temps ralentissait.",
                    color: "border-amber-100 bg-amber-50/20"
                  }
                ].map((dream, i) => (
                  <div key={i} className={`p-4 border rounded-2xl flex flex-col gap-1.5 ${dream.color}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[#2f3336] text-[13px]">{dream.title}</span>
                      <span className="text-[10px] text-[#515151]/70 font-light">{dream.date}</span>
                    </div>
                    <p className="text-[#2f3336]/80 text-[12px] leading-relaxed font-light">{dream.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {showMoodModal && (
          <div className="absolute inset-0 bg-black/25 backdrop-blur-md z-[300] flex items-end justify-center animate-fadeSlide">
            <div className="w-full bg-white/95 border-t border-white/80 rounded-t-[32px] p-6 max-h-[82%] overflow-y-auto flex flex-col gap-4 shadow-2xl animate-fadeSlide pb-[100px]">
              <div className="flex items-center justify-between pb-3 border-b border-[#515151]/10">
                <div className="flex items-center gap-2">
                  <Smile className="size-5 text-emerald-500" />
                  <p className="font-bold text-[#2f3336] text-[18px]">Suivi d'Émotion</p>
                </div>
                <button
                  onClick={() => setShowMoodModal(false)}
                  className="size-8 rounded-full bg-[#515151]/10 hover:bg-[#515151]/20 flex items-center justify-center font-bold text-[#515151]/75 text-[14px]"
                >
                  ✕
                </button>
              </div>
              <p className="text-[#515151]/75 text-[12px] font-light italic mb-2">
                Analyse statistique de vos états d'esprit quotidiens au réveil.
              </p>

              {/* Mood breakdown chart */}
              <div className="flex flex-col gap-3 p-4 bg-white/60 border border-white/80 rounded-2xl">
                <span className="text-[11px] font-bold text-[#515151]/70 tracking-wider uppercase">Répartition Émotionnelle</span>
                {[
                  { label: "Serein & Calme", icon: <Leaf className="size-3.5 text-emerald-500 inline-block align-middle" />, count: 42, pct: "50.6%", color: "bg-emerald-400" },
                  { label: "Fatigué mais Motivé", icon: <Zap className="size-3.5 text-amber-500 inline-block align-middle" />, count: 21, pct: "25.3%", color: "bg-[#a9adf9]" },
                  { label: "Stressé ou Submergé", icon: <Flame className="size-3.5 text-rose-500 inline-block align-middle" />, count: 12, pct: "14.5%", color: "bg-rose-400" },
                  { label: "Créatif & Rêveur", icon: <Moon className="size-3.5 text-purple-500 inline-block align-middle" />, count: 8, pct: "9.6%", color: "bg-indigo-400" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between text-[11px] font-medium text-[#515151]">
                      <span className="flex items-center gap-1">
                        {item.label} {item.icon}
                      </span>
                      <span>{item.count} fois ({item.pct})</span>
                    </div>
                    <div className="w-full h-2.5 bg-black/5 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: item.pct }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Live Mood Feedback Indicator */}
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-emerald-700 tracking-wide uppercase">Diagnostic Actuel</span>
                <p className="text-emerald-900 text-[13px] font-medium">
                  Votre humeur est majoritairement stable et orientée vers la croissance sereine.
                </p>
                <p className="text-emerald-800/80 text-[11.5px] font-light leading-relaxed">
                  Votre résilience face au stress s'améliore de 15% grâce aux micro-pauses planifiées.
                </p>
              </div>
            </div>
          </div>
        )}

        {showFavoriteModal && (
          <div className="absolute inset-0 bg-black/25 backdrop-blur-md z-[300] flex items-end justify-center animate-fadeSlide">
            <div className="w-full bg-white/95 border-t border-white/80 rounded-t-[32px] p-6 max-h-[82%] overflow-y-auto flex flex-col gap-4 shadow-2xl animate-fadeSlide pb-[100px]">
              <div className="flex items-center justify-between pb-3 border-b border-[#515151]/10">
                <div className="flex items-center gap-2">
                  <Heart className="size-5 text-rose-500 fill-rose-500/10" />
                  <p className="font-bold text-[#2f3336] text-[18px]">Favoris</p>
                </div>
                <button
                  onClick={() => setShowFavoriteModal(false)}
                  className="size-8 rounded-full bg-[#515151]/10 hover:bg-[#515151]/20 flex items-center justify-center font-bold text-[#515151]/75 text-[14px]"
                >
                  ✕
                </button>
              </div>
              <p className="text-[#515151]/75 text-[12px] font-light italic mb-2">
                Vos intentions phares et rituels préférés enregistrés pour un accès rapide.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  {
                    category: "RITUELS FAVORIS",
                    title: "Méditer sous la pluie douce",
                    icon: <CloudRain className="size-4 text-indigo-400 inline-block align-middle" />,
                    desc: "Session de 10 min de pleine conscience focalisée sur les sons de la nature."
                  },
                  {
                    category: "OBJECTIFS PHARES",
                    title: "Vaincre la procrastination sur le mémoire",
                    icon: null,
                    desc: "Ancrage régulier de 15 minutes sans distraction le matin."
                  },
                  {
                    category: "PHRASE INSPIRANTE",
                    title: "« Le mouvement le plus infime surpasse la plus grande des intentions. »",
                    icon: null,
                    desc: "Rappel quotidien de bienveillance et de passage à l'action doux."
                  }
                ].map((fav, i) => (
                  <div key={i} className="p-4 bg-white/60 border border-white/80 rounded-2xl flex flex-col gap-1.5 shadow-sm">
                    <span className="text-[9px] font-bold text-[#a9adf9] tracking-wider uppercase">{fav.category}</span>
                    <p className="font-semibold text-[#2f3336] text-[13.5px] leading-snug flex items-center gap-1">
                      <span>{fav.title}</span> {fav.icon}
                    </p>
                    <p className="text-[#515151]/70 text-[11.5px] font-light leading-relaxed">{fav.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Expanded Glassmorphic Dream Card Overlay Modal */}
        {expandedDreamId !== null && (() => {
          const dream = dreamTimelineData.find(d => d.id === expandedDreamId);
          if (!dream) return null;
          
          return (
            <div className="absolute inset-0 z-[300] flex items-center justify-center animate-customFadeIn p-4">
              {/* Breathing background spots */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] left-[10%] size-[280px] bg-[#a9adf9]/25 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-[10%] right-[10%] size-[320px] bg-[#c782e3]/20 rounded-full blur-[70px] animate-pulse" style={{ animationDuration: '8s' }} />
              </div>

              {/* Large Glassmorphic Figma Card */}
              <div className="backdrop-blur-[30px] bg-white/75 border border-white/60 relative rounded-[32px] shadow-2xl w-[342px] h-[570px] overflow-hidden flex flex-col animate-springScaleUp z-50">
                {/* Close button - floating top-right */}
                <button
                  onClick={() => setExpandedDreamId(null)}
                  className="absolute top-4 right-4 size-9 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/25 flex items-center justify-center hover:bg-black/60 active:scale-95 transition-all shadow-md cursor-pointer z-[100] animate-fadeIn"
                >
                  <span className="text-[15px] font-bold">✕</span>
                </button>

                {/* Large header image with seamless gradient mask */}
                <div
                  className="w-full h-[220px] relative overflow-hidden shrink-0 group"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                  }}
                >
                  <img
                    src={dream.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                {/* Card details body (glass overlay) */}
                <div className="flex-1 flex flex-col p-6 pt-5 justify-between">
                  {/* Title and Date segment */}
                  <div className="flex justify-between items-start leading-tight">
                    <div className="flex flex-col gap-0.5 max-w-[65%]">
                      <h4 className="text-[#5a62a5] text-[18px] font-bold tracking-tight leading-snug">
                        {dream.id === 2 ? 'Floating' : dream.title}
                      </h4>
                      <p className="text-[#8a92c7] text-[10.5px] font-semibold tracking-wide uppercase mt-0.5">
                        {dream.id === 2 ? 'A gentle, distant kind of peace.' : dream.tags.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <div className="flex gap-0.5 items-baseline text-[16px] font-bold text-[#5e67a5]">
                        <span>Mai</span>
                        <span className="font-light text-[#7480bf]">{dream.dayNum}</span>
                      </div>
                      <p className="text-[#8c94c9] text-[9.5px] font-semibold text-right uppercase tracking-widest">
                        {dream.dayName}
                      </p>
                    </div>
                  </div>

                  {/* Glass Divider */}
                  <div className="w-full h-[1.5px] bg-[#5e67a5]/10 my-4" />

                  {/* Poetic description section (the quote) */}
                  <div className="relative flex-1 flex flex-col justify-center px-2 my-2 min-h-0">
                    <span className="absolute -left-2 -top-4 text-[42px] text-[#a7aedf]/40 font-serif leading-none select-none">“</span>
                    <p className="text-[#2f3336] text-[14px] leading-relaxed font-serif italic text-center px-4 font-semibold overflow-y-auto max-h-[140px] scrollbar-hide">
                      {dream.id === 2 ? 'Warm light, distant voices, and a feeling I couldn’t name.' : dream.content}
                    </p>
                    <span className="absolute -right-2 -bottom-4 text-[42px] text-[#a7aedf]/40 font-serif leading-none select-none rotate-180 -scale-y-100">“</span>
                  </div>

                  {/* Glass Divider */}
                  <div className="w-full h-[1.5px] bg-[#5e67a5]/10 my-4" />

                  {/* Bottom metrics glass pill */}
                  <div className="bg-[#ffffff]/60 border border-[#f0f1fa]/40 shadow-[0_2px_12px_rgba(240,241,250,0.4)] rounded-[16px] px-3.5 py-2.5 flex items-center justify-between shrink-0">
                    {/* Emotions label & indicators */}
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="text-[#5e67a5] text-[7.5px] font-bold tracking-widest mr-1">EMOTIONS</span>
                      {dream.mood.split(' • ').map((tag, idx) => {
                        let tagBg = 'bg-[#eff2fb] text-[#4a569d]';
                        if (tag.includes('serein') || tag.includes('calme')) {
                          tagBg = 'bg-[#9BF2FF]/30 text-[#004b57]';
                        } else if (tag.includes('créatif') || tag.includes('neutre') || tag.includes('apaisé')) {
                          tagBg = 'bg-[#B8BCFF]/30 text-[#1e1b4b]';
                        } else if (tag.includes('fatigué') || tag.includes('stressé')) {
                          tagBg = 'bg-[#FFACDE]/30 text-[#500730]';
                        }
                        return (
                          <span
                            key={idx}
                            className={`${tagBg} px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase whitespace-nowrap`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    {/* Energy status */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[#5e67a5] text-[7.5px] font-bold tracking-widest">ENERGY</span>
                      <svg className="size-3.5 inline text-[#4a569d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
                        <line x1="22" y1="11" x2="22" y2="13" />
                        {dream.energyVal >= 1 && <line x1="6" y1="11" x2="6" y2="13" />}
                        {dream.energyVal >= 2 && <line x1="10" y1="11" x2="10" y2="13" />}
                        {dream.energyVal >= 3 && <line x1="14" y1="11" x2="14" y2="13" />}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
        {view !== 'onboarding' && <BottomNav currentView={view} onViewChange={setView} />}
        </div>
      </div>
    </div>
  );
}
