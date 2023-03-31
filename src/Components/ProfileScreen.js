import React from "react";
import { Link } from "react-router-dom";

function ProfileScreen({user}) {
  return <div className="profileScreen">
      <h1> WELCOME {user.email}</h1>
      <Link to='/'>
      <button style={{padding: "1rem"}}>Start Adventure</button>
      </Link>
  </div>;
}

export default ProfileScreen;
