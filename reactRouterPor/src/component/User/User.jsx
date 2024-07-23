import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-500 text-white text-3xl text-center py-4 rounded-xl mx-60'>User{userId}</div>
  )
}

export default User