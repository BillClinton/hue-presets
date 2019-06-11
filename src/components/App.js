import React from "react";
import PresetButtonList from "./PresetButtonList";
import HueLocal from "../apis/HueLocal";
import Presets from "../apis/Presets.js";
import "./App.css";

class App extends React.Component {
  //onPresetSelect = async preset => {
  onPresetSelect = preset => {
    const actions = [];

    preset.states.forEach(state => {
      let action = state.type === "light" ? "state" : "action";
      let url = "/" + state.type + "s/" + state.id + "/" + action;

      actions.push(
        new Promise(() => {
          return HueLocal.put(url, state.body);
        })
      );
    });

    Promise.all(actions)
      .then(vals => {
        console.log("promise");
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="ui one column centered grid">
          <div className="eight wide column" style={{ marginTop: "10px" }}>
            <PresetButtonList
              onPresetSelect={this.onPresetSelect}
              presets={Presets}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
