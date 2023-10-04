import Login from "./components/Login/Login";
import {Routes, Route} from 'react-router-dom'
import UserRegistration from "./components/UserRegistration/UserRegistration";
import BusinessRegistration from "./components/BusinessRegistration/BusinessRegistration";
import NGORegistration from "./components/NGORegistration/NGORegistration";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="user-registration" element={<UserRegistration/>}/>
        <Route path="business-registration" element={<BusinessRegistration/>}/>
        <Route path="ngo-registration" element={<NGORegistration/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
