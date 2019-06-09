import React from "react";

const PresetButton = ({ presetName }) => {
  return (
    <button className="massive fluid ui inverted blue button">
      <i className="user icon" />
      <span>{presetName}</span>
    </button>
  );
};

export default PresetButton;
