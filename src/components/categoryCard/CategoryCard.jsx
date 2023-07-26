import React from "react";
import { CustomContentProgressBar } from "../progressBar/CustomContentProgressBar";
import { currencyFormatter } from "../../utils";
import AddExpenseModal from "../addExpenseModal/AddExpenseModal";
import './categoryCard.css'
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
  handleClose,
}) => {
  const classNames = [];
  let textColor;
  let warning;
  if (amount > max) {
    classNames.push("bg-red-600/50");
    textColor = "text-red-900";
    warning = "You are in loss";
  } else {
    classNames.push("bg-white");
    textColor = "text-gray-400";
  }
  return (
    <>
      <section className={`flex flex-wrap mb-5  gap-4 ml-0.5`}>
        <div
          style={size}
          className={`flex category-card justify-between m-0.5 ${classNames.join(
            " "
          )} rounded-lg`}
        >
          <div className="info flex justify-around my-2">
            <div className="flex justify-center items-center mt-2 ml-2">
              {max ? (
                <CustomContentProgressBar
                  icon={icon}
                  color={color}
                  progress={progress}
                  available={available}
                  trailColor={trailColor}
                  style={style}
                />
              ) : (
                icon && (
                  <div style={{ width: 70, height: 70 }} className="mb-3">
                    <img src={icon} alt="icon" />
                  </div>
                )
              )}
            </div>
            <div
              style={info}
              className="title-amount flex flex-col justify-center items-center"
            >
              <div className="title mb-2 mt-2 mr-1">
                <h3 className="text-xs font-bold ">{title}</h3>
              </div>
              {!available && (
                <div className="amount">
                  <div>
                    <span className="font-bold text-xs break-all">
                      {currencyFormatter.format(amount)}
                    </span>
                  </div>
                  {max && (
                    <span
                      className={`font-bold whitespace-nowrap text-xs ${textColor}`}
                    >
                      /{currencyFormatter.format(max)}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="dots flex items-start ml-1">
            <AddExpenseModal
              buttonName={"+"}
              handleOpen={onAddExpenseClick}
              showModal={showModal}
              handleClose={handleClose}
              defaultBudgetId={defaultBudgetId}
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryCard;
