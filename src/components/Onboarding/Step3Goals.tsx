import { useState } from 'react';

const img = "/assets/474ea4402699c037b75e7ad13522403bc268bb0a.png";
const imgSvg = "/assets/d0459fb67e9263f71ccc8204f839559da0aa02f4.svg";
const imgSvg1 = "/assets/d93d1c551e894c3a36003691e2b5853cc142fdcb.svg";
const imgSvg2 = "/assets/5250726779836beb4ba7b3988587a7cd8c98ba1d.svg";
const imgSvg4 = "/assets/b94c4c8e7901f9ee7030bcdec3cd865ba28b7f7d.svg";
const imgSvg6 = "/assets/74669b082c431aee5407f5778b4ff605a792ed53.svg";
const imgSvg7 = "/assets/f503eea6fe96fe6798fb89e09a22ddb67f047b8e.svg";

const GOALS = [
  { id: 'procrastination', label: 'Moins procrastiner', icon: imgSvg, iconBg: 'bg-[#f2f4e8]' },
  { id: 'habits', label: 'De bonnes habitudes', icon: imgSvg2, iconBg: 'bg-[#eef2fb]' },
  { id: 'focus', label: 'Mieux se concentrer', icon: imgSvg4, iconBg: 'bg-[#f4effb]' },
  { id: 'wellbeing', label: 'Mon bien-être', icon: imgSvg6, iconBg: 'bg-[#fff9eb]' },
  { id: 'other', label: 'Autre', icon: imgSvg7, iconBg: 'bg-[#f3f4f6]' }
];

export default function Step3Goals({ onNext }: { onNext: (goals: string[], otherText: string) => void }) {
  const [selectedGoals, setSelectedGoals] = useState<Set<string>>(new Set());
  const [otherText, setOtherText] = useState('');

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) { newSet.delete(id); } else { newSet.add(id); }
      return newSet;
    });
  };

  return (
    <div className="relative size-full" data-node-id="348:6435" data-name="初始引导">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[29px] items-start left-[calc(50%-0.5px)] top-[calc(50%-0.01px)] w-[359px]" data-node-id="348:6436">

        {/* Card */}
        <div className="border border-[rgba(156,156,156,0.5)] border-solid h-[622px] relative rounded-[20px] shadow-[-42px_103px_31px_0px_rgba(145,145,145,0),-27px_66px_29px_0px_rgba(145,145,145,0.01),-15px_37px_24px_0px_rgba(145,145,145,0.03),-7px_17px_18px_0px_rgba(145,145,145,0.04),-2px_4px_10px_0px_rgba(145,145,145,0.05)] shrink-0 w-full overflow-hidden" data-node-id="348:6437">
          <div aria-hidden="true" className="absolute backdrop-blur-[10px] bg-[rgba(240,240,240,0.3)] inset-0 pointer-events-none rounded-[20px]" />
          <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.25),inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />

          {/* Scrollable content */}
          <div className="absolute inset-0 overflow-y-auto overflow-x-hidden rounded-[20px] flex flex-col py-[31px] px-[22px]" data-node-id="348:6438">
            {/* Header */}
            <div className="flex flex-col gap-[10.597px] items-start mb-[18px] shrink-0">
              <div className="flex flex-col items-start pb-[0.723px] relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend_Deca:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c18] text-[28.9px] w-full whitespace-pre-wrap">
                  <p className="leading-[36.125px] mb-0">{`Quels sont vos `}</p>
                  <p>
                    <span className="leading-[36.125px]">{`objectifs `}</span>
                    <span className="font-['Lexend_Deca:Bold',sans-serif] font-bold leading-[36.125px] text-[#54599e]">{`principaux `}</span>
                    <span className="leading-[36.125px]">?</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend_Deca:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#74796d] text-[14.45px] w-full">
                  <p className="leading-[21.675px]">Choisissez ce qui compte le plus pour vous.</p>
                </div>
              </div>
            </div>

            {/* Goal list */}
            <div className="flex flex-col gap-[11.56px] items-start w-full">
              {GOALS.map((goal) => {
                const isSelected = selectedGoals.has(goal.id);
                const isOther = goal.id === 'other';
                return (
                  <div key={goal.id} className="flex flex-col w-full gap-[8px]">
                    <div
                       onClick={() => toggleGoal(goal.id)}
                      className={`bg-white border-[1.5px] border-solid content-stretch drop-shadow-[0px_0.963px_0.963px_rgba(0,0,0,0.05)] flex items-center p-[16.376px] relative rounded-[15.413px] shrink-0 w-full cursor-pointer transition-all ${isSelected ? 'border-[#b8bcff]' : 'border-transparent'}`}
                    >
                      <div className="h-[46.24px] relative shrink-0 w-[61.654px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[15.413px] relative size-full">
                          <div className={`${goal.iconBg} content-stretch flex items-center justify-center relative rounded-[11.56px] shrink-0 size-[46.24px]`}>
                            <div className="relative shrink-0 size-[23.12px]">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={goal.icon} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] h-[21.675px] min-w-px relative">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col font-['Lexend_Deca:Bold',sans-serif] font-bold justify-center leading-[0] text-[#1a1c18] text-[14.45px]">
                            <p className="leading-[21.675px] whitespace-nowrap">{goal.label}</p>
                          </div>
                        </div>
                      </div>
                      {isSelected ? (
                        <div className="bg-[#b8bcff] relative rounded-[9632.412px] shrink-0 size-[19.267px] flex items-center justify-center">
                          <div className="relative shrink-0 size-[13.487px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg1} />
                          </div>
                        </div>
                      ) : (
                        <div className="border-[#e5e7eb] border-[1.927px] border-solid relative rounded-[9632.412px] shrink-0 size-[19.267px]" />
                      )}
                    </div>

                    {/* Custom text input for Other */}
                    {isOther && isSelected && (
                      <div className="w-full px-[4px]">
                        <textarea
                          autoFocus
                          value={otherText}
                          onChange={e => setOtherText(e.target.value)}
                          placeholder="Décrivez votre objectif…"
                          rows={2}
                          className="w-full bg-white border-[1.5px] border-[#b8bcff] border-solid rounded-[15px] px-[16px] py-[12px] text-[13.5px] font-['Lexend_Deca:Regular',sans-serif] text-[#1a1c18] placeholder-[#9ca3af] resize-none outline-none focus:ring-2 focus:ring-[rgba(184,188,255,0.4)] transition-all shadow-[0px_0.963px_0.963px_rgba(0,0,0,0.05)]"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="backdrop-blur-[4.5px] border-2 border-solid border-white content-stretch drop-shadow-[0px_36.858px_6.99px_rgba(151,176,255,0.02),0px_20.335px_6.355px_rgba(151,176,255,0.08),0px_8.897px_4.448px_rgba(151,176,255,0.13),0px_2.542px_2.542px_rgba(151,176,255,0.15)] flex items-center justify-center px-[69.36px] py-[13.487px] relative rounded-[100px] shrink-0 w-full cursor-pointer transition-all hover:scale-95 active:scale-90"
          style={{ backgroundImage: "linear-gradient(230.429deg, rgba(220, 228, 255, 0.6) 10.175%, rgba(151, 176, 255, 0.6) 60.222%, rgba(220, 228, 255, 0.6) 103.12%)" }}
          onClick={() => onNext(Array.from(selectedGoals), otherText)}
        >
          <p className="font-['Lexend_Deca:Regular',sans-serif] font-normal leading-[21.212px] overflow-hidden relative shrink-0 text-[#1c2b33] text-[17.355px] text-center text-ellipsis tracking-[-0.3471px] whitespace-nowrap">
            Suivant
          </p>
        </div>

      </div>
    </div>
  );
}