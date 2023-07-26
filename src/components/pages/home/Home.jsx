import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../navBar/NavBar";
import TitleWithButton from "../../addBudgetModal/AddBudgetModal";
import CategoryCard from "../../categoryCard/CategoryCard";
import SavingsCard from "../../savingsCard/SavingsCard";
import ViewExpensesCard from "../../expenseCard/ViewExpensesCard";
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
import UncategorizedBudgetCard from "../../uncategorizedCards/UncategorizedBudgetCard";
import TotalCard from "../../totalCard/TotalCard";
import ViewExpensesModal from "../../viewExpensesModal/ViewExpensesModal";
import AddExpenseModal from "../../addExpenseModal/AddExpenseModal";
import UncategorizedExpenseCard from "../../uncategorizedCards/UncategorizedExpenseCard";
import { CustomContentProgressBar } from "../../progressBar/CustomContentProgressBar";
const Home = () => {
  let progressPercentage = 50;
  const { budgets, getBudgetExpenses } = useBudgets();

  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showViewExpensesModal, setShowViewExpensesModal] = useState(false);
  const [showViewExpensesModalBudgetId, setShowViewExpensesModalBudgetId] =
    useState();
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] =
    useState();
  function handleOpen(budgetId) {
    setShowModal(true);
    setShowAddExpenseModalBudgetId(budgetId);
    console.log(" handle open called");
  }
  function handleClose() {
    setShowModal(false);
  }

  function handleOpenBudgetModal() {
    setShowBudgetModal(true);
    console.log("called");
  }
  function handleCloseBudgetModal() {
    setShowBudgetModal(false);
  }

  function handleOpenViewExpenseModal(budgetId) {
    setShowViewExpensesModal(true);
    setShowViewExpensesModalBudgetId(budgetId);
    console.log(" expense open called");
  }
  function handleCloseViewExpenseModal() {
    setShowViewExpensesModal(false);
    console.log("close expense called");
  }

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
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
  return (
    <>
      <div className=" m-5 grid grid-cols-[4%_72%_23%] gap-2 con">
        <div className="col-1 rounded-md flex justify-center items-center">
          <NavBar color={"white"} />
        </div>
        <div className="col-2 rounded-md">
          <div className="flex justify-between">
            <div className="m-2 mt-3 text-lg font-bold">
              <h2 className="ml-5 text-xl font-bold">HOME</h2>
            </div>
            <div className="mr-8">
              <Component />
            </div>
          </div>
          <div>
            <TotalCard/>
          </div>
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
          <div className="flex flex-wrap m-5 relative overflow-hidden">
            <div className="flex justify-between absolute top left w-full h-full">
              <button
                onClick={movePrev}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 w-full"
            >
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
                  color = randomProperty(otherColors);
                  icon = randomProperty(otherIcons);
                }
                return (
                  <div key={index} className="flex flex-wrap ">
                    <CategoryCard
                      info={{ marginLeft: 20 }}
                      trailColor={"#D3D3D3"}
                      style={{ width: 70, height: 70 }}
                      imageSize={{ width: 70, height: 70 }}
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
                      size={{ width: 220, height: 110 }}
                    />
                  </div>
                );
              })}
              <UncategorizedBudgetCard
                size={{ marginRight: 25 }}
                icon={UncategorizedIcon}
                onAddExpenseClick={() => handleOpen(UNCATEGORIZED_BUDGET_ID)}
                handleClose={handleClose}
                defaultBudgetId={showAddExpenseModalBudgetId}
                showModal={showModal}
              />
            </div>
          </div>
          <div className="mt-10 mb-0 savings-categories m-5">
            <TitleWithButton
              title="Your Savings Goals"
              color={"white"}
              buttonName={"+"}
            />
          </div>
          <div className="flex flex-wrap m-5">
            <SavingsCard amount={35000} max={50000} />
          </div>
        </div>
        <div className="col-3 rounded-lg overflow-y-auto">
          <div className="overflow-y-auto">
          <div className='overflow-y-auto'>
            {budgets.map((budget, index) => {
              let color, icon;
              const getIcon = (icons) => {
                if (budget.name === "Food") {
                  // color = iconColors.food.color;
                  icon = icons.food.icon;
                } else if (budget.name === "Health") {
                  // color = iconColors.health.color;
                  icon = icons.health.icon;
                } else if (budget.name === "Education") {
                  // color = iconColors.education.color;
                  icon = icons.education.icon;
                } else if (budget.name === "Utility Bills") {
                  // color = iconColors.bills.color;
                  icon = icons.bills.icon;
                } else if (budget.name === "Transport") {
                  // color = iconColors.transport.color;
                  icon = icons.transport.icon;
                } else {
                  // color = iconColors.other.color;
                  color = randomProperty(otherColors);
                  icon = randomProperty(otherIcons);
                }
                return icon;
              };
              icon = getIcon(iconColors);
              return (
                <div key={index} className="mx-2 my-2">
                  <ViewExpensesCard
                    icon={icon}
                    title={budget.name}
                    style={{fontSize:16,}}
                    size={{ background: "white", width: 325, }}
                    amount={"200"}
                    imageSize={{width:50,height:60}}
                    showViewExpensesModal={showViewExpensesModal}
                    budgetId={showViewExpensesModalBudgetId}
                    onViewExpenseClick={() => handleOpenViewExpenseModal(budget.id)}
                    handleCloseViewExpenseModal={handleCloseViewExpenseModal}
                  />
                </div>
              );
            })}
            <UncategorizedExpenseCard
                icon={UncategorizedIcon}
                onViewExpenseClick={() => handleOpenViewExpenseModal(UNCATEGORIZED_BUDGET_ID)}
                handleCloseViewExpenseModal={handleCloseViewExpenseModal}
                budgetId={showViewExpensesModalBudgetId}
                showViewExpensesModal={showViewExpensesModal}
                size={{ background: "white", width: 320, }}
                imageSize={{width:50,height:50,marginLeft:10}}
              
                
                />
          </div>
          </div>
          {/*//logic for fetching color and icon corresponding to titles.
              let color, icon;
              const getIcon = (icons) => {
                if (budget.name === "Food") {
                  // color = iconColors.food.color;
                  icon = icons.food.icon;
                } else if (budget.name === "Health") {
                  // color = iconColors.health.color;
                  icon = icons.health.icon;
                } else if (budget.name === "Education") {
                  // color = iconColors.education.color;
                  icon = icons.education.icon;
                } else if (budget.name === "Utility Bills") {
                  // color = iconColors.bills.color;
                  icon = icons.bills.icon;
                } else if (budget.name === "Transport") {
                  // color = iconColors.transport.color;
                  icon = icons.transport.icon;
                } else {
                  // color = iconColors.other.color;
                  color = randomProperty(otherColors);
                  icon = randomProperty(otherIcons);
                }
                return icon;
              };
            icon = getIcon(iconColors);*/}
        </div>
      </div>
      <div className="foot m-5">
        <Footer />
      </div>
    </>
  );
};

export default Home;
