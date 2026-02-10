import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Grade6Page from './pages/Grade6Page.jsx'
import Grade8Page from './pages/Grade8Page.jsx'
import HomePage from './pages/HomePage.jsx'
import Developer from './pages/Developer.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
  <StrictMode>
    <App  />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/grade6' element={<Grade6Page/>}/>
      <Route path='/grade8' element={<Grade8Page/>}/>
      <Route path='/developer' element={<Developer/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      
    </Routes>
  </StrictMode>
   </BrowserRouter>,
)
