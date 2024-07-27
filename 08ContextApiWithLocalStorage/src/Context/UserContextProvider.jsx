import React from 'react';
import UserContext from './UserContext.js';

const UserContextProvider = ({children})=>{
    const [ user , setUser] = React.useState(null);
    const [count , setCount] = React.useState(9)
    return(
    <UserContext.Provider value={{user , setUser , count , setCount}}>
    {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;