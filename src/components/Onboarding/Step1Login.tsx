import { useState } from 'react';

const imgFrame1410088349 = "/assets/474ea4402699c037b75e7ad13522403bc268bb0a.png";
const imgSvg2 = "/assets/ce2a2a9368a5aaae147970b2b3dbd4eaabf7c08e.svg";

export default function Step1Login({ onNext, onSignUp }: { onNext: (email: string) => void; onSignUp: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="bg-white relative size-full" data-node-id="348:6384" data-name="登录页">
      <div className="absolute h-[874px] left-0 overflow-clip top-0 w-[402px]" data-node-id="348:6385">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[57.9px] h-[874px] left-1/2 top-1/2 w-[402px]" data-node-id="348:6386">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1410088349} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-[calc(50%+0.5px)] top-[calc(50%+31.52px)] w-[349px]" data-node-id="348:6387">
        {/* Logo */}
        <div className="flex items-center justify-center shrink-0 h-[180px] w-[180px] mb-[10px] relative top-[35px]">
          <svg
            viewBox="0 0 259.756 261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <pattern
                id="login-logo-gradient"
                patternUnits="userSpaceOnUse"
                width="635.364"
                height="1257.545"
                x="-187.723"
                y="-342.703"
              >
                <image
                  href="/assets/018976c2fdbbc8a5fa0b0dc855ce8dd4febf9776.png"
                  width="635.364"
                  height="1257.545"
                  preserveAspectRatio="none"
                />
              </pattern>
            </defs>
            <g>
              <path d="M125.38 0.279661C142.617 -0.83079 167.605 0.791938 178.799 15.8122C184.174 23.0257 184.145 33.9279 180.657 41.9717C177.045 50.5115 170.152 57.2405 161.527 60.6453C154.95 63.2187 137.737 64.6244 141.381 51.3411C142.41 47.5906 151.435 48.3925 155.124 47.0647C159.722 45.4478 163.453 42.0127 165.443 37.5642C168.608 30.6576 167.084 22.2686 159.528 19.3608C147.124 14.5869 130.619 14.8688 117.713 17.2501C111.236 18.4508 104.891 20.2783 98.7669 22.7069C78.5038 30.5418 62.1752 46.0935 53.3624 65.9509C46.0064 82.97 45.1755 104.893 52.1668 122.161C57.3576 134.768 67.3956 146.487 78.8207 153.871C98.4167 166.536 125.204 169.732 147.804 165.299C153.999 164.036 160.063 162.2 165.919 159.816C170.511 157.965 174.443 155.644 178.571 152.934C191.745 144.286 201.46 132.543 207.616 118.036C211.2 109.784 213.391 97.5356 213.314 88.5233C213.218 83.705 212.493 79.1078 211.606 74.3958C211.097 70.2479 208.733 66.0163 208.139 61.9996C207.458 57.4036 209.962 52.8995 214.798 52.5493C222.069 52.0226 224.256 55.7298 226.64 61.5775C231.584 73.7012 232.675 87.0492 231.483 99.9834C229.938 118.908 223.189 135.946 210.918 150.56C194.051 170.646 169.195 181.174 143.42 183.392C121.045 185.45 95.8981 182.88 75.6421 172.845C68.8708 169.451 62.5288 165.261 56.7507 160.363C40.3275 146.848 30.0391 127.288 28.2079 106.097C23.8085 54.8516 58.3943 13.9161 107.368 2.87451C113.572 1.47572 119.034 0.838415 125.38 0.279661Z" fill="url(#login-logo-gradient)" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" strokeLinejoin="round" />
              <path d="M184.595 84.1176C184.978 84.0909 185.361 84.0721 185.745 84.0609C188.23 83.9709 190.53 84.3803 192.295 86.2149C200.733 94.9893 187.184 114.097 181.348 120.398C157.924 145.69 111.358 145.483 86.9793 121.879C83.4694 118.405 80.3959 114.941 78.5621 110.111C75.8312 102.657 83.591 97.665 90.1331 99.9499C92.0171 100.608 95.5608 104.84 97.43 106.382C100.549 108.922 103.938 111.11 107.537 112.906C110.885 114.614 115.543 116.573 119.263 117.384C140.739 122.065 166.217 116.601 176.582 95.2471C179.102 90.055 178.231 86.1064 184.595 84.1176Z" fill="url(#login-logo-gradient)" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" strokeLinejoin="round" />
              <path d="M117.69 56.4245C126.059 55.6897 127.893 62.1236 125.224 68.9323C122.329 76.318 116.791 82.1671 108.948 84.1299C102.149 85.7987 94.9664 84.7328 88.945 81.1614C85.0955 78.6395 82.6582 75.8238 81.46 71.4109C82.1542 68.8669 82.9371 66.0481 85.8247 65.0968C89.9807 63.7276 93.0212 66.4996 96.4386 68.3115C99.0434 69.6924 103.463 70.1653 106.33 69.2201C110.4 67.6942 111.045 64.0626 112.57 60.595C113.554 58.3564 115.428 57.1778 117.69 56.4245Z" fill="url(#login-logo-gradient)" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" strokeLinejoin="round" />
              <path d="M211.566 4.06891C211.668 4.06406 211.768 4.06069 211.868 4.05881C213.481 4.03383 214.806 4.53855 215.6 5.9486C217.473 9.27076 217.66 12.5739 220.462 15.4942C223.029 18.1688 229.036 18.9911 229.681 23.0556C230.125 25.854 224.844 27.2582 223.085 28.3662C221.596 29.2221 220.421 30.3733 219.241 31.6019C216.21 34.7549 217.323 39.1261 212.92 40.9413C208.295 41.1336 208.324 34.913 206.035 31.7907C203.412 28.2116 199.503 27.5608 196.03 25.2694C195.876 24.978 195.28 23.8906 195.201 23.6542C193.709 19.1968 202.066 18.4759 204.531 15.586C207.37 12.2597 207.783 10.109 209.258 6.26544C209.791 4.87759 210.337 4.57628 211.566 4.06891Z" fill="url(#login-logo-gradient)" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" strokeLinejoin="round" />
            </g>
          </svg>
        </div>

        {/* Card */}
        <div className="border border-[rgba(156,156,156,0.5)] border-solid content-stretch drop-shadow-[-42px_103px_15.5px_rgba(145,145,145,0),-27px_66px_14.5px_rgba(145,145,145,0.01),-15px_37px_12px_rgba(145,145,145,0.03),-7px_17px_9px_rgba(145,145,145,0.04),-2px_4px_5px_rgba(145,145,145,0.05)] flex flex-col gap-[32px] items-start p-[26px] relative rounded-[20px] shrink-0 w-full z-10" data-node-id="348:6391" data-name="MainContainer">
          <div aria-hidden="true" className="absolute backdrop-blur-[10px] bg-[rgba(240,240,240,0.3)] inset-0 pointer-events-none rounded-[20px]" />
          <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.25),inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />

          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col font-['Lexend_Deca:Regular',sans-serif] font-normal text-[#4b5563] text-[14px]">
                <p>LUMO Mind Lab</p>
              </div>
              <div onClick={onSignUp} className="font-['Lexend_Deca:Medium',sans-serif] font-medium text-[15.5px] text-black cursor-pointer hover:opacity-70 transition-opacity">
                S'inscrire
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-[24px] w-full relative">
            {/* Heading + Social Logins */}
            <div className="flex items-center justify-between w-full">
              <div className="font-['Lexend_Deca:Regular',sans-serif] text-[#111827] text-[28px]">Se connecter</div>
              <div className="flex items-center gap-[10px]">
                {/* Google */}
                <div className="bg-[#A9ADF9] flex items-center justify-center size-[28px] rounded-full shrink-0 cursor-pointer hover:opacity-80 transition-opacity shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.757,3.951-5.445,3.951c-3.141,0-5.69-2.549-5.69-5.69s2.549-5.69,5.69-5.69 c1.424,0,2.723,0.528,3.727,1.402l2.846-2.846C17.382,3.563,15.118,2.5,12.545,2.5C7.291,2.5,3.037,6.755,3.037,12.008 s4.254,9.508,9.508,9.508c5.485,0,9.123-3.856,9.123-9.282c0-0.627-0.056-1.237-0.163-1.826H12.545z" />
                  </svg>
                </div>
                {/* Apple */}
                <div className="bg-[#A9ADF9] flex items-center justify-center size-[28px] rounded-full shrink-0 cursor-pointer hover:opacity-80 transition-opacity shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M16.636 12.193c0-2.454 1.996-3.628 2.086-3.682-1.144-1.674-2.926-1.902-3.568-1.93-1.517-.152-2.958.892-3.732.892-.774 0-1.944-.863-3.193-.84-1.616.023-3.109.938-3.94 2.387-1.688 2.926-.431 7.255 1.213 9.63.805 1.157 1.751 2.454 3.011 2.406 1.213-.046 1.688-.783 3.149-.783 1.46 0 1.9.783 3.173.76 1.309-.023 2.129-1.18 2.91-2.316.904-1.309 1.275-2.58 1.299-2.65-.023-.008-2.408-.92-2.408-3.874zM13.882 5.093c.665-.805 1.115-1.925.992-3.045-1.002.04-2.164.665-2.853 1.47-.618.713-1.161 1.857-1.014 2.95 1.115.086 2.21-.527 2.875-1.375z" />
                  </svg>
                </div>
                {/* Facebook */}
                <div className="bg-[#A9ADF9] flex items-center justify-center size-[28px] rounded-full shrink-0 cursor-pointer hover:opacity-80 transition-opacity shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Email input */}
            <div className="relative w-full">
              <span className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[#6b7280] text-[15px] pointer-events-none select-none">@</span>
              <input
                type="email"
                placeholder="adresse e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-white w-full pl-[40px] pr-[18px] py-[18px] rounded-full text-[14px] font-['Lexend_Deca:Regular',sans-serif] text-[#111827] placeholder-[#6b7280] outline-none focus:ring-2 focus:ring-[rgba(151,176,255,0.4)] transition-all"
              />
            </div>

            {/* Password input */}
            <div className="relative w-full">
              <span className="absolute left-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="mot de passe"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-white w-full pl-[40px] pr-[80px] py-[18px] rounded-full text-[14px] font-['Lexend_Deca:Regular',sans-serif] text-[#111827] placeholder-[#6b7280] outline-none focus:ring-2 focus:ring-[rgba(151,176,255,0.4)] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPass(v => !v)}
                className="absolute right-[10px] top-1/2 -translate-y-1/2 bg-white drop-shadow-[0px_0.779px_0.779px_rgba(0,0,0,0.05)] px-[15px] py-[6px] rounded-full text-[#374151] text-[11px] font-['Lexend_Deca:Medium',sans-serif] font-medium"
              >
                {showPass ? 'masquer' : 'oublié ?'}
              </button>
            </div>

            {/* Disclaimer + arrow button */}
            <div className="flex items-center justify-between">
              <p className="font-['Lexend_Deca:Regular',sans-serif] text-[#4b5563] text-[7.5px] leading-[1.4] max-w-[180px]">
                LUMO est un compagnon de bien-être mental. Nos analyses ne remplacent pas un avis médical. En cas de besoin, veuillez consulter un <span className="underline">professionnel de santé.</span>
              </p>
              <button
                onClick={() => onNext(email)}
                className="backdrop-blur-[4.5px] border-2 border-solid border-white drop-shadow-[0px_36.858px_6.99px_rgba(151,176,255,0.02),0px_20.335px_6.355px_rgba(151,176,255,0.08),0px_8.897px_4.448px_rgba(151,176,255,0.13),0px_2.542px_2.542px_rgba(151,176,255,0.15)] flex h-[37px] items-center justify-center relative rounded-full shrink-0 w-[55px] hover:opacity-80 active:scale-95 cursor-pointer transition-all"
                style={{ backgroundImage: "linear-gradient(260.664deg, rgba(220, 228, 255, 0.4) 10.175%, rgba(214, 207, 255, 0.4) 60.222%, rgba(220, 228, 255, 0.4) 103.12%)" }}
              >
                <img alt="" className="block size-[15px]" src={imgSvg2} />
              </button>
            </div>
          </div>
        </div>

        {/* LOG IN CTA */}
        <div
          onClick={() => onNext(email)}
          className="backdrop-blur-[4.5px] border-2 border-solid border-white drop-shadow-[0px_36.858px_6.99px_rgba(151,176,255,0.02),0px_20.335px_6.355px_rgba(151,176,255,0.08),0px_8.897px_4.448px_rgba(151,176,255,0.13),0px_2.542px_2.542px_rgba(151,176,255,0.15)] relative rounded-[100px] shrink-0 w-full cursor-pointer transition-all hover:opacity-80 active:scale-95"
          style={{ backgroundImage: "linear-gradient(235.64deg, rgba(220, 228, 255, 0.4) 10.175%, rgba(151, 176, 255, 0.4) 60.222%, rgba(220, 228, 255, 0.4) 103.12%)" }}
        >
          <div className="flex items-center justify-center px-[69px] py-[13px]">
            <p className="font-['Lexend_Deca:Regular',sans-serif] font-normal leading-[21px] text-[#1c2b33] text-[17px] text-center tracking-[-0.35px] whitespace-nowrap">
              SE CONNECTER
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.25),inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
        </div>
      </div>
    </div>
  );
}