import React from 'react'
import { CustomContentProgressBar } from '../progressBar/CustomContentProgressBar'
import { budgetCards } from './data'
import './categoryCard.css'
import { currencyFormatter } from '../../utils'
const CategoryCard = ({amount,max}) => {
    let circleCommonClasses ='h-1.5 w-1.5 bg-current rounded-full'
  return (
    <>
    <section className='flex flex-wrap mb-7 gap-2 ml-0.5 overflow-x-scroll'>
        {budgetCards.map((element,index)=>(
    <div key={index} className="flex justify-between m-0.5 bg-white rounded-md">
        <div className="info flex justify-around m-1 my-2">
            <div style={{width:60,height:60}} className="circle-bar flex justify-center items-center mt-2 m-1">
                <CustomContentProgressBar icon={element.icon} color={element.color}/>
            </div>
            <div className="title-amount flex flex-col m-1 justify-center items-center">
                <div className="title mb-2"><h1 className='text-sm font-bold text-center'>{element.title}</h1></div>
                <div className="amount"><span className='font-bold text-xs break-all'>{currencyFormatter.format(amount)}</span>/<span className='font-bold whitespace-nowrap text-xs text-gray-400'>{currencyFormatter.format(max)}</span></div>
            </div>
        </div>
        <div className="dots flex items-start ml-2">
            <div className={`${circleCommonClasses} mr-1 my-2`}></div>
            <div className={`${circleCommonClasses} my-2 mr-2`}></div>
        </div>
    </div>
))}
    </section>
    </>
  )
}

export default CategoryCard
