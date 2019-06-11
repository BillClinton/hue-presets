import React from "react";

const PresetButton = ({ preset, onPresetSelect }) => {
  return (
    <button
      onClick={() => onPresetSelect(preset)}
      className="massive fluid ui inverted blue button"
    >
      <i className={preset.icon + " big icon"} style={{ marginBottom: 20 }} />
      <span>{preset.name}</span>
    </button>
  );
};

export default PresetButton;
