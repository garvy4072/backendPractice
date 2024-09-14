import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cors from 'cors'
import axios from 'axios'
function App() {
  const [jokes, setjokes] = useState([])
  console.log(jokes)
useEffect(()=>{
axios.get("/api/jokes")
.then((res)=>{
  setjokes(res.data)
}).catch((err)=>{
  console.log(err)
})
},[])
  return (
    <>
     <h1>CHat with us</h1>
     {
      jokes.map((item , index)=>{
        return <p key={index}>{item.joke}</p>
      })
     }
    </>
  )
}

export default App
