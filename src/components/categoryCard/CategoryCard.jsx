import React from 'react'
import { CustomContentProgressBar } from '../progressBar/CustomContentProgressBar'

const CategoryCard = (props) => {
    let circleCommonClasses ='h-1.5 w-1.5 bg-current rounded-full'
  return (
    <>
    <div className="card flex justify-between m-1 bg-white rounded-md">
        <div className="info flex justify-around m-1">
            <div style={{width:90,height:90}} className="circle-bar flex justify-center items-center m-2">
                <CustomContentProgressBar icon={props.icon} color={props.color}/>
            </div>
            <div className="title-amount flex flex-col m-3 justify-center items-center">
                <div className="title"><h1 className='text-lg font-bold'>{props.title}</h1></div>
                <div className="amount"><span className='font-bold'>50</span>/<span className='font-bold text-gray-400'>100</span></div>
            </div>
        </div>
        <div className="dots flex items-start ml-4 m-3">
            <div className={`${circleCommonClasses} mr-1`}></div>
            <div className={`${circleCommonClasses} `}></div>
        </div>
    </div>

    </>
  )
}

export default CategoryCard
