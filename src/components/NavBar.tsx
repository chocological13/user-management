import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="navigation relative bg-[#A87676] grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center lg:h-16 sm:h-12 lg:px-16 mb-20">
      <div>
        <a href="#" className="text-left pr-4 relative items-center p-2 bg-[#F5EEE6] w-26 rounded-md font-bold text-2xl">
          Network Call Practice
        </a>
      </div>
      <div className="links flex justify-center items-center h-full gap-2 text-xl md:flex-col">
        <a href="/" className="px-2">
          Users
        </a>
        <a href="register" className="px-2">
          Register
        </a>
      </div>
    </div>
  );
};

export default NavBar;
