import React, { useEffect, useState } from 'react'

function UsecurrencyInfo(currency) {
  const [data , setData] = useState({})

  useEffect(()=>{

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res)=>setData(res[currency]))
    .catch((error)=>console.log(error , "Error in res"))
  }  , [currency])
  console.log(data , "hello");
  return data;
}

export default UsecurrencyInfo