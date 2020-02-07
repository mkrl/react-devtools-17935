import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      click #{count}
    </button>
  );
}

render(<App />, document.getElementById("root"));

