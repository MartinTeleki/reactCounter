import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="centered-content">
        <Counter />
      </div>
    </div>
  );
}

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  const stepPlus = () => {
    setStep(step + 1);
  };
  const stepMinus = () => {
    setStep((minusStep) => (minusStep <= 0 ? 0 : minusStep - 1));
  };
  const counterPlus = () => {
    setCount((plusCount) => plusCount + step);
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + step);
    setCurrentDate(newDate);
  };
  const counterMinus = () => {
    setCount((minusCount) => (minusCount <= 0 ? 0 : minusCount - step));
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - step);
    setCurrentDate(newDate);
  };

  const dayOfWeek = currentDate.getDay();
  const dayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return (
    <>
      <div>
        <p>
          <button className="minus" onClick={stepMinus}>
            -
          </button>{" "}
          <span> Step: {step} </span>
          <button className="plus" onClick={stepPlus}>
            +
          </button>
        </p>
        <p>
          <button className="minus" onClick={counterMinus}>
            -
          </button>{" "}
          <span> Count: {count} </span>
          <button className="plus" onClick={counterPlus}>
            +
          </button>
        </p>
      </div>
      <div>
        <p>
          {count} days from today is {days[(dayOfWeek + count) % 7]}{" "}
          {
            months[
              (currentMonth + Math.floor((dayOfMonth + count - 1) / 31)) % 12
            ]
          }{" "}
          {dayOfMonth + count > 31
            ? dayOfMonth + count - 31
            : dayOfMonth + count}{" "}
          {dayOfMonth + count > 31 ? currentYear + 1 : currentYear}.
        </p>
      </div>
    </>
  );
}

export default App;
