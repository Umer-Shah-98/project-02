import React from 'react'
import CategoryCard from '../../categoryCard/CategoryCard'
import NavBar from '../../navBar/NavBar'
export default function Expenses() {
  return (
    <div className='flex'>
    <div>
      <NavBar style={{backgroundColor:"#FEBE10", width:'50px'}}/>
      </div>
      <div className='m-4'>
      <CategoryCard/>
      </div>
    </div>
  )
}
