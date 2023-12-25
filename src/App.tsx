import React, { useState } from "react";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="p-16">
      <Button
        handleClick={() => {
          console.log("Button handleClick ok!");
        }}
      >
        Button Test
      </Button>
    </div>
  );
}

export default App;
