import React, { useState } from 'react';
import loginBackground from '../images/loginbackground.jpg';
import mic from '../images/mic.png';
import buttonImage1 from '../images/profile.png'; 
import buttonImage2 from '../images/chat.png';
import buttonImage3 from '../images/setting.png';
import buttonImage4 from '../images/call.png';

function Connected() {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBackground})`}}>
      <div className="glass-window" style={{position: "absolute", top: "50%", left: "50%", right:"30%", width: "100%", height: "100%", transform: "translate(-50%, -50%)", backgroundColor: "rgba(255, 255, 255, 0.6)", padding: "20px", borderRadius: "30px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
        <div className="absolute top-0 left-0 w-full text-center">
          <p className="text-black font-bold text-4xl mt-10">Find Someone Online</p>
        </div>
        <div className="pulse absolute inset-0 flex items-center justify-center">
          {/* Pulse Animation */}
          {isAnimating && (
            <>
              <span className="block w-70 h-70 bg-blue-500 rounded-full opacity-80 animate-pulse" style={{ zIndex: 1, position: 'absolute' }}></span>
              <span className="block w-60 h-60 bg-blue-500 rounded-full opacity-80 animate-pulse" style={{ zIndex: 1, position: 'absolute' }}></span>
              <span className="block w-50 h-50 bg-blue-500 rounded-full opacity-80 animate-pulse" style={{ zIndex: 1, position: 'absolute' }}></span>
              <span className="block w-40 h-40 bg-blue-500 rounded-full opacity-80 animate-pulse" style={{ zIndex: 1, position: 'absolute' }}></span>
              <span className="block w-30 h-30 bg-blue-500 rounded-full opacity-80 animate-pulse" style={{ zIndex: 1, position: 'absolute' }}></span>
              <span className="block w-20 h-20 bg-blue-500 rounded-full opacity-80 animate-pulse" style={{ zIndex: 1, position: 'absolute' }}></span>
              <span className="block w-10 h-10 bg-blue-500 rounded-full opacity-80 animate-pulse" style={{ zIndex: 1, position: 'absolute' }}></span>
            </>
          )}
          
          {/* Mic Button */}
          <img src={mic} alt="Mic Button" className="w-40 h-40 absolute inset-0 m-auto z-10 cursor-pointer" onClick={toggleAnimation} />
        </div>
        <div className="absolute bottom-20 left-0 w-full text-center">
          <p className="text-black font-bold text-4xl mb-12">Search</p>
        </div>
      </div>
      <div className="flex justify-around w-full py-2 absolute bottom-0">
        <button>
          <img src={buttonImage1} alt="Profile" className="w-10 h-10" />
        </button>
        <button>
          <img src={buttonImage4} alt="Chat" className="w-10 h-10" />
        </button>
        <button>
          <img src={buttonImage2} alt="Call" className="w-10 h-10" />
        </button>
        <button>
          <img src={buttonImage3} alt="Setting" className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
}

export default Connected;
