import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <a href="" className="logo">
        <img
          className="logoi"
          src="https://cdn.discordapp.com/attachments/1293607881429749791/1294650123862671413/White.png?ex=670bc862&is=670a76e2&hm=f161f99adb137d153ab983abd248490424ba3af11b6f75fccf072a79e5b97155&"
          alt=""
        />
      </a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Gallery</a>
        <a href="/">Musics</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
      </nav>
    </header>
  );
};

export default Navbar;
