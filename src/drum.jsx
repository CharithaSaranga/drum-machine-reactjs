import React, { useEffect, useState } from "react";

import "./drum.css";

const arr = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Heater 6",
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open Hi-Hat",
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick and Hat",
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick 1",
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed Hi-Hat",
  },
];
const Drum = () => {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playClip(event.key.toUpperCase());
    });
  }, []);

  const [activePad, setActivePad] = useState("");
  const playClip = (music) => {
    const uniqueMusic = document.getElementById(music);
    console.log(uniqueMusic);
    uniqueMusic.play();

    let match = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].text === music) {
        match = arr[i];
        break;
      }
    }
    if (match) {
      setActivePad(`Description: ${match.description}`);
    } else {
      setActivePad("");
    }
  };
  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div className="display" id="display">
          {activePad}
        </div>
        <div className="drum-pad-container">
          {arr.map((pad) => (
            <button
              key={pad.src}
              onClick={() => {
                playClip(pad.text);
              }}
              className="drum-pad"
              id={pad.src}
            >
              {pad.text}{" "}
              <audio id={pad.text} src={pad.src} className="clip"></audio>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drum;
