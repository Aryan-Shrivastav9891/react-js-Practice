import { useState } from "react";
import UserContextProvider from './Context/UserContextProvider.jsx';
import Login from "./Component/Login.jsx";
import Profile from "./Component/Profile.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <UserContextProvider>
      <h1>React with chai Share is important</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
