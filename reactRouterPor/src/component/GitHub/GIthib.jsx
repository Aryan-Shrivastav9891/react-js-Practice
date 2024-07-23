import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GIthib() {
    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //   fetch(`https://api.github.com/users/hiteshchoudhary`)
    //   .then((res)=>res.json())
    //   .then((data)=>{
    //     console.log(data);
    //     setData(data)
    //   })
    
      
    // }, [])
    


  return (
    <div className='bg-gray-700 text-4xl text-white p-4 text-center'>GIthub Followers :{data.followers}
    <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default GIthib

export const githubinfoloder = async ()=>{
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json();
}