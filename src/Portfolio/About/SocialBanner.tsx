import React from "react";
import "./banner.css";

const SocialBanner = () => {
  return (
    <section className="flex social-banner">
      <a href="">
        <img src="../assets/img/codepen.png" alt="hello" />
      </a>
      <a href="">
        <img src="../assets/img/facebook.png" alt="hello" />
      </a>

      <a href="">
        <img src="../assets/img/instagram.png" alt="hello" />
      </a>
      <a href="">
        {" "}
        <img src="../assets/img/linkedin.png" alt="hello" />
      </a>
      <a href="">
        <img src="../assets/img/linkedin.png" alt="hello" />
      </a>
      <a href="">
        {" "}
        <img src="../assets/img/linkedin.png" alt="hello" />
      </a>
    </section>
  );
};

export default SocialBanner;
