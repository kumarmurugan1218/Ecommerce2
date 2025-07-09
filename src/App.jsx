
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './pages/Home'
import LogInPage from './pages/login_layout/LogInPage'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import About from './pages/About'
import Product from './pages/Product'
import CategoryPage from './pages/CategoryPage'
import { useState,useReducer,createContext } from 'react'
import './index.css'
import Layout from './Layout/Layout'
 export  const cartcontext=createContext()
 const initialstate=[];
 function reducer(state,action){
  switch(action.type){
    case "Addcart":
      return [...state,action.payload];

    case "Removecart":
      return state.filter((s)=>s.id!==action.payload)


 }
}

const App = () => {
  const[cart,dispatch]=useReducer(reducer,initialstate)
    // const [cart,setCart]=useState([]);
    console.log(import.meta.env.BASE_URL)
  return (
    <cartcontext.Provider value={{cart,dispatch}  }>
    <BrowserRouter basename="/Ecommerce2">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route  index element={ <Home/>}/>
            <Route path='About' element={<About/>}/>   
            <Route path='product' element={<Product/>}/>
            <Route path='product/:category' element={<CategoryPage/>}/>                        
            <Route path='Contact' element={<Contact/>}/>    
            <Route path='Cart' element={<Cart/>}/>    
            <Route path='Login' element={<LogInPage/>}/> 
          </Route>  
        </Routes>
    </BrowserRouter>
    </cartcontext.Provider>
  )
}

export default App;
