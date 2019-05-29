import React from "react";
import { NavLink} from "react-router-dom";
import "./style.css";
// import categories from "./categories.json";

function ChallengesNav() {
  return (
    <div className="row nav-bar">
    {/* <div className="col-3 left-nav"></div> */}
    <div className="col-12 right-nav">
    <nav className="navbar navbar-dark bg-dark challenge-nav">
 
 <ul className="nav-list">
   <li className="nav-item active">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/browse/"><i class="far fa-window-restore"></i> Browse Workouts <span className="sr-only">(current)</span></NavLink>
   </li>
   <li className="nav-item">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/ongoing"><i class="fas fa-tasks"></i> Ongoing Workouts</NavLink>
   </li>
   <li className="nav-item">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/done"><i class="fas fa-check"></i> Done</NavLink>
   </li>
   <li className="nav-item">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/timeline"><i class="fas fa-list-ul"></i> Timeline</NavLink>
   </li>
 </ul>

</nav>
    </div>
    </div>
   
  );
}

export default ChallengesNav;


