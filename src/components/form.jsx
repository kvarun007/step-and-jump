import { useState } from "react";
import Result from "./result";
import close from "../assets/close.png";

export default function Form({ keys, onClose }) {
  const [steps, setSteps] = useState("");
  const [turns, setTurns] = useState("");

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
    //console.log(e.target.value);
  };

  const handleTurnsChange = (e) => {
    setTurns(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(keys + "1", [steps]);
    localStorage.setItem(keys + "2", [turns]);
    console.log(localStorage.getItem(keys + "1"));
    console.log(localStorage.getItem(keys + "2"));
    onClose();
    //console.log({ keys });
  };

  return (
    <>
      <div>
        <img src={close} className="size-3 " onClick={onClose} />
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          No of steps:
          <input
            className="border border-black"
            value={steps}
            onChange={handleStepsChange}
          />
        </label>
        <label>
          No of turns:
          <input
            className="border border-black"
            value={turns}
            onChange={handleTurnsChange}
          />
        </label>
        <button className="border border-black" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
