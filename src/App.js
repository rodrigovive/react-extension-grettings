import React from "react";

const greetings = {
  morning: "Good morning",
  noon: "Good afternoon",
  evening: "Good evening",
};

function App() {
  return <h1>{greetings["morning"]} </h1>;
}

export default App;
