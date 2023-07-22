import React, { useState, useRef } from "react";
import { CustomContentProgressBar } from "../progressBar/CustomContentProgressBar";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../budgetContext/BudgetContext";
// import { budgetCards } from './data'
import "./categoryCard.css";
import { currencyFormatter } from "../../utils";
import AddExpenseModal from "../addExpenseModal/AddExpenseModal";
const CategoryCard = ({
  info,
  available,
  size, 
  trailColor,
  style,
  amount,
  max,
  icon,
  color,
  title,
  progress,
  defaultBudgetId,
  onAddExpenseClick,
  showModal,
  handleClose
}) => {
  // const [showModal, setShowModal] = useState(false);
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] = useState();
  // function handleClose() {
  //   setShowModal(false);
  // }
  // function handleOpen(budgetId) {
  //   setShowModal(true);
  //   setShowAddExpenseModalBudgetId(budgetId)
  //   console.log("called");
  // }
  //   let circleCommonClasses = "h-1.5 w-1.5 bg-current rounded-full";
  // const progress = (amount*100)/max;
  const classNames = [];
  let textColor;
  if (amount > max) {
    classNames.push("bg-red-600/50");
    textColor = "text-red-900";
  } else {
    classNames.push("bg-white");
    textColor = "text-gray-400";
  }
  return (
    <>
      <section className={`flex flex-wrap mb-5 gap-2 ml-0.5`}>
        {/* {budgetCards.map((element,index)=>( */}
        <div style={size}
          className={`flex justify-between m-0.5 ${classNames.join(
            " "
          )} rounded-lg`}
        >
          <div className="info flex justify-around m-1 my-2">
           <div
              className="circle-bar flex justify-center items-center mt-2 m-1"
            >
             {max?(  <CustomContentProgressBar
                icon={icon}
                color={color}
                progress={progress}
                available={available}
                trailColor={trailColor}
                // style={{width:70,height:70}}
                style={style}
              />):(<div style={{width:70,height:70}} className="mb-3"><img src={icon} alt="icon" /></div>)}
            </div>
            <div style={info} className="title-amount flex flex-col m-1 justify-center items-center">
              <div className="title mb-2 ">
                <h3 className="text-sm font-bold text-justify">{title}</h3>
              </div>
             {!size &&(<div className="amount">
                <span className="font-bold text-xs break-all">
                  {currencyFormatter.format(amount)}
                </span>
                
               {max && <span
                  className={`font-bold whitespace-nowrap text-xs ${textColor}`}
                >
                  /{currencyFormatter.format(max)}
                </span>}
              </div>)}
            </div>
          </div>
          <div className="dots flex items-start ml-2">
            <AddExpenseModal
              buttonName={"+"}
              handleOpen={onAddExpenseClick}
              showModal={showModal}
              handleClose={handleClose}
              defaultBudgetId={defaultBudgetId}
            />
            {/* <div className={`${circleCommonClasses} my-2 mr-2`}></div> */}
          </div>
        </div>
        {/* ))} */}
      </section>
    </>
  );
};

export default CategoryCard;
