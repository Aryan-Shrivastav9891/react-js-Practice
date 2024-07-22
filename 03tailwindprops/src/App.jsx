import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [1,2,3,4,5,6,7,8,9,10,11]
  let myObj = {
    name:'Aryan',
    age:25,
    city:'Dhaka'
  }
  return (
    <>
    
    <h1 className='bg-green-600 text-blue rounded-xl p-4 m-1 rotate-180 text-right bg-green-900'>hello bro</h1>

    <Card UserName="Shringo"  myArr={myArr} myObj={myObj} btntext="dixk me" />
    <Card UserName="Aryan" btntext="fuck me" />

    </>
  )
}

export default App
