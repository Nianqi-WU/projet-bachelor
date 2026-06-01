import { useState, useEffect } from 'react';

const img = "/assets/474ea4402699c037b75e7ad13522403bc268bb0a.png";
const imgAiAvatar = "/assets/45902f20431b8ac6ff42059e51fb53ab24112302.png"; // avatar placeholder

interface Step4Props {
  onNext: (data: { pressureAnswer: string; timeAnswer: string }) => void;
}

export default function Step4State({ onNext }: Step4Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [pressureAnswer, setPressureAnswer] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Simulating AI typing animation
  const [displayedText, setDisplayedText] = useState('');
  const questions = [
    "Pour mieux organiser votre plan, comment évaluez-vous votre niveau de stress actuel face à cet objectif ?",
    " Concrètement, combien de temps pensez-vous pouvoir y accorder chaque jour ?"
  ];

  const pressureOptions = [
    { label: "Très serein(e)" },
    { label: "Un peu stressé(e)" },
    { label: "Grosse pression" }
  ];

  const timeOptions = [
    { label: "Moins de 15 min" },
    { label: "15-30 min" },
    { label: "Plus de 30 min" }
  ];

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      const currentQuestion = questions[stepIndex];
      if (index < currentQuestion.length) {
        setDisplayedText((prev) => prev + currentQuestion.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [stepIndex]);

  const handleOptionClick = (option: string) => {
    setInputValue(option);
  };

  const handleNext = () => {
    if (stepIndex === 0) {
      setPressureAnswer(inputValue || "Plutôt modéré");
      setInputValue('');
      setStepIndex(1);
    } else {
      const finalTime = inputValue || "15-30 min";
      onNext({
        pressureAnswer: pressureAnswer,
        timeAnswer: finalTime
      });
    }
  };

  const isNextDisabled = !inputValue.trim();

  return (
    <div className="relative size-full animate-fadeSlide">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50%-0.5px)] top-[calc(50%-0.01px)] w-[359px]">
        
        {/* Main Card */}
        <div className="border border-[rgba(156,156,156,0.5)] border-solid h-[622px] relative rounded-[32px] shadow-[-42px_103px_31px_0px_rgba(145,145,145,0)] shrink-0 w-full overflow-hidden">
          <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-white/20 inset-0 pointer-events-none rounded-[32px]" />
          <div className="absolute inset-0 pointer-events-none rounded-[32px] shadow-[inset_0px_-5px_4px_rgba(255,255,255,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)]" />

          {/* Interactive Chat Content */}
          <div className="absolute inset-0 flex flex-col justify-between py-[32px] px-[24px]">
            
            {/* Top Indicator */}
            <div className="flex items-center justify-between w-full mb-2">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#a9adf9]/80 animate-pulse" />
                <span className="font-semibold text-[#4a569d]/90 text-[11px] tracking-[1.5px] uppercase font-['Lexend_Deca',sans-serif]">Analyse LUMO</span>
              </div>
              <span className="text-[#515151]/75 text-[12px] font-medium font-['Lexend_Deca',sans-serif]">Étape {stepIndex + 1} sur 2</span>
            </div>

            {/* Conversation Flow Area */}
            <div className="flex-1 flex flex-col justify-start gap-6 mt-4 overflow-y-auto pr-1">
              
              {/* AI Message Bubble */}
              <div className="flex items-start gap-3">
                <img
                  src={imgAiAvatar}
                  alt="AI"
                  className="size-[34px] rounded-full object-cover border border-white/40 shadow-sm bg-orange-100/80"
                />
                <div className="flex-1 bg-white/40 backdrop-blur-md border border-white/50 rounded-[20px] rounded-tl-[4px] p-4 shadow-sm">
                  <p className="font-light text-[#1c2b33] text-[14.5px] leading-relaxed font-['Lexend_Deca',sans-serif] min-h-[36px] flex items-center flex-wrap">
                    <span>{displayedText}</span>
                  </p>
                </div>
              </div>

              {/* User Previous Response (if Step 2) */}
              {stepIndex === 1 && (
                <div className="flex items-end justify-end gap-3 animate-fadeSlide self-end max-w-[80%]">
                  <div className="bg-[#a9adf9]/20 backdrop-blur-md border border-[#a9adf9]/40 rounded-[20px] rounded-tr-[4px] p-4 shadow-sm text-right flex items-center justify-end">
                    <p className="font-normal text-[#313578] text-[14px] font-['Lexend_Deca',sans-serif] align-middle">
                      {pressureAnswer}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* User Input & Choice Area */}
            <div className="flex flex-col gap-4 mt-4 w-full">
              {/* Quick Tags Options */}
              <div className="flex flex-wrap gap-2 w-full justify-start">
                {(stepIndex === 0 ? pressureOptions : timeOptions).map((option) => {
                  const isSelected = inputValue === option.label;
                  return (
                    <button
                      key={option.label}
                      onClick={() => handleOptionClick(option.label)}
                      className={`px-5 py-2.5 rounded-full text-[12px] font-medium font-['Lexend_Deca',sans-serif] border transition-all active:scale-95 shadow-sm ${
                        isSelected
                          ? 'bg-white border-[#a9adf9] text-[#4a569d] font-bold shadow-[0_0_12px_rgba(169,173,249,0.25)]'
                          : 'bg-white/30 hover:bg-white/50 border-white/40 text-[#2f3336]/80'
                      }`}
                    >
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Real Typeable Textarea */}
              <div className="w-full relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Écrivez votre réponse ici..."
                  rows={2}
                  className="w-full bg-white/40 backdrop-blur-md border border-white/60 rounded-[20px] px-[20px] py-[14px] text-[14px] font-['Lexend_Deca',sans-serif] text-[#1c2b33] placeholder-[#1c2b33]/35 resize-none outline-none focus:bg-white/60 focus:border-[#a9adf9]/60 focus:ring-2 focus:ring-[#a9adf9]/25 transition-all shadow-[inset_0px_-3px_4px_rgba(255,255,255,0.2),inset_0px_3px_4px_rgba(255,255,255,0.2)]"
                />
              </div>
            </div>

          </div>
        </div>

        {/* CTA Next Button */}
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`backdrop-blur-[4.5px] border-2 border-solid border-white flex items-center justify-center py-[14px] rounded-[100px] w-full transition-all duration-300 shadow-md ${
            isNextDisabled
              ? 'opacity-55 cursor-not-allowed bg-white/10'
              : 'hover:scale-[0.98] active:scale-[0.95] cursor-pointer bg-gradient-to-r from-white/60 via-[#a9adf9]/45 to-white/60'
          }`}
        >
          <p className={`font-['Lexend_Deca',sans-serif] font-semibold text-[17px] text-center tracking-wide flex items-center justify-center gap-1.5 ${isNextDisabled ? 'text-[#1c2b33]/40' : 'text-[#1c2b33]'}`}>
            {stepIndex === 0 ? "Continuer" : "Analyser mon projet"}
          </p>
        </button>

      </div>
    </div>
  );
}