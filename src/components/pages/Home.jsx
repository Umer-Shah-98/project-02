import React from 'react'
import NavBar from '../NavBar'
import TitleWithButton from '../titleWithButton/TitleWithButton'
import CategoryCard from '../categoryCard/CategoryCard'
import SavingsCard from '../savingsCard/SavingsCard'
import Footer from '../Footer'
import './home.css'
import Component from '../Component'
const Home = () => {
    let progressPercentage = 50;
  return (
    <>
         <div className=" m-5 grid grid-cols-[4%_72%_23%] gap-2 con">
        <div className="col-1 rounded-md flex justify-center items-center">
          <NavBar color={{ backgroundColor: "white" }} />
        </div>
        <div className="col-2 rounded-md">
          <Component/>
          <div className='budgeting-categories'>
            <TitleWithButton title='Budgeting Categories' color={'white'}/>
          </div>
            <div className="flex flex-wrap ">
              <CategoryCard amount={400000} max={100000}/>
            </div>
            <div className='mt-10 mb-0 savings-categories'>
              <TitleWithButton title='Your Savings Goals' color={'white'}/>
            </div>
            <div className="flex flex-wrap">
              <SavingsCard amount={500000} max={100000}/>
            </div>
        </div>
        <div className="col-3 rounded-md"></div>
      </div>
      <div className="foot m-4">
        <Footer />
      </div>
      <div className="rounded-md m-6 h-1 w-20 bg-gray-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
          } rounded-2xl`}
        ></div>
      </div>
    </>
  )
}

export default Home
