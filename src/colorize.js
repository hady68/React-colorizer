// Desc: This is the main page of the colorizer app
// this is a functional component
import { useState } from "react";

const Colorizer = () => {


    const [color, setColor] = useState('#6699ff');
    const [counter, setCounter] = useState(0);

    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return random;
      }

   
    const changeColor = () => {
        const randomColor = getRandomColor();
        console.log('clicked and color changee with random color', randomColor);
        setColor (randomColor);
        increaseCounter();
    }

    const increaseCounter = () => {
        console.log('incrBy1');
        //setCounter(counter + 1);
        setCounter((prev) => prev + 1);
      }
      
    const resetCounter = () => {
        setCounter(0);
      };
    return(
        <div className="colorizer" style={{ backgroundColor : color }}>
            <div className="counter"> 
            <h1>You have changed the color {counter} times.</h1>
            </div>
            <div className="box" style={{ backgroundColor : color }}> {color} </div>
                <button onClick={ changeColor }>Change color now!</button>
                <button onClick={resetCounter}>Reset Counter</button>
            </div>
    );
};

export default Colorizer;