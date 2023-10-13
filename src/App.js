import Login from "./components/Login/Login";
import {Routes, Route} from 'react-router-dom'
import UserRegistration from "./components/UserRegistration/UserRegistration";
import BusinessRegistration from "./components/BusinessRegistration/BusinessRegistration";
import NGORegistration from "./components/NGORegistration/NGORegistration";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Ngo from "./components/NGO/Ngo";
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails";
import MyOpportunites from "./components/MyOpportunites/MyOpportunites";
import Getwow from "./components/Getwow/Getwow";
import Bewow from "./components/Bewow/Bewow";
import Notifications from "./components/Notifications/Notifications";
import { useState } from "react";
import AddOpportunity from "./components/AddOpportunity/AddOpportunity";
import LifeSaving from "./components/LifeSaving/LifeSaving";
import Volunteers from "./components/Volunteers/Volunteers";
import Material from "./components/Material/Material";

function App() {
  const [isUser, setIsUser] = useState(true)
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login setIsUser={setIsUser}/>}/>
        <Route exact path="user-registration" element={<UserRegistration/>}/>
        <Route exact path="business-registration" element={<BusinessRegistration/>}/>
        <Route exact path="ngo-registration" element={<NGORegistration/>}/>
        <Route exact path="home" element={<Home isUser={isUser}/>}/>
        <Route exact path="aboutus" element={<About/>}/>
        <Route exact path="ngo" element={<Ngo/>}/>
        <Route exact path="opportunitydetail" element={<OpportunityDetails/>}/>
        <Route exact path="myopportunites" element={<MyOpportunites isUser={isUser}/>}/>
        <Route exact path="getwow" element={<Getwow/>}/>
        <Route exact path="bewow" element={<Bewow/>}/>
        <Route exact path="notifications" element={<Notifications/>}/>
        <Route exact path="addopportunity" element={<AddOpportunity/>}/>
        <Route exact path="lifesaving" element={<LifeSaving/>}/>
        <Route exact path="volunteers" element={<Volunteers/>}/>
        <Route exact path="material" element={<Material/>}/>
      </Routes>
    </div>
  );
}

export default App;
