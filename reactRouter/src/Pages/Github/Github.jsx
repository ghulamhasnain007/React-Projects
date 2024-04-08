import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
        // fetch('https://api.github.com/users/ghulamhasnain007')
        // .then(response => response.json())
        // .then(data => {
        //     setData(data)
        //     console.log(data)
        // })
    // },[])
  return (
    <div className='bg-gray-700 text-center text-white text-3xl m-6 p-7'>
        Github Followers: {data.following}
        <img src={data.avatar_url} alt="Git picture" width={'300px'} />
    </div>
  )
}

export default Github
export const githubInfo = async() =>{
  const response = await fetch('https://api.github.com/users/ghulamhasnain007')
  if(!response.ok){
    throw new Error("Error Fetching Api")
  }
  return response.json()
}