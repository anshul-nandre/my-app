import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './Component/LoginForm' 
import SignupForm from './Component/SignupForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignupForm />

    </>
  )
}

export default App
