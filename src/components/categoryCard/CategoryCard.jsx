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
  amount,
  max,
  icon,
  color,
  title,
  progress,
  defaultBudgetId,
  onClickAddExpenseModal,
}) => {
  const [showModal, setShowModal] = useState(false);
  function handleClose() {
    setShowModal(false);
  }
  function handleOpen() {
    setShowModal(true);
    console.log("called");
  }
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
      <section className={`flex flex-wrap mb-7 gap-2 ml-0.5`}>
        {/* {budgetCards.map((element,index)=>( */}
        <div
          className={`flex justify-between m-0.5 ${classNames.join(
            " "
          )} rounded-md`}
        >
          <div className="info flex justify-around m-1 my-2">
            <div
              style={{ width: 70, height: 70 }}
              className="circle-bar flex justify-center items-center mt-2 m-1"
            >
              <CustomContentProgressBar
                icon={icon}
                color={color}
                progress={progress}
              />
            </div>
            <div className="title-amount flex flex-col m-1 justify-center items-center">
              <div className="title mb-2 ">
                <h3 className="text-sm font-bold text-justify">{title}</h3>
              </div>
              <div className="amount">
                <span className="font-bold text-xs break-all">
                  {currencyFormatter.format(amount)}
                </span>
                /
                <span
                  className={`font-bold whitespace-nowrap text-xs ${textColor}`}
                >
                  {currencyFormatter.format(max)}
                </span>
              </div>
            </div>
          </div>
          <div className="dots flex items-start ml-2">
            <AddExpenseModal
              buttonName={"+"}
              handleOpen={() => {
                handleOpen();
              }}
              showModal={showModal}
              handleClose={handleClose}
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
