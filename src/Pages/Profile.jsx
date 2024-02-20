import { useHistory } from 'react-router-dom'; 
import loginBackground from '../images/loginbackground.jpg';
import buttonImage1 from '../images/profile_icon.png'; 
import buttonImage2 from '../images/chat_icon.jpg';
import buttonImage3 from '../images/setting_icon.png';
import buttonImage4 from '../images/call_icon.png';

function Profile() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBackground})`}}>
      <div className="flex items-center justify-center bg-gray-900 bg-opacity-70 rounded-xl shadow-lg w-80 h-80vw">
        <div className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg flex flex-col items-center text-left w-full">
          <div className="mb-6">
            <div className="rounded-full overflow-hidden border-2 border-white">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocIyTOK0ddMY3aoEXSiGwU75t3O3etBPHZeG1CSsZSHvHKs=s96-c" alt="Profile Picture" className="w-24 h-24"/>
            </div>
          </div>
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold">User</h1>
            <h3 className="text-lg">VIT Bhopal University</h3>
          </div>
          <div className="text-white mt-6 text-left max-w-sm">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Bio</h3>
              <p className="text-sm text-justify font-comforter">My love for gaming started when I was a kid, and I've been hooked ever since. If you're passionate about gaming, let's play together and see where this adventure takes us!</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Interests</h3>
              <ul className="flex flex-wrap">
                <li className="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Gaming</li>
                <li className="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Music</li>
                <li className="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Coding</li>
                <li className="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Reading</li>
                <li className="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Travelling</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-around w-80 py-4 bg-gray-100 relative bottom-0 top-10">
            <button>
                <img src={buttonImage1} alt="Profile" className="w-12 h-12" />
            </button>
            <button>
                <img src={buttonImage4} alt="Chat" className="w-12 h-12" />
            </button>
            <button>
                <img src={buttonImage2} alt="CaLL" className="w-12 h-12" />
            </button>
            <button>
                <img src={buttonImage3} alt="Setting" className="w-12 h-12" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile
