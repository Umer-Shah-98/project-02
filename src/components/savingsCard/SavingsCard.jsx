import React from "react";
import { CustomContentProgressBar } from "../progressBar/CustomContentProgressBar";
import { currencyFormatter } from "../../utils";
import { useBudgets } from "../budgetContext/BudgetContext";
import "./savingsCard.css";
import AddSavingModal from "../addSavingsModal/AddSavingModal";
const SavingsCard = ({
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
  defaultSavingId,
  onAddSavingClick,
  showAddSavingModal,
  handleCloseAddSavingModal,
}) => {
  const { savings, savingId, deleteSavings } = useBudgets();
  const classNames = [];
  let textColor;
  let warning;
  if (amount >= max) {
    classNames.push("bg-green-600/50");
    textColor = "text-green-900";
    warning = "You are in loss";
  } else {
    classNames.push("bg-white");
    textColor = "text-gray-400";
  }
  const saving = savings.find((saving) => saving.id === savingId);
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
              <div className="title mb-2 mt-2">
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
          <div className="dots flex flex-col items-start ml-1">
            <AddSavingModal
              buttonName={"Add"}
              handleOpen={onAddSavingClick}
              showAddSavingModal={showAddSavingModal}
              handleClose={handleCloseAddSavingModal}
              defaultSavingId={defaultSavingId}
            />
            {/* <div>
              <button
                className="text-white bg-red-600 active:bg-yellow-700 font-bold uppercase text-sm px-3 py-2 rounded  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => {
                  deleteSavings(saving);
                  handleCloseAddSavingModal();
                }}
              >
                Del
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SavingsCard;
