import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="navigation relative bg-green-500 grid grid-cols-3 justify-center items-center h-16 px-16 mb-20">
      <div>
        <a href="#" className="text-left pr-4 relative items-center p-2 bg-white w-26 rounded-md font-bold text-2xl">
          Network Call Practice
        </a>
      </div>
      <div className="links flex justify-center items-center h-full gap-2 text-xl">
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
