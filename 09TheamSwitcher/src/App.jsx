import { useState } from "react";
import "./App.css";
import { TheamProvider } from "./context/Theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {

  const [themeMode , setThemeMode] = useState("light")

  const darkTheme =()=>{
    setThemeMode('dark');
  }

  const lightTheme = ()=>{
    setThemeMode('light');
  }

  // actual change the theme

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);
  


  return (
    <TheamProvider value={{themeMode , darkTheme , lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

        <ThemeBtn/>
        </div>
        <div className="w-full max-w-sm mx-auto">
        <Card/>

        </div>
      </div>
    </div>
    </TheamProvider>
  );
}

export default App;
