import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Recipe({ infoKey, title, image }) {
  const queryparam = title.replace(/ /g, "+");

  useEffect(() => {
    AOS.init();
  }, []);

  const workdone = (infoKey) => {
    var workKey = infoKey % 4;
    switch (workKey) {
      case 0:
        return "flip-up";
      case 1:
        return "flip-down";
      case 2:
        return "flip-left";
      case 3:
        return "flip-right";
    }
  };
  return (
    <div className="recipe-item" data-aos={workdone(infoKey)}>
      <h1>
        <a
          href={`http://www.google.com/search?q=${queryparam}`}
          target="_blank"
        >
          {title}
        </a>
      </h1>
      {/* <p>{calories} calories</p> */}
      <div className="img-container">
        <a
          href={`http://www.google.com/search?q=${queryparam}`}
          target="_blank"
        >
          <img src={image} alt={`Image of ${title}`} />
        </a>
      </div>
    </div>
  );
}
