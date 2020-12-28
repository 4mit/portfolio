import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../Theme/ThemeContext";

const Interests = () => {
  const { config, current, updater } = useContext(ThemeContext);
  let theme = config[current];
  return (
    <section
      className="resume-section"
      id="interests"
      style={{ background: theme?.background, color: theme?.foreground }}
    >
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <p>
          Apart from being Web Developer, I enjoy my time listening remixes,
          Playing Action/Racing Games like (Freedom Fighter, Battlefield , NFS).
          Sometimes i try to get my hands dirty mixing tracks.
        </p>
      </div>
    </section>
  );
};

export default Interests;
