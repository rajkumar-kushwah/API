import React from 'react'
import { useState } from 'react'
// import Form from './components/form'
import Posts from './components/Posts'
import Forma from './components/Froma'
import { BrowserRouter ,Link, Routes,Route} from "react-router-dom"



const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Posts/>}></Route>
      <Route path='create/' element={<Forma/>}></Route>
      <Route path='create/:id/' element={<Forma/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App