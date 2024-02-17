import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";




function App() {
  return (
    <>
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/profile" exact element={<Profile />} />
    </Routes>

    </>
  );
}

export default App;
