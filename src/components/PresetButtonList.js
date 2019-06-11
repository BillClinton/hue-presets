import React from "react";
import PresetButton from "./PresetButton";

const PresetButtonList = ({ presets, onPresetSelect }) => {
  const renderedList = presets.map(preset => {
    return (
      <PresetButton
        key={preset.name}
        preset={preset}
        onPresetSelect={onPresetSelect}
      />
    );
  });

  return <div className="column">{renderedList}</div>;
};

export default PresetButtonList;
