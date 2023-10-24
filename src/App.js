import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(false);

  function counterPlus() {
    return setCount(!count);
  }
  function handleCounterString() {
    if (count === false) {
      return "falsy";
    } else {
      return "truuue";
    }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button onClick={counterPlus}> Count is {handleCounterString()} </button>

      {count && (
        <div>
          <p>Congrats, you click the button!</p>
        </div>
      )}
    </div>
  );
}
