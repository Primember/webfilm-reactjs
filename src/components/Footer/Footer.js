import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-name">Hoang Khac Doan</p>
      <p className="footer-contact">
        <a target="_blank" rel="noreferrer" href="https://github.com/Primember">
          <box-icon
            color="white"
            size="md"
            type="logo"
            name="github"
          ></box-icon>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/seiromem.chameleon/"
        >
          <box-icon
            color="#0abde3"
            size="md"
            type="logo"
            name="facebook-circle"
          ></box-icon>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCfrFGJt3p8xj-yZue8z-Hng"
        >
          <box-icon
            color="#ee5253"
            size="md"
            name="youtube"
            type="logo"
          ></box-icon>
        </a>
      </p>
    </div>
  );
}

export default Footer;
