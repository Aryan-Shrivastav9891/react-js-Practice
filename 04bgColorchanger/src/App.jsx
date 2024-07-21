import React, { useState } from "react"; // Import React and useState from react package
import "./App.css";

function App() {
  const [color, setColor] = useState("gray"); // Corrected useState declaration
  const[red , setRed] = useState("red"); // Corrected useState declaration
  const[green , setGreen] = useState("green"); // Corrected useState declaration
  const[blue , setBlue] = useState("blue"); // Corrected useState declaration
  const[black , setBlack] = useState("black"); // Corrected
  const[yellow , setBrightness] = useState("yellow"); // Corrected useState declaration
  const[contrast , setContrast] = useState("contrast"); // Corrected useState declaration

  return (
    <div
      className="w-full h-screen duration-"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
        <button
            className="outline-none rounded-xl px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: red }}
            onClick={()=>setColor('red')}
          >
            red
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: green }}
            onClick={()=>setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: blue }}
            onClick={()=>setColor('blue')}
          >
            blue
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: black  , color:"white" }}
            onClick={()=>setColor("black")}
          >
            black
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: yellow }}
            onClick={()=>setColor("yellow")}
          >
            yellow
          </button>
         
          
        </div>
      </div>
    </div>
  );
}

export default App;
