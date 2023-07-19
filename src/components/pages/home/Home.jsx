import React,{useState} from "react";
import NavBar from "../../navBar/NavBar";
import TitleWithButton from "../../titleWithButton/TitleWithButton";
import CategoryCard from "../../categoryCard/CategoryCard";
import SavingsCard from "../../savingsCard/SavingsCard";
import Footer from "../../footer/Footer";
import "./home.css";
import Component from "../../Component";
import { useBudgets } from "../../budgetContext/BudgetContext";
import {iconColors} from './data.js'
const Home = () => {
  let progressPercentage = 50;
  const { budgets, getBudgetExpenses } = useBudgets();

  const [showBudgetModal, setShowBudgetModal] = useState(false);

  function handleCloseBudgetModal() {
    setShowBudgetModal(false);
  }
  function handleOpenBudgetModal() {
    setShowBudgetModal(true);
    console.log('called');
  }

  // let classNames=[];
  // let textColor;
  // if(budgets.amount>budgets.max){
  //     classNames.push('bg-red-600/50');
  //     textColor='text-red-900'
  // }else{
  //     classNames.push('bg-white');
  //     textColor='text-gray-400'
  // }
  return (
    <>
      <div className=" m-5 grid grid-cols-[4%_72%_23%] gap-2 con">
        <div className="col-1 rounded-md flex justify-center items-center">
          <NavBar color={"white"} />
        </div>
        <div className="col-2 rounded-md">
          <div  className="flex justify-between">
            <div className="m-2 mt-3 text-lg font-bold">
              <h2>HOME</h2>
              </div>
              <div>
          <Component />
              </div>
            </div>
          <div className="budgeting-categories">
            <TitleWithButton title="Budgeting Categories" color={"white"} buttonName={'+'} handleOpenBudgetModal={handleOpenBudgetModal} handleCloseBudgetModal={handleCloseBudgetModal} showBudgetModal={showBudgetModal} />
          </div>
          <div className="flex flex-wrap">
          {budgets.map((budget, index) => {
            const amount=getBudgetExpenses(budget.id).reduce((total, expense)=>total+expense.amount,0)
            const progress = (amount* 100) / budget.max;
//logic for fetching color and icon corresponding to titles.            
            let color,icon;
            if(budget.name==='Food'){color=iconColors.food.color;icon=iconColors.food.icon}
            else if(budget.name==='Health'){color=iconColors.health.color;icon=iconColors.health.icon}
            else if(budget.name==='Education'){color=iconColors.education.color;icon=iconColors.education.icon}
            else if(budget.name==='Utility Bills'){color=iconColors.bills.color;icon=iconColors.bills.icon}
            else if(budget.name==='Transport'){color=iconColors.transport.color;icon=iconColors.transport.icon}
            else{color=iconColors.other.color;icon=iconColors.other.icon}
            return(
            <div key={index} className="flex flex-wrap ">
              <CategoryCard
                amount={amount}
                max={budget.max}
                key={budget.id}
                title={budget.name}
                progress={progress.toFixed(1)}
                color={color}
                icon={icon}
              />
            </div>
            )
          })}
          </div>
          <div className="mt-10 mb-0 savings-categories">
            <TitleWithButton title="Your Savings Goals" color={"white"} buttonName={'+'} />
          </div>
          <div className="flex flex-wrap">
            <SavingsCard amount={50000} max={1000} />
          </div>
        </div>
        <div className="col-3 rounded-md"></div>
      </div>
      <div className="foot m-4">
        <Footer />
      </div>
      {/* <div className="rounded-md m-6 h-1 w-20 bg-gray-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
          } rounded-2xl`}
        ></div>
      </div> */}
    </>
  );
};

export default Home;
