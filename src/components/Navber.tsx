// import { useState } from "react";
import Logo from "../assets/logo.png";
import { MdCurrencyExchange } from "react-icons/md";

const Navber = ({ coin }: { coin: number }) => {
  return (
    <>
      <nav className="container mx-auto">
        <div className="flex justify-between items-center ">
          <img src={Logo} alt="" />

          <ul className="flex gap-4 items-center">
            <li className="hover:text-yellow-500">Home</li>
            <li className="hover:text-yellow-500">Fixture</li>
            <li className="hover:text-yellow-500">Players</li>
            <li className="hover:text-yellow-500">Schedule</li>
          </ul>
          <h2 className="font-bold text-3xl to-black flex gap-1 items-center">
            <MdCurrencyExchange />
            {coin}
          </h2>
        </div>
      </nav>
    </>
  );
};

export default Navber;
