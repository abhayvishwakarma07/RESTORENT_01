import './App.css'
import process from 'process';
import Navbar from './Navbar'
import Footer from './Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Food from './Food'
import Contact from './Contect'
import About from './About'

function App() {

  return (
    <>
   <Navbar/>
   <div className='min-h-screen'>
   <Routes> 
   <Route path='/' element={<Home/>}/>
    <Route path='/food' element={<Food/>}/>
    <Route path='/contect' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>

   </Routes>
   </div> 
   <Footer/>
    </>
  )
}

export default App
