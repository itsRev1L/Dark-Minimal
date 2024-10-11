import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <div className="FooterContiner">
          <div className="FooterNav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Musics</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="FooterBottom">
          <p>
            Copyright &copy;2024; Designed by
            <b> Rev1L</b>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
