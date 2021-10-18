import React from "react";
import audio1 from "../assets/note1.wav";
import audio2 from "../assets/note2.wav";
import audio3 from "../assets/note3.wav";
import audio4 from "../assets/note4.wav";
import audio5 from "../assets/note5.wav";
import audio6 from "../assets/note6.wav";
import audio7 from "../assets/note7.wav";

const Tile = (props) => {
  const myStyle = {
    background: props.color,
    width: props.width,
    height: "50px",
    borderRadius: "50px",
    boxShadow: "5px 5px 20px grey",
    cursor: "pointer",
    marginBottom: "25px",
    textAlign: "center",
    marginLeft: props.margin,
    marginRight: props.margin,
  };

  const handleClick = (e) => {
    console.log(props.color);
    var music;
    var playPromise;

    switch (props.color) {
      case "violet":
        music = new Audio(audio1);
        playPromise = music.play();
        break;

      case "indigo":
        music = new Audio(audio2);
        playPromise = music.play();
        break;

      case "blue":
        music = new Audio(audio3);
        playPromise = music.play();
        break;

      case "green":
        music = new Audio(audio4);
        playPromise = music.play();
        break;

      case "yellow":
        music = new Audio(audio5);
        playPromise = music.play();
        break;

      case "orange":
        music = new Audio(audio6);
        playPromise = music.play();
        break;

      case "red":
        music = new Audio(audio7);
        playPromise = music.play();
        break;

      default:
        if (playPromise !== undefined) {
          playPromise
            .then((_) => {
              // Automatic playback started!
              console.log("audio played auto");
            })
            .catch((error) => {
              // Auto-play was prevented
              // Show paused UI.
              console.log("playback prevented");
            });
        }
        break;
    }
  };

  return (
    <>
      <div style={myStyle} onClick={handleClick} />
    </>
  );
};

export default Tile;
