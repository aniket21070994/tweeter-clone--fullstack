import React, { useState } from 'react'
import { USER_API_END_POINT } from '../utils/constants'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  //state section 

  const [isLogin, setLogin] = useState(true)
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      //login
      try {
        const res =await axios.post(`${USER_API_END_POINT}/login`, {  email, password })
        navigate("/")
        if(res.data.success)
          {
               toast.success(res.data.message)
          }
        console.log(res)
      } catch (err) {
        toast.success(err.res.data.message)
        console.log(err)
      }
    } else {
      //sign up
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, { name,username, email, password })
        if(res.data.success)
          {
               toast.success(res.data.message)
               setLogin(true)
          }
        console.log(res)
      } catch (err) {
        toast.success(err.res.data.message)
        console.log(err)
      }
    }

  }
  const LoginSignupHandeler = () => {
    setLogin(!isLogin)
  }
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
          <img className='ml-5 w-[190px]' src="data:image/png;base64,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" alt="" />
        </div>
        <div>
          <div className='my-5'>
            <h1 className='font-bold text-6xl'>Happening now</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? "Login" : "Signup"}</h1>
          <form className='flex flex-col w-[50%] font-semibold' onSubmit={submitHandler}>

            {!isLogin && (
              <>

                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='outline-blue-500 border border-gray-800 rounded-full px-3 py-1 my-1' />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='outline-blue-500 border border-gray-800 rounded-full px-3 py-1 my-1' />
              </>
            )
            }
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required className='outline-blue-500 border border-gray-800 rounded-full px-3 py-1 my-1' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='outline-blue-500 border border-gray-800 rounded-full px-3 py-1 my-1' />

            <button className='bg-[#1D9BF0] border-non py-2 my-4 rounded-full text-lg text-white'>{isLogin ? "Login" : "Signup"}</button>
            <h1 className='w-full'>{isLogin ? "Do not have an account?" : "Alredy have an account?"}<span onClick={LoginSignupHandeler} className='font-bold cursor-pointer text-blue-500 '>{isLogin ? "Register" : "Login"}</span></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login