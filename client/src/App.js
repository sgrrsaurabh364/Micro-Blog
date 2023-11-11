
import Homepage from "./components/pages/home/Homepage";
import Login from "./components/pages/login/Login";
import Write from "./components/pages/write/Write";
import Register from "./components/pages/register/Register";
import TopBr from "./components/topbar/TopBr";
import Settings from "./components/pages/settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Single from "./components/pages/single/Single";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const {user} = useContext(Context);
   return (
      <Router>
      <TopBr />
      <Routes>
             <Route path="/" exact element={<Homepage></Homepage> }></Route> 
          <Route path="/register" element={user ? <Homepage/> : <Register />} ></Route>
          <Route path="/login" element={user ? <Homepage/> : <Login />} ></Route>
          <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
          <Route path="/settings" element={user ? <Settings /> : <Register/>} ></Route> 
          <Route path="/post/:postId" element={<Single />} ></Route> 
      </Routes>
    </Router>
   
  );
}

export default App;
