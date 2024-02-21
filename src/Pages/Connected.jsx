import loginBackground from '../images/loginbackground.jpg';
import callRedImage from '../images/call_red.png';
import buttonImage1 from '../images/profile.png'; 
import buttonImage2 from '../images/chat.png';
import buttonImage3 from '../images/setting.png';
import buttonImage4 from '../images/call.png';

function Connected() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBackground})`}}>
      <div className="glass-window" style={{position: "absolute", top: "50%", left: "50%", right:"30%", width: "100%", height: "100%", transform: "translate(-50%, -50%)", backgroundColor: "rgba(255, 255, 255, 0.6)", padding: "20px", borderRadius: "30px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
        <div className="user-section" style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px", marginTop: "50px"}}>
          <div className="user-image" style={{width: "170px", height: "170px", borderRadius: "50%", overflow: "hidden"}}>
            <img src="https://lh3.googleusercontent.com/a/ACg8ocIyTOK0ddMY3aoEXSiGwU75t3O3etBPHZeG1CSsZSHvHKs=s96-c" alt="Login with Google" className="w-40 max-w-xs"/>
          </div>
          <div className="user-name" style={{marginTop: "30px", color: "black", textAlign: "center", fontSize: "30px", fontWeight: "bold"}}>User Name</div>
        </div>
        <button className="call-end-button" style={{position: "absolute", bottom: "60px", left: "50%", width:"20%", maxWidth: "100px", transform: "translateX(-50%)", border: "none", background: "none", padding: 0, cursor: "pointer"}}>
          <img src={callRedImage} alt="Call End Button" style={{width: "100%", height: "auto"}} />
        </button>
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
