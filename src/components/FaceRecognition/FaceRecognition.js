import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, faceFrame, concepts }) => {
  const value = concepts.value && concepts.value.toFixed(2);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="580px"
          height="auto"
        />
        <div
          className="faceBox"
          style={{
            inset: `${faceFrame.topRow}px ${faceFrame.rightCol}px ${faceFrame.bottomRow}px ${faceFrame.leftCol}px`,
          }}
        >
          <div className="concepts">
            <span>{concepts.name}</span>
            <span>{value}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
