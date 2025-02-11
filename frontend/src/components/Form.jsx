import React, { useState } from 'react';


const Form = ()=>{
  const [data, setData] = useState([])
  const [formData, setFormData] = useState(
  {
 'title': '',
 'description': '',
 'image' : null,
  })

const handleChange =(e)=>{
  const {name , value} = e.target
  setFormData({...formData, [name] : value})
}

const handleimage =(e)=>{
  setFormData({...formData , image: e.target.files[1]})
}

const handleSubmit=(e)=>{
  e.preventDefault()
  setData((prev)=> [...prev, formData])
  console.log(data)
}

  return(
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div  className=''>
        title: <input className='m-2 border-2' type='text' name='title' value={formData.title} onChange={handleChange}/>
        description: <input className='m-2 border-2' type='text' name='description' value={formData.description} onChange={handleChange}/>
        image: <input className='m-2 border-2' type='file' name='image' value={formData.image}  onChange={handleimage}/>
         <button type='submit'>submit</button>
       </div>
      </form>
    </div>
    
  )
}
export default Form