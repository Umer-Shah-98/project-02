import React from 'react'
import './SavingsCard.css'
import { savingsCard } from './data'
import LinearProgressBar from '../progressBar/LinearProgressBar'
import { currencyFormatter } from '../../utils'
const SavingsCard = ({amount,max}) => {
    let circleCommonClasses ='h-1.5 w-1.5 bg-current rounded-full';
    
    // const progress = (amount*100)/max;
  return (
   <section className='savings-card flex flex-wrap gap-3 ml-1'>
    
{savingsCard.map((element,index)=>
{   let progress =((element.amount*100)/element.max).toFixed(2)
    let classNames=[];
    let textColor;
    if(progress>80){
        classNames.push('bg-green-700/70')
        textColor='text-green-900'
    }else{
        classNames.push('bg-white');
        textColor='text-gray-400'
    }
return (<div key={index} className={`flex-col justify-between m-1 ${classNames.join(" ")} rounded-md`}>
        <div className='flex-col justify-between'>
        <div className="info flex justify-around m-1 my-1">
            <div style={{width:60,height:60}} className="circle-bar flex justify-center items-center m-1">
                <img src={element.icon} alt="" />
            </div>
            <div className="title-amount flex flex-col mt-3 ml-2 mr-3 justify-center items-center">
                <div className="title mb-2"><h1 className='text-sm font-bold'>{element.title}</h1></div>
                <div className="amount"><span className='font-bold text-xs'>{currencyFormatter.format(element.amount)}</span>/<span className={`font-bold text-xs ${textColor}`}>{currencyFormatter.format(element.max)}</span></div>
            </div>
        <div className="dots flex items-start ml-3">
            <div className={`${circleCommonClasses} mr-1 my-2`}></div>
            <div className={`${circleCommonClasses} my-2 mr-1`}></div>
        </div>
        </div>
        </div>
        <div className='flex mb-3.5 ml-3 mt-3'><LinearProgressBar bgcolor={element.color} progress={progress}  height={8}/></div>
    </div>
)})}
   </section>
  )
}

export default SavingsCard
