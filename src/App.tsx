import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import '../main.css'
import Prod from './components/Prod'
import { AuthProvider } from './contexts/Auth'
import { CartProvider } from './contexts/CartContext'
import { ProdContext, ProdProvider } from './contexts/ProdContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Men from './pages/Men'
import {Private} from './pages/Private'
import Register from './pages/Register'
import Support from './pages/Support'
import Women from './pages/Women'
import Cart from './pages/Cart'

const App = () => {

  return (
    <AuthProvider>
      <CartProvider>
        <ProdProvider>
          <BrowserRouter>
            <Routes>

              <Route path='/home' element={<Private/>}>
                <Route path='/home' element={<Home/>}/>
              </Route>

              <Route path='/' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/forwomen' element={<Women/>}/>
              <Route path='/formen' element={<Men/>}/>
              <Route path='/support' element={<Support/>}/>
              <Route path='/products/:id' element={<Prod/>}/>
              <Route path='/cart' element={<Cart/>}/>

            </Routes>
          </BrowserRouter>
        </ProdProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App