import React from 'react'
import { CustomContentProgressBar } from '../progressBar/CustomContentProgressBar'
import { budgetCards } from '../data'
import './categoryCard.css'
const CategoryCard = (props) => {
    let circleCommonClasses ='h-1.5 w-1.5 bg-current rounded-full'
  return (
    <>
    <section className='flex flex-wrap mb-7 gap-3 ml-1'>
        {budgetCards.map((element,index)=>(
    <div key={index} className="flex justify-between m-1 bg-white rounded-md">
        <div className="info flex justify-around m-1 my-2">
            <div style={{width:70,height:70}} className="circle-bar flex justify-center items-center m-1">
                <CustomContentProgressBar icon={element.icon} color={element.color}/>
            </div>
            <div className="title-amount flex flex-col m-3 justify-center items-center">
                <div className="title mb-2"><h1 className='text-sm font-bold text-center'>{element.title}</h1></div>
                <div className="amount"><span className='font-bold'>50</span>/<span className='font-bold text-gray-400'>100</span></div>
            </div>
        </div>
        <div className="dots flex items-start ml-4 m-3">
            <div className={`${circleCommonClasses} mr-1`}></div>
            <div className={`${circleCommonClasses} `}></div>
        </div>
    </div>
))}
    </section>
    </>
  )
}

export default CategoryCard
