import { useState } from "react";

const Colorizer = () => {
  const [color, setColor] = useState("#6699ff");
  const [counter, setCounter] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);

  const getRandomColor = () => {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random;
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    console.log("Clicked and color changed with random color", randomColor);
    setColor(randomColor);
    increaseCounter();
  };

  const increaseCounter = () => {
    console.log("Increased by 1");
    setCounter((prev) => prev + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const copyColorToClipboard = () => {
    navigator.clipboard.writeText(color).then(
      function () {
        // Success callback: Update state to show the success message.
        setCopySuccess(true);

        // Reset the success message after a delay (e.g., 2 seconds).
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      },
      function (err) {
        // Error callback (optional): Handle errors here.
        console.error("Error copying color to clipboard: ", err);
      }
    );
  };

  return (
    <div className="colorizer" style={{ backgroundColor: color }}>
      <div className="counter">
        <h1>You have changed the color {counter} times.</h1>
      </div>
      <div className="box" style={{ backgroundColor: color }}>
        {color}
        <button onClick={copyColorToClipboard}>Copy!</button>
        {copySuccess && <div className="copy-success">Color copied to clipboard!</div>}
      </div>
      <button onClick={changeColor}>Change color now!</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
};

export default Colorizer;
