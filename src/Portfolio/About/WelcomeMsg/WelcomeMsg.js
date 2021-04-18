import React, { useEffect, useState, useContext } from "react";
import Emoji from "react-emojis";
import ThemeContext from "../../../Theme/ThemeContext";

const WelcomeMsg = () => {
  const { config, current, updater } = useContext(ThemeContext);
  let theme = config[current];
  console.log(updater);

  let morning = new Date();
  morning.setHours(0);
  morning.setMinutes(1);
  morning.setSeconds(0);

  let noon = new Date();
  noon.setHours(12);
  noon.setMinutes(1);
  noon.setSeconds(0);

  let evening = new Date();
  evening.setHours(16);
  evening.setMinutes(0);
  evening.setSeconds(0);

  let night = new Date();
  night.setHours(23);
  night.setMinutes(59);
  night.setSeconds(0);

  let [wish, setWish] = useState("");
  let [currentEmoji, setCurrentEmoji] = useState("grinning-face-with-big-eyes");
  useEffect(() => {
    let current = new Date();

    if (current >= morning && current < noon) {
      // morning
      setWish("Good Morning..");
      setCurrentEmoji("grinning-face-with-big-eyes");
      updater("light");
    } else if (current >= noon && current < evening) {
      //noon
      setCurrentEmoji("grimacing-face");
      setWish("Good Noon..");
      updater("light");
    } else if (current >= evening && current < night) {
      //evening
      setCurrentEmoji("partying-face");
      setWish("Good Evening..");
      updater("dark");
    } else {
      //night
      setCurrentEmoji("sleeping-face");
      setWish("Good Night..");
      updater("dark");
    }
  }, []);
  return (
    <div>
      <span>Hello Friend !!! {wish}</span>
      <Emoji emoji={currentEmoji} size="25" />
    </div>
  );
};

export default WelcomeMsg;
