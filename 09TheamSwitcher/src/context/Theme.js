import { createContext , useContext } from "react";

export const ThemeContaxt = createContext({
    themeMode : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{},
})

export const TheamProvider = ThemeContaxt.Provider
export default function useTheme(){
    return useContext(ThemeContaxt)
}