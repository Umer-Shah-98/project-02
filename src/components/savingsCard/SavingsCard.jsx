import React from 'react'
import './SavingsCard.css'
import { savingsCard } from './data'
import LinearProgressBar from '../progressBar/LinearProgressBar'
import { currencyFormatter } from '../../utils'
const SavingsCard = ({amount,max}) => {
    let circleCommonClasses ='h-1.5 w-1.5 bg-current rounded-full';
    let percentage=80
  return (
   <section className='savings-card flex gap-3 ml-1'>
    
{savingsCard.map((element,index)=>(
    
    <div key={index} className="flex-col justify-between m-1 bg-white rounded-md">
        <div className='flex-col justify-between'>
        <div className="info flex justify-around m-1 my-1">
            <div style={{width:60,height:60}} className="circle-bar flex justify-center items-center m-1">
                <img src={element.icon} alt="" />
            </div>
            <div className="title-amount flex flex-col mt-3 ml-2 mr-3 justify-center items-center">
                <div className="title mb-2"><h1 className='text-sm font-bold'>{element.title}</h1></div>
                <div className="amount"><span className='font-bold text-xs'>{currencyFormatter.format(amount)}</span>/<span className='font-bold text-xs text-gray-400'>{currencyFormatter.format(max)}</span></div>
            </div>
        <div className="dots flex items-start ml-3">
            <div className={`${circleCommonClasses} mr-1 my-2`}></div>
            <div className={`${circleCommonClasses} my-2 mr-1`}></div>
        </div>
        </div>
        </div>
        <div className='flex mb-3.5 ml-3 mt-3'><LinearProgressBar bgcolor={element.color} progress={percentage}  height={8}/></div>
    </div>
))}
   </section>
  )
}

export default SavingsCard
