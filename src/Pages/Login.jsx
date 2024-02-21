

import loginBackground from '../images/loginbackground.jpg';
import buttonImage1 from '../images/profile.png'; 
import buttonImage2 from '../images/chat.png';
import buttonImage3 from '../images/setting.png';
import buttonImage4 from '../images/call.png';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBackground})`}}>
      <div className="flex items-center justify-center bg-gray-900 bg-opacity-70 rounded-xl shadow-lg w-80 h-80vw">
        <div className="p-8 flex flex-col items-center">
          <h2 className="text-5xl text-white font-semibold text-center mt-8">Login</h2>
          <h3 className="text-3xl text-white text-center mt-10 mb-6">Lovin The Vibe</h3>
          <a href="https://accounts.google.com/">
            <div className="flex items-center justify-center mb-8">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Login with Google" className="w-40 max-w-xs"/>
            </div>
            <p className="text-xl text-white text-center">Continue with Google</p>
          </a>
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

export default Login;
