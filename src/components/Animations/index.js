import React, { useState } from "react";
import SimpleAnimation from "./AnimationsButtom";
import "../../app.css";
import Slider from "./AnimationSlider";

const Animation = () => {
  const [active, setActive] = useState(false);
  const slides = [
    {
      id: 1,
      text: "Slide 1",
    },
    {
      id: 2,
      text: "Slide 2",
    },
    {
      id: 3,
      text: "Slide 3",
    },
  ];
  return (
    <div>
      <h1>Animaçoes em REACTJS</h1>
      <div>
        <button onClick={() => setActive(!active)}>Ativar</button>
        {active && <SimpleAnimation />}
      </div>
      <div>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default Animation;
