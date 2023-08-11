import React, { useState, useRef } from "react";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../budgetContext/BudgetContext";
import { currencyFormatter } from "../../utils";
const ViewExpensesModal = ({
  style,
  color,
  budgetId,
  buttonName,
  handleOpenViewExpenseModal,
  handleCloseViewExpenseModal,
  showViewExpensesModal,
}) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();
  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);
  return (
    <div>
      <div className="categories flex">
        <button
          type="button"
          style={style}
          className={`text-black text-center hover:bg-inherit font-bold rounded-md text-sm px-2 py-1`}
          onClick={handleOpenViewExpenseModal}
        >
          {buttonName}
        </button>
      </div>
      {showViewExpensesModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none my-5">
            <div
              className="relative w-auto h-full my-6 mx-auto max-w-3xl rounded-lg"
              style={{ width: "500px" }}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
                <div className="flex items-center justify-between bg-white p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl font-bold">
                    Expenses Details - {budget?.name}
                  </h3>
                  {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                    <button
                      className="text-white bg-red-600 active:bg-yellow-700 ml-10 font-bold uppercase text-sm px-3 py-2 rounded  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => {
                        deleteBudget(budget);
                        handleCloseViewExpenseModal();
                      }}
                    >
                      Delete
                    </button>
                  )}
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handleCloseViewExpenseModal}
                  >
                    <span className="text-black opacity-7 h-8 w-8 text-lg block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  {expenses.map((expense) => {
                    return (
                      <div key={expense.id}>
                        <div className="flex justify-between my-2">
                          <div className="text-lg ml-1">
                            {expense.description}
                          </div>
                          <div className="flex items-center">
                            <div className="mx-8 text-lg font-bold">
                              {currencyFormatter.format(expense.amount)}
                            </div>
                            <div>
                              <button
                                onClick={() => deleteExpense(expense)}
                                className="hover:bg-red-600 rounded-md w-8 text-lg font-bold"
                              >
                                &times;
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="h-0.5 bg-gray-400">
                          <hr />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ViewExpensesModal;
