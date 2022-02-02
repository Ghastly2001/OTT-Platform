import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function ProfileScreen() {
  const user  = useSelector(selectUser);
  return <div className="profileScreen">
      <h1>{user.email}</h1>
  </div>;
}

export default ProfileScreen;
