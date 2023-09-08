import "../App.css";
import { useRef, useEffect, useState } from "react";
import startTown from "/images/startTown.png";
import startTheme from "/Bachs-Bouree-In-Celtic-Minor.mp3";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import banditCouncil1 from "/images/BanditCouncil1.png";

// eslint-disable-next-line react/prop-types
export default function StartMenu({ start, startImg }) {
  const [audio] = useState(new Audio(startTheme));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => setIsPlaying(!isPlaying);
  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  const canvas = useRef();
  useEffect(() => {
    const image = new Image({ startImg });
    const sprites = new Image();
    const ctx = canvas.current.getContext("2d");
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
      ctx.drawImage(sprites, 20, 110);
    };
    image.onerror = function () {
      alert("image failed to load");
    };
    image.src = startTown;
    sprites.src = banditCouncil1;
  });

  return (
    <div className="start">
      <canvas
        width="534px"
        height="401px"
        className="start-img"
        id="canvas"
        ref={canvas}
      ></canvas>
      <button className="sound" onClick={toggle}>
        <HiMiniSpeakerWave />
      </button>
      <div className="start-menu">
        <button className="start-button">{start}</button>
      </div>
    </div>
  );
}
