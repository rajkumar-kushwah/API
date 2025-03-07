import React from 'react'
import { use } from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Posts = () => {
    
    const [Count ,setCount ] = useState([0])
  
    useEffect(() => {
       axios.get('http://127.0.0.1:8000/')
       .then((value) =>setCount(value.data))
       .catch((value) => {value.error})
    }, [])
     

    
     const handleDelete= (id)=>{
             axios.delete(`http://127.0.0.1:8000/${id}/`)
            .then(setCount(Count.filter(value => value.id !== id)))
            .catch((value) => {value.error})
            }

    
  return (
    <div>
      <div className='flex gray-200 p-2 m-2 w-500 bg-amber-700 fixed '>
        <h1 className=''>LOGO</h1>
        <p><Link to={'create/'}><button className='bg-blue-500 text-white p-2 rounded-lg '>Create Post</button></Link></p>
        <h3 className='ml-32 ' >welcome to the blog</h3>
        </div>
       <div className='flex flex-wrap'>
    {Count.map((value, index) => {
      
        return (
          
            <div className='  gray-200 p-2 m-2 w-50 bg-amber-100  mt-25 ' key={index} >
              <img className='' src={`http://127.0.0.1:8000/${value.image}`} />
                <h1 className='text-xl font-bold'>{value.title}</h1>
                <p>{value.description}</p>
                <Link to={`create/${value.id}/`}><button className='bg-blue-500 text-white p-2 rounded-lg m-2' >Edit</button></Link>
                <button className='bg-red-500 text-white p-2 rounded-lg m-2' onClick={()=>{handleDelete(value.id)}}  >Delete</button>
            
            </div>
        )
    })}
               
               </div>
    </div>

  )
}


export default Posts