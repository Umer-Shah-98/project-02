import React from 'react'
import TitleWithButton from './titleWithButton/TitleWithButton'

const Component = () => {
    let title =<div ><select className='w-20' name="month" id=""></select></div> ;
    let color = 'black'
  return (
    <div className='flex justify-between'>
      <div className='ml-5'><h1 className='font-bold'>Home</h1></div>
      <div className='-mt-5'><TitleWithButton title={title} color={color}/></div>
      
    </div>
  )
}

export default Component
