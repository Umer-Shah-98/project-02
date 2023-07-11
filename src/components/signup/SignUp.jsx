import React from 'react'
// import { Progress } from "@material-tailwind/react";
export default function SignUp() {
  return (
    <div className='signup-page flex justify-around m-10'>
      <div className="image-description"></div>
      <div className="form flex justify-center">
        <form action="">
          <div className="email m-5">
            <p className='mx-3 font-bold'>Email</p>
            {/* <label htmlFor="email">Email : </label> */}
            <input className='m-3' type="email"/>
          </div>
          <div className="password m-5">
          <p className='mx-3 font-bold'>Password</p>
            {/* <label htmlFor="password">Password : </label> */}
            <input className='m-3' type="password" />
          </div>
        </form>
      </div>
    </div>
  )
}
