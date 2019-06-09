import React from "react";
import PresetButton from "./PresetButton";

const PresetButtonList = ({ presets, onPresetSelect }) => {
  console.log("list!!!!");
  const renderedList = presets.map(preset => {
    console.log("map", preset);
    return (
      <PresetButton
        key={preset.name}
        presetName={preset.name}
        onPresetSelect={onPresetSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default PresetButtonList;
