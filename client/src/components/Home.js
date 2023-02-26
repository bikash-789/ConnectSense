import React from "react";
import { isAuthenticated } from "../api/Auth_API";

function Home() {
  const { user } = isAuthenticated();
  return <div>Welcome, {user ? user.name : "User!"}</div>;
}

export default Home;
