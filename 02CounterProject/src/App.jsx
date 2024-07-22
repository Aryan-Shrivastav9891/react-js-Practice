import { useState } from 'react'
import './App.css'

function App() {
  const maxCount = 20;

  const addValue =()=>{
      if (counter > 0 && counter < maxCount) {
        setCounter(counter+1)
      }
  }
  const decreaceValue =()=>{
    if (counter > 0 && counter < maxCount) {
      setCounter(counter-1)
    }
  }

    
  

  const [counter, setCounter] = useState(15);


  return (
    <>
    <button onClick={addValue} >add valur {counter}</button>  
    <br />
    <button onClick={decreaceValue}>remove valur{counter}</button>
    
    <h1>Hello bro</h1>
    <h3>counter value : {counter}</h3>



    </>
  )
}


export default App
