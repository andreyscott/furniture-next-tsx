import React from "react";
import "./style.css";
const Loading = () => {
  return (
    <div className="loading-container">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        ></circle>
      </svg>
    </div>
  );
};

export default Loading;
