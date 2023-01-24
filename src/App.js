import "./App.css";
import { useRef, useState } from "react";

export default function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const add = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const substract = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const multiple = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((result) => (result = 0));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  return (
    <div className="App">
      <span ref={resultRef}>{result}</span>

      <div>
        <input
          placeholder="Enter the number"
          ref={inputRef}
          type="Number"
          pattern="[0-9]"
        />
      </div>

      <div className="buttons">
        <button onClick={add}>Add</button>
        <button onClick={substract}>Substract</button>
        <button onClick={multiple}>Multiply</button>
        <button onClick={divide}>Divide</button>
      </div>
      <div className="reset-buttons">
        <button onClick={resetInput}>
          Reset Input
        </button>
        <button onClick={resetResult}>
          Reset Result
        </button>
      </div>
    </div>
  );
}

