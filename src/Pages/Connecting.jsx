import loginBackground from '../images/loginbackground.jpg';
import callRedImage from '../images/call_red.png';

function Connected() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBackground})`}}>
      <div className="glass-window" style={{position: "absolute", top: "50%", left: "50%", right:"30%", width: "100%", height: "100%", transform: "translate(-50%, -50%)", backgroundColor: "rgba(255, 255, 255, 0.6)", padding: "20px", borderRadius: "30px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
        <div className="user-section" style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px", marginTop: "50px"}}>
          <div className="user-image" style={{position: "relative", width: "170px", marginTop:"50%", height: "170px", borderRadius: "50%", overflow: "hidden"}}>
            <img src="https://lh3.googleusercontent.com/a/ACg8ocIyTOK0ddMY3aoEXSiGwU75t3O3etBPHZeG1CSsZSHvHKs=s96-c" alt="Login with Google" className="w-40 max-w-xs"/>
            <section>
              <div className="pulse">
                <span style={{'--i': 0}}></span>
                <span style={{'--i': 1}}></span>
                <span style={{'--i': 2}}></span>
                <span style={{'--i': 3}}></span>
              </div>
            </section>
          </div>
          <div className="searching" style={{marginTop: "30px", color: "black", textAlign: "center", fontSize: "30px", fontWeight: "bold"}}>Searching...</div>
        </div>
      </div>
    </div>
  );
}

export default Connected;
