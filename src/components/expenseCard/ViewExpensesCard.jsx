import React, { useState, useRef } from "react";
import { CustomContentProgressBar } from "../progressBar/CustomContentProgressBar";
import { currencyFormatter } from "../../utils";
import ViewExpensesModal from "../viewExpensesModal/ViewExpensesModal";
const ViewExpensesCard = ({
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
  onViewExpenseClick,
  showViewExpensesModal,
  handleCloseViewExpenseModal,
  budgetId,
  cardSize,
  imageSize,
}) => {
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
      <section style={cardSize} className={`flex flex-wrap  mb-5 gap-4 rounded-lg`}>
        {/* {budgetCards.map((element,index)=>( */}
        <div
          style={size}
          className={`flex justify-between ${classNames.join(" ")} rounded-lg`}
        >
          <div className="info flex justify-around m-1 my-2">
            <div className="circle-bar flex justify-center items-center mt-2 m-1"> 
                <div style={imageSize} className="mb-3">
                  <img src={icon} alt="icon" />
                </div>
            </div>
            <div
              style={info}
              className="title-amount flex flex-col m-1 justify-center items-center"
            >
              <div className="title mb-2 ">
                <h3 className="text-lg font-bold text-justify">{title}</h3>
              </div>
              {/* {!available && (
                <div className="amount">
                  {color && (
                    <div>
                      <span className="font-bold text-xs break-all">
                        {currencyFormatter.format(amount)}
                      </span>
                    </div>
                  )}
                  {max && (
                    <span
                      className={`font-bold whitespace-nowrap text-xs ${textColor}`}
                    >
                      /{currencyFormatter.format(max)}
                    </span>
                  )}
                </div>
              )} */}
            </div>
          </div>
          <div
            style={{ width: 127 }}
            className="flex justify-end  bg-inherit items-center"
          >
            <div
              style={{ width: 125 }}
              className=" flex items-center justify-center rounded-lg bg-gray-400 h-12 m-2 hover:bg-inherit"
            >
              <ViewExpensesModal
                buttonName={"View Expenses"}
                handleOpenViewExpenseModal={onViewExpenseClick}
                showViewExpensesModal={showViewExpensesModal}
                handleCloseViewExpenseModal={handleCloseViewExpenseModal}
                budgetId={budgetId}
                style={style}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewExpensesCard;
