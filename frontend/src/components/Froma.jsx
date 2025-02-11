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
      <div>
      <h1 className=" text-center"> this is my form </h1>
      <form onSubmit={handleSubmit} >
        <div className=" bg-amber-200  ">
          
          title : <input className="font-bold m-2 border-2 " type="text" name="title" value={formData.title } id="formData.title" onChange={handleChange}/>
          description : <input className="font-bold m-2 border-2 " type="text" name="description" value={formData.description} onChange={handleChange}/><br></br>
          image : <input className="font-bold m-2 border-2 " type="file" name="image"   onChange={handleimage}/>
          <button className="bg-blue-500 text-white p-2 rounded-lg m-2 " type='submit'>submit</button>
          
        </div>
        </form>
        
        <p><Link to={'/'}><button className='bg-blue-500 text-white p-2 rounded-lg m-2 '>Back</button></Link></p>
        </div>
    )
}
export default Form