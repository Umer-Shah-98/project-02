import React from 'react'
import NavBar from '../../navBar/NavBar'
const Settings = () => {
  return (
    <div className='flex'>
    <div>
      <NavBar style={{backgroundColor:"#FF7518", width:'50px'}}/>
      </div>
      <div className='flex items-center'>
        <div>
          <h1 className='text-3xl font-bold ml-12 '>This page is under development</h1>
        </div>
      </div>
    </div>
  )
}

export default Settings
