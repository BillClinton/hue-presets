import React from "react";
import PresetButtonList from "./PresetButtonList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="ui one column centered grid">
          <div className="eight wide column" style={{ marginTop: "10px" }}>
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
        </div>
      </div>
    );
  }
}

export default App;
