export default [
  {
    name: "movies",
    icon: "film",
    states: [
      // Stove light blue
      {
        id: 1,
        type: "light",
        body: {
          on: true,
          bri: 50,
          hue: 47104,
          sat: 254,
          xy: [0.1532, 0.0475]
        }
      },
      // Sink light blue
      {
        id: 3,
        type: "light",
        body: {
          on: true,
          bri: 50,
          hue: 47104,
          sat: 254,
          xy: [0.1532, 0.0475]
        }
      },
      // Table lamp off
      {
        id: 13,
        type: "light",
        body: {
          on: false
        }
      },
      // floor lamp off
      {
        id: 8,
        type: "light",
        body: {
          on: false
        }
      }
    ]
  },
  {
    name: "Bedtime",
    icon: "moon",
    states: [
      // Stove light off
      {
        id: 1,
        type: "light",
        body: {
          on: false
        }
      },
      // Table lamp off
      {
        id: 13,
        type: "light",
        body: {
          on: false
        }
      },
      // Sink light: nightlight
      {
        id: 3,
        type: "light",
        body: {
          on: true,
          bri: 50,
          hue: 7676,
          sat: 199
        }
      },
      // Floor Lamp: nightlight
      {
        id: 8,
        type: "light",
        body: {
          on: true,
          bri: 50,
          hue: 7676,
          sat: 199
        }
      },
      // Entrance: red
      {
        id: 11,
        type: "light",
        body: {
          on: true,
          bri: 254,
          hue: 7613,
          sat: 203,
          xy: [0.7006, 0.2993]
        }
      },
      // Sun room: all lights off
      {
        id: 5,
        type: "group",
        body: {
          on: false
        }
      }
    ]
  }
];
