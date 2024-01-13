import React from "react";

const Hero = ({ user, logout }) => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl text-left font-bold ">Dashboard</h1>
      {user && (
        <button className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Hero;
