import React from 'react'
import './SavingsCard.css'
import { savingsCard } from './data'
import LinearProgressBar from '../progressBar/LinearProgressBar'
const SavingsCard = () => {
    let circleCommonClasses ='h-1.5 w-1.5 bg-current rounded-full';
    let percentage=80
  return (
   <section className='savings-card flex gap-3 ml-1'>
    
{savingsCard.map((element,index)=>(
    
    <div key={index} className="flex-col justify-between m-1 bg-white rounded-md">
        <div className='flex-col justify-center items-center'>
        <div className="info flex justify-around m-1 my-1">
            <div style={{width:70,height:70}} className="circle-bar flex justify-center items-center m-1">
                <img src={element.icon} alt="" />
            </div>
            <div className="title-amount flex flex-col mt-3 ml-2 mr-3 justify-center items-center">
                <div className="title mb-2"><h1 className='text-sm font-bold'>{element.title}</h1></div>
                <div className="amount"><span className='font-bold'>50</span>/<span className='font-bold text-gray-400'>100</span></div>
            </div>
        <div className="dots flex items-start ml-5 m-3">
            <div className={`${circleCommonClasses} mr-1`}></div>
            <div className={`${circleCommonClasses} `}></div>
        </div>
        </div>
        </div>
        <div className='flex mb-3 ml-3'><LinearProgressBar bgcolor={element.color} progress={percentage}  height={10}/></div>
    </div>
))}
   </section>
  )
}

export default SavingsCard
