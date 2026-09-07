import React from "react";
import Logo from "../assets/logo.png";

const Navber = () => {
  return (
    <>
      <nav className="container mx-auto">
        <div className="flex justify-between ">
          <img src={Logo} alt="" />

          <ul className="flex gap-4 items-center">
            <li className="hover:text-yellow-500">Home</li>
            <li className="hover:text-yellow-500">Fixture</li>
            <li className="hover:text-yellow-500">Players</li>
            <li className="hover:text-yellow-500">Schedule</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navber;
