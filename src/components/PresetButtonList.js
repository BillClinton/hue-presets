import React from "react";
import PresetButton from "./PresetButton";

const PresetButtonList = ({ presets, onPresetSelect }) => {
  console.log("list!!!!");
  const renderedList = presets.map(preset => {
    console.log("map", preset);
    return (
      <div className="ui container">
        <PresetButton
          key={preset.name}
          presetName={preset.name}
          onPresetSelect={onPresetSelect}
        />
      </div>
    );
  });

  return <div className="column">{renderedList}</div>;
};

export default PresetButtonList;
