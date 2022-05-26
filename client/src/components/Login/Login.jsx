import React, { useRef } from 'react'
import axios from 'axios';

const centerStuffs = `flex flex-col justify-center items-center`

const baseUrl = 'http://localhost:4000/user';

const Login = () => {
  const emailRef = useRef();

  const checkingUser = () => {
    const email = emailRef.current.value;
    axios.get(`${baseUrl}/find?email=${email}`)
      .then(res => {
        console.log(res.status)
        if (res.status === 200) {
          loginUser(email)
        } else if (res.status === 202) {
          console.log('Exists')
        }
      })
      .catch(err => console.log(err))
  }

  function loginUser(email) {
    axios.post(`${baseUrl}/add`, {
      email: email
    })
      .then(res => {
        if (res.status === 202) {
          console.log('done')
        } else {
          console.log('failed')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={`bg-primary h-[100vh] w-[100vw] text-white ${centerStuffs}`}>
      <h1 className='text-[2em] font-semibold mb-[10px]'>Sign-in</h1>
      <div className={`${centerStuffs}`}>
        <input type="email" name="email" placeholder='Enter your email....' className='h-[30px] w-[290px] p-[20px] rounded-[10px] text-black' ref={emailRef} />
        <div className="flex items-center justify-between  w-[290px]">
          <button type="submit" className={`mt-[10px] pb-[5px] bg-[#FF9F1C] text-primary text-white h-[30px] w-[120px] rounded-[10px]`} onClick={checkingUser}>Login</button>
          <a className='text-[11.5px] mt-[15px]' href='/searchuser'>Login Anonymously</a>
        </div>
      </div>
    </div>
  )
}

export default Login;