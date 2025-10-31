import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(true);
  const handelClick = () => {
    setState(!state);
  };
  console.log(state);
  return (
    <div className="App">
      <div className="container" onClick={handelClick}>
        <div
          className={`button`}
          style={{ backgroundColor: state ? "green" : "red" }}
        >
          <span className={`btn ${state ? "on" : "off"}`}>
            {state ? "ON" : "OFF"}
          </span>
        </div>
      </div>
    </div>
  );
}
