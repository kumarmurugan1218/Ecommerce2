
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import { Header } from './Components/Header'
import Home from './pages/Home'
import Footer from './Components/Footer'
import LogInPage from './pages/login_layout/LogInPage'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import About from './pages/About'
import Product from './pages/Product'
import CategoryPage from './pages/CategoryPage'
import { useState,useReducer,createContext } from 'react'
import './index.css'
 export  const cartcontext=createContext()
const App = () => {
    const [cart,setCart]=useState([]);
  return (
    <cartcontext.Provider value={{cart,setCart}  }>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={`${import.meta.env.BASE_URL}/`} element={ <Home/>}/>
            <Route path='/About' element={<About/>}/>   
            <Route path='/product' element={<Product/>}/>
            <Route path='/product/:category' element={<CategoryPage/>}/>                        
            <Route path='/Contact' element={<Contact/>}/>    
            <Route path='/Cart' element={<Cart/>}/>    
            <Route path='/Login' element={<LogInPage/>}/>      
        </Routes>
 
        <Footer/>
    </BrowserRouter>
    </cartcontext.Provider>
  )
}

export default App;
