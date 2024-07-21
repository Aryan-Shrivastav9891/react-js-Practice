import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [ScharacterAll, setSCharacterAll] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook

  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (ScharacterAll) str += "+_@!@#$%^&*()[]+-./";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass, "hello");
    }
    setPassword(pass);
  }, [length, numberAllowed, ScharacterAll, setPassword]);

  const CopyPasswordToClipBord = useCallback( ()=>{
    passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  } , [password])


  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, ScharacterAll, passwordGenrator]);

  return (
    <>
      <div className="w-full max-w-full max-auto shadow-lg rounded-lg px-4 my-4 text-orange-500 bg-gray-500">
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <h1>password gerrator</h1>
          <input
            ref={passwordRef}
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="Password"
            readOnly
          />
          <button 
          onClick={CopyPasswordToClipBord}
          className="p-3 text-black border-blue-700 bg-orange-500 rounded-lg mx-4">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="coursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((preValue) => !preValue);
              }}
            />
            <label htmlFor="">number allowed</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={ScharacterAll}
              onChange={() => {
                setSCharacterAll((preValue) => !preValue);
              }}
            />
            <label htmlFor="">Special Char allowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
