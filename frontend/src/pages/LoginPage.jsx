import React from 'react'
import Login from '../components/principle/login'
import Footer from '../components/footers/footer'
import Signup from '../components/principle/signup'

const LoginPage = () => {
  return (
    <div>
        <Login/>
          <Signup/>
        <Footer/>
    </div>
  )
}

export default LoginPage