import React from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import { useBudgets } from "../budgetContext/BudgetContext";
import { currencyFormatter } from "../../utils";

export default function TotalCard(props) {
  let progressStyle = {
    width: 150,
    height: 150,
    left: 150,
    marginLeft: 50,
  };
  const { budgets, expenses } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budgets) => total + budgets.max, 0);
  // if(max===0)return null
  let warning, deficit;
  if(amount>max){
    warning='You are facing budget deficit of : ';
    deficit = `${(progress-100).toFixed(2)} %`;
  }
  let progress = (amount * 100) / max;
  let title = (
    <div>
      <div className="flex justify-around items-center mb-3">
        <div
          className="mr-5 w-4 h-4 text-center rounded-sm"
          style={{ background: "#D3D3D3" }}
        ></div>
        <div className="text-lg font-bold text-center">
          <h1>
            Available : <span>{currencyFormatter.format(max - amount)}</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-around items-center ">
        <div
          className="mr-5 w-4 h-4 text-center rounded-sm"
          style={{ background: "#FF0800" }}
        ></div>
        <div className="text-lg font-bold text-center">
          <h1>
            Expenses : <span>{currencyFormatter.format(amount)}</span>
          </h1>
        </div>
      </div>
      <div className="mt-8 text-xl">
        <h1>{warning}  {deficit}</h1>
      </div>
    </div>
  );
  let available = (
    <div className="text-center">
      <h1 className="font-semibold">Available</h1>
      <span className="font-bold">
        {currencyFormatter.format(max - amount)}
      </span>
      <div className="mt-2">
        <span className="font-semibold">Spent</span>
      </div>
    </div>
  );
  return (
    <>
      <div
        style={{ height: 200 }}
        className="grid m-5 grid-cols-[70%_25%] bg-inherit"
      >
        <CategoryCard
          trailColor={"#D3D3D3"}
          style={progressStyle}
          size={{ width: 600, height: 200 }}
          amount={amount}
          max={max}
          title={title}
          progress={progress.toFixed(2)}
          color={"#FF0800"}
          info={{ marginLeft: 100 }}
          available={available}
        />

        <div className="flex flex-col gap-4">
          <div
            style={{ height: 92 }}
            className="w-full bg-white rounded-lg ml-8"
          >
            <div className="m-4 ml-8">
              <div>
                <h1 className="text-lg font-bold">Monthly Budget</h1>
                <div className="mt-2">
                  <span className="font-bold m-3 text-green-600">
                    {currencyFormatter.format(max)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ height: 92 }}
            className="w-full  bg-white rounded-lg ml-8"
          >
            <div className="m-4 ml-8">
              <div>
                <h1 className="text-lg font-bold">Total Expenses</h1>
                <div className="mt-2">
                  <span className="font-bold m-3 text-green-600">
                    {currencyFormatter.format(amount)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
