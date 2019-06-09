import React from "react";
import PresetButtonList from "./PresetButtonList";

class App extends React.Component {
  render() {
    return (
      <div>
        <PresetButtonList
          presets={[
            {
              name: "movies"
            },
            {
              name: "bedtime"
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
