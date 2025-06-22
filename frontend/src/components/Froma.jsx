import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";


const Form=()=>{
  const {id} = useParams()
    const navigate = useNavigate()
   const [data, setData] = useState([])
    const [formData, setFormData] = useState(
    {
   'title': '',
   'description': '',
   'image' : null,
    })
  
    if(id){
      useEffect(() => {
        axios.get(`http://127.0.0.1:8000/${id}/`)
        .then((value) =>setFormData(value.data))
        .catch((value) => {value.error})
     }, [])
    }

  const handleChange =(e)=>{
    const {name , value} = e.target
    setFormData({...formData, [name] : value})
  }
  
  const handleimage =(e)=>{
    setFormData({...formData , image: e.target.files[0]})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setData((prev)=> [...prev, formData])

 
    const sendData = new FormData()
    sendData.append('title', formData.title)
    sendData.append('description', formData.description)
    sendData.append('image', formData.image)
    let response;
    if(id){
      const response = axios.put(`http://127.0.0.1:8000/${id}/`, sendData, {headers: {"Content-Type": "multipart/form-data"},},)
      console.log(response)
    }
    else{
      const response = axios.post('http://127.0.0.1:8000', sendData, {headers: {"Content-Type": "multipart/form-data"},},)
      console.log(response)
    }

    setFormData({
      'title': '',
      'description': '',
      'image' : null,
       })
       

    
     


      navigate('/')
  }

  

  

    return(
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
      <h3 className=" text-xl font-semibold text-center mb-4"> this is my form </h3>
      <form onSubmit={handleSubmit} className="space-y-4" >
        <div className="form-container ">
          
          title : <input  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
             focus:border-blue-500 focus:ring-blue-200 focus:ring-1 outline-none" type="text" name="title" value={formData.title } id="formData.title" onChange={handleChange}/>
          description : <input  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
             focus:border-blue-500 focus:ring-blue-200 focus:ring-1 outline-none" type="text" name="description" value={formData.description} onChange={handleChange}/><br></br>
          image : <input className="block file:mr-4 file:px-4 file:py-2 file:border file:border-gray-300
             file:rounded-md file:text-sm file:bg-white file:text-gray-700
             hover:file:bg-gray-100" type="file" name="image"   onChange={handleimage}/>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-5 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300" type='submit'>submit</button>
          
        </div>
        </form>
        
        <p><Link to={'/'}><button className='bg-blue-500 text-white p-2 rounded-lg m-2 '>Back</button></Link></p>
        </div>
    )
}
export default Form