import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Form from "./Pages/Form"
import Connected from "./Pages/Connected";
import Connecting from "./Pages/Connecting";
import ChatRoom from "./Pages/Chatroom";
import Chatlist from "./Pages/Chatlist";


function App() {
  return (
    <>
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/form" eaxct element={<Form/>} />
      <Route path="/connected" eaxct element={<Connected/>} />
      <Route path="/connecting" eaxct element={<Connecting/>} />
      <Route path="/chatroom" eaxct element={<ChatRoom/>} />
      <Route path="/chatlist" eaxct element={<Chatlist/>} />
    </Routes>

    </>
  );
}

export default App;
