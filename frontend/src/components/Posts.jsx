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
    <div >
      <header className="bg-orange-300 shadow-md p-4 h-20 flex items-center justify-between fixed top-0 left-0 right-0 w-full z-10"> 
        
          <div><Link to="/" className="text-3xl font-bold text-white">LOGO</Link></div>
          <div className='text-2xl font-semibold text-white'>
            welcome too tha blog
          </div>
           <Link to="create/">
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Create Post</button>
  </Link>
        
      </header>
      
       <div className='flex flex-wrap justify-center gap-4 p-4 mt-18 '>
    {Count.map((value, index) => {
      
        return (
          
            <div key={index} className=' bg-amber-100 rounded-2xl shadow-lg p-4 w-full  sm:w-80' >
              <img className='rounded-t-xl object-cover w-full h-48' src={`http://127.0.0.1:8000/${value.image}`} />
                <h1 className='text-xl font-bold mt-2'>{value.title}</h1>
                <p className=''>{value.description}</p>
                  <div className="flex justify-end gap-2 mt-4">
                <Link to={`create/${value.id}/`}><button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg' >Edit</button></Link>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg" onClick={()=>{handleDelete(value.id)}}  >Delete</button>
            
            </div>
            </div>
        )
    })}
               
               </div>
    </div>

  )
}


export default Posts