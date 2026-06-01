import { useMemo } from "react";
import { Hourglass, Leaf, Target, Smile, Sparkles } from "lucide-react";

const imgAi = "/assets/474ea4402699c037b75e7ad13522403bc268bb0a.png";
const imgAiAvatar = "/assets/45902f20431b8ac6ff42059e51fb53ab24112302.png";

interface UserData {
  email: string;
  goals: string[];
  otherGoal: string;
  pressureAnswer: string;
  timeAnswer: string;
}

const goalTranslations: Record<string, { label: string; icon: any; color: string }> = {
  procrastination: { label: 'Vaincre la procrastination', icon: Hourglass, color: 'text-[#e28743]' },
  habits: { label: 'Bâtir des rituels durables', icon: Leaf, color: 'text-[#40c057]' },
  focus: { label: 'Retrouver une concentration calme', icon: Target, color: 'text-[#4a569d]' },
  wellbeing: { label: 'Préserver mon bien-être', icon: Smile, color: 'text-[#ffd43b]' },
};

export default function Step5Plan({
  onComplete,
  userData
}: {
  onComplete: (planData: { milestonePlan: string; milestoneDirection: string }) => void;
  userData: UserData;
}) {
  const firstName = useMemo(() => {
    const parts = userData.email.split('@');
    if (!parts[0]) return 'Ami';
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  }, [userData.email]);

  // Translate/Derive the primary goal
  const primaryGoal = useMemo(() => {
    if (userData.goals.includes('other') && userData.otherGoal.trim()) {
      return { label: userData.otherGoal.trim(), icon: Target, color: 'text-[#4a569d]' };
    }
    const firstPreset = userData.goals.find(g => g !== 'other');
    return firstPreset ? goalTranslations[firstPreset] : { label: "Avancer avec alignement", icon: Sparkles, color: 'text-[#4a569d]' };
  }, [userData.goals, userData.otherGoal]);

  // Formulate Milestone Plan
  const planData = useMemo(() => {
    let milestonePlan = "Étape 1 : Diagnostic & Clarté globale";
    let milestoneDirection = "Prendre du recul, observer vos déclencheurs sans jugement.";

    // Logic to tailor phase and direction based on goals, pressure, and time
    const goalFocus = userData.goals.find(g => g !== 'other') || 'default';
    const isStressed = userData.pressureAnswer.includes('Grosse') || userData.pressureAnswer.includes('stressé');
    const isShortTime = userData.timeAnswer.includes('15-30') || userData.timeAnswer.includes('Moins de 15');

    if (goalFocus === 'procrastination') {
      milestonePlan = "Étape 1 : Ancrage & Micro-actions (1-2 semaines)";
      milestoneDirection = isStressed
        ? "Viser des blocs très courts (10 min) pour désamorcer l'anxiété du début."
        : "Instaurer la règle des 2 minutes sur une tâche prioritaire par jour.";
    } else if (goalFocus === 'focus') {
      milestonePlan = "Étape 1 : Sanctuarisation de l'attention (10 jours)";
      milestoneDirection = isShortTime
        ? "Un seul onglet ouvert pendant 20 minutes d'immersion totale."
        : "Protéger une session de 45 minutes de travail profond le matin.";
    } else if (goalFocus === 'wellbeing') {
      milestonePlan = "Étape 1 : Régulation du rythme corporel (2 semaines)";
      milestoneDirection = "Alterner travail et micro-étirements, en écoutant l'énergie matinale.";
    } else if (goalFocus === 'habits') {
      milestonePlan = "Étape 1 : Rituels durables & Micro-habitudes";
      milestoneDirection = "Associer une nouvelle habitude de 1 min à une routine déjà ancrée.";
    } else {
      // Custom goals
      milestonePlan = "Étape 1 : Définition des jalons & Pratique douce";
      milestoneDirection = isStressed 
        ? "Avancer par micro-pas de 15 min, en évitant toute surcharge mentale."
        : `Consacrer un moment d'ancrage quotidien de ${userData.timeAnswer || '30 min'} à votre intention.`;
    }

    return { milestonePlan, milestoneDirection };
  }, [userData.goals, userData.pressureAnswer, userData.timeAnswer]);

  return (
    <div className="relative size-full animate-fadeSlide">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAi} />
      
      <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[21px] top-[80px] w-[359px]">

        {/* Plan Card */}
        <div className="backdrop-blur-[20px] bg-white/20 border border-white/50 relative rounded-[32px] shadow-[-42px_103px_31px_0px_rgba(145,145,145,0)] shrink-0 w-full h-[619px] overflow-hidden">
          <div className="size-full overflow-y-auto flex flex-col justify-between pt-[32px] pb-[36px] px-[24px]">
            
            {/* Header */}
            <div className="flex flex-col gap-[8px] w-full">
              <div className="flex items-center gap-2">
                <img
                  src={imgAiAvatar}
                  alt="AI Avatar"
                  className="size-[30px] rounded-full object-cover border border-[#4a569d]/20"
                />
                <span className="font-semibold text-[#4a569d]/90 text-[12px] tracking-[1.5px] uppercase font-['Lexend_Deca',sans-serif]">
                  PLAN D'ORIENTATION
                </span>
              </div>
              <div className="flex flex-col font-['Lexend_Deca',sans-serif] font-bold text-[#1a1c18] text-[27px] mt-2">
                <p className="leading-tight">Félicitations, {firstName}</p>
              </div>
              <p className="font-light text-[#74796d] text-[13px] leading-relaxed font-['Lexend_Deca',sans-serif]">
                Votre intention a été analysée avec succès. LUMO a généré une stratégie adaptative à long terme.
              </p>
            </div>

            {/* Core Blueprint Panels */}
            <div className="flex-1 flex flex-col gap-[16px] my-6 justify-center">
              
              {/* Panel 1: Main Goal */}
              <div className="backdrop-blur-md bg-white/40 border border-white/50 p-[20px] rounded-[24px] shadow-sm flex flex-col gap-1.5">
                <p className="text-[10px] font-semibold text-[#54599e] uppercase tracking-[1.5px] font-['Lexend_Deca',sans-serif]">Objectif Principal</p>
                <div className="flex items-center">
                  <p className="text-[17px] font-semibold text-[#1c2b33] font-['Lexend_Deca',sans-serif] leading-snug">
                    {primaryGoal.label}
                  </p>
                </div>
              </div>

              {/* Panel 2: Milestone Phase */}
              <div className="backdrop-blur-md bg-white/40 border border-white/50 p-[20px] rounded-[24px] shadow-sm flex flex-col gap-1.5">
                <p className="text-[10px] font-semibold text-[#54599e] uppercase tracking-[1.5px] font-['Lexend_Deca',sans-serif]">Jalon Actuel (Phase 1)</p>
                <p className="text-[15.5px] font-medium text-[#2f3336] font-['Lexend_Deca',sans-serif] leading-snug">
                  {planData.milestonePlan}
                </p>
              </div>

              {/* Panel 3: Strategic Direction */}
              <div className="backdrop-blur-md bg-white/40 border border-white/50 p-[20px] rounded-[24px] shadow-sm flex flex-col gap-1.5">
                <p className="text-[10px] font-semibold text-[#54599e] uppercase tracking-[1.5px] font-['Lexend_Deca',sans-serif]">Direction Actionnable</p>
                <p className="text-[13px] font-light text-[#5c5f63] font-['Lexend_Deca',sans-serif] leading-relaxed">
                  {planData.milestoneDirection}
                </p>
              </div>

            </div>

            {/* Micro Details Footer */}
            <div className="w-full flex items-center justify-between border-t border-white/30 pt-3 text-[11px] font-light text-[#74796d]/80 font-['Lexend_Deca',sans-serif]">
              <span>Contraintes : {userData.timeAnswer}</span>
              <span>Stress : {userData.pressureAnswer}</span>
            </div>

          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onComplete(planData)}
          className="backdrop-blur-[4.5px] border-2 border-solid border-white bg-gradient-to-r from-white/60 via-[#a9adf9]/45 to-white/60 flex items-center justify-center py-[14px] rounded-[100px] w-full transition-all hover:scale-[0.98] active:scale-[0.95] cursor-pointer shadow-md"
        >
          <p className="font-['Lexend_Deca',sans-serif] font-semibold text-[17px] text-[#1c2b33] tracking-wide text-center">
            C'est parti !
          </p>
        </button>

      </div>
    </div>
  );
}