import { useState } from 'react';
import Step1Login from './Step1Login';
import Step1SignUp from './Step1SignUp';
import Step2Logo from './Step2Logo';
import Step3Goals from './Step3Goals';
import Step4State from './Step4State';
import Step5Plan from './Step5Plan';

interface UserData {
  email: string;
  goals: string[];
  otherGoal: string;
  pressureAnswer: string;
  timeAnswer: string;
}

interface CompletedData extends UserData {
  milestonePlan: string;
  milestoneDirection: string;
}

export default function OnboardingFlow({ onComplete }: { onComplete: (data: CompletedData) => void }) {
  const [step, setStep] = useState(1);
  const [showSignUp, setShowSignUp] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const [userData, setUserData] = useState<UserData>({
    email: '',
    goals: [],
    otherGoal: '',
    pressureAnswer: '',
    timeAnswer: ''
  });

  const nextStep = () => {
    if (step === 1) {
      // Cross-fade: briefly show both pages during logo→login transition
      setTransitioning(true);
      setTimeout(() => {
        setStep(2);
        setTransitioning(false);
      }, 600);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleLoginOrSignUpNext = (email: string) => {
    setUserData(prev => ({ ...prev, email }));
    nextStep();
  };

  const handleGoalsNext = (goals: string[], otherGoal: string) => {
    setUserData(prev => ({ ...prev, goals, otherGoal }));
    nextStep();
  };

  const handleStateNext = (stateData: { pressureAnswer: string; timeAnswer: string }) => {
    setUserData(prev => ({ ...prev, ...stateData }));
    nextStep();
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      {/* Logo screen — stays mounted until cross-fade completes */}
      {(step === 1 || transitioning) && (
        <div className="absolute inset-0" style={{ zIndex: step === 1 ? 2 : 1 }}>
          <Step2Logo onNext={nextStep} />
        </div>
      )}

      {/* Login screen — fades in underneath during transition */}
      {(step === 2 || transitioning) && !showSignUp && (
        <div
          className="absolute inset-0"
          style={{
            zIndex: step === 2 ? 2 : 1,
            opacity: transitioning && step === 1 ? 0 : 1,
            animation: transitioning && step === 1 ? 'fadeInLogin 0.6s ease-out forwards' : 'none',
          }}
        >
          <style>{`
            @keyframes fadeInLogin {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
          <Step1Login onNext={handleLoginOrSignUpNext} onSignUp={() => setShowSignUp(true)} />
        </div>
      )}

      {/* Sign Up screen */}
      {step === 2 && showSignUp && (
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <Step1SignUp onNext={handleLoginOrSignUpNext} onBack={() => setShowSignUp(false)} />
        </div>
      )}

      {step === 3 && <Step3Goals onNext={handleGoalsNext} />}
      {step === 4 && <Step4State onNext={handleStateNext} />}
      {step === 5 && (
        <Step5Plan
          onComplete={(planData) => onComplete({ ...userData, ...planData })}
          userData={userData}
        />
      )}
    </div>
  );
}