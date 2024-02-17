import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Form from "./Pages/Form"



function App() {
  return (
    <>
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/form" eaxct element={<Form/>} />
    </Routes>

    </>
  );
}

export default App;
