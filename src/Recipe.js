import React from "react";

export default function Recipe({ title, calories, image }) {
  const queryparam = title.replace(/ /g, "+");

  return (
    <div className="recipe-item">
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
