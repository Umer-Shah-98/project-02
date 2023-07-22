import React, { useState } from "react";
import NavBar from "../../navBar/NavBar";
import TitleWithButton from "../../titleWithButton/TitleWithButton";
import CategoryCard from "../../categoryCard/CategoryCard";
import SavingsCard from "../../savingsCard/SavingsCard";
import UncategorizedIcon from "../../../assets/uncategorized-icon.png";
import Footer from "../../footer/Footer";
import "./home.css";
import Component from "../../Component";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../../budgetContext/BudgetContext";
import { iconColors, otherColors } from "./data.js";
import { otherIcons } from "./data.js";
import UncategorizedBudgetCard from "../../uncategorizedBudgetCard/UncategorizedBudgetCard";
import TotalCard from "../../totalCard/TotalCard";
const Home = () => {
  let progressPercentage = 50;
  const { budgets, getBudgetExpenses } = useBudgets();

  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] =
    useState();
  function handleOpen(budgetId) {
    setShowModal(true);
    setShowAddExpenseModalBudgetId(budgetId);
    console.log(" handle open called");
  }
  function handleCloseBudgetModal() {
    setShowBudgetModal(false);
  }
  function handleOpenBudgetModal() {
    setShowBudgetModal(true);
    console.log("called");
  }

  function handleClose() {
    setShowModal(false);
  }
 
  return (
    <>
      <div className=" m-5 grid grid-cols-[4%_72%_23%] gap-2 con">
        <div className="col-1 rounded-md flex justify-center items-center">
          <NavBar color={"white"} />
        </div>
        <div className="col-2 rounded-md">
          <div className="flex justify-between">
            <div className="m-2 mt-3 text-lg font-bold">
              <h2>HOME</h2>
            </div>
            <div>
              <Component />
            </div>
          </div>
          <div>
            <TotalCard/>
          </div>
          {/* <div style={{height:200}} className="grid bg-green-400 m-5 grid-cols-[70%_25%]">
          <div className="total-card">
            <TotalCard trailColor={'#FF5733'} />
          </div>
          <div className="flex flex-col gap-4">
            <div style={{height:90}} className="mr-20 bg-blue-600">
    Budget
            </div>
            <div style={{height:90}} className="mr-20 bg-blue-200">
    expenses
            </div>
          </div>
          </div> */}
          <div className="budgeting-categories m-5">
            <TitleWithButton
              title="Budgeting Categories"
              color={"white"}
              buttonName={"+"}
              handleOpenBudgetModal={handleOpenBudgetModal}
              handleCloseBudgetModal={handleCloseBudgetModal}
              showBudgetModal={showBudgetModal}
            />
          </div>
          <div className="flex flex-wrap m-5">
            {budgets.map((budget, index) => {
              const amount = getBudgetExpenses(budget.id).reduce(
                (total, expense) => total + expense.amount,
                0
              );
              const progress = (amount * 100) / budget.max;
              const randomProperty = (otherIcons) => {
                const keys = Object.keys(otherIcons);
                if (keys.length > 0) {
                    const index = Math.floor(keys.length * Math.random());
                    const key = keys[index];
                    const value = otherIcons[key];
                    return value;
                }
                return null;
            };
              //logic for fetching color and icon corresponding to titles.
              let color, icon;
              if (budget.name === "Food") {
                color = iconColors.food.color;
                icon = iconColors.food.icon;
              } else if (budget.name === "Health") {
                color = iconColors.health.color;
                icon = iconColors.health.icon;
              } else if (budget.name === "Education") {
                color = iconColors.education.color;
                icon = iconColors.education.icon;
              } else if (budget.name === "Utility Bills") {
                color = iconColors.bills.color;
                icon = iconColors.bills.icon;
              } else if (budget.name === "Transport") {
                color = iconColors.transport.color;
                icon = iconColors.transport.icon;
              } else {
                // color = iconColors.other.color;
                color = randomProperty(otherColors)
                icon = randomProperty(otherIcons)
              }
              return (
                <div key={index} className="flex flex-wrap ">
                  <CategoryCard
                    trailColor={"#D3D3D3"}
                    style={{ width: 70, height: 70 }}
                    amount={amount}
                    max={budget.max}
                    key={budget.id}
                    title={budget.name}
                    progress={progress.toFixed(1)}
                    color={color}
                    icon={icon}
                    onAddExpenseClick={() => handleOpen(budget.id)}
                    handleClose={handleClose}
                    defaultBudgetId={showAddExpenseModalBudgetId}
                    showModal={showModal}
                  />
                </div>
              );
            })}
            <UncategorizedBudgetCard
              icon={UncategorizedIcon}
              onAddExpenseClick={() => handleOpen(UNCATEGORIZED_BUDGET_ID)}
              handleClose={handleClose}
              defaultBudgetId={showAddExpenseModalBudgetId}
              showModal={showModal}
            />
          </div>
          <div className="mt-10 mb-0 savings-categories m-5">
            <TitleWithButton
              title="Your Savings Goals"
              color={"white"}
              buttonName={"+"}
            />
          </div>
          <div className="flex flex-wrap m-5">
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
