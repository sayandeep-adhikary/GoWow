import Login from "./components/Login/Login";
import {Routes, Route} from 'react-router-dom'
import UserRegistration from "./components/UserRegistration/UserRegistration";
import BusinessRegistration from "./components/BusinessRegistration/BusinessRegistration";
import NGORegistration from "./components/NGORegistration/NGORegistration";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Ngo from "./components/NGO/Ngo";
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="user-registration" element={<UserRegistration/>}/>
        <Route exact path="business-registration" element={<BusinessRegistration/>}/>
        <Route exact path="ngo-registration" element={<NGORegistration/>}/>
        <Route exact path="home" element={<Home/>}/>
        <Route exact path="aboutus" element={<About/>}/>
        <Route exact path="ngo" element={<Ngo/>}/>
        <Route exact path="opportunitydetail" element={<OpportunityDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
