import React from "react"; 
import { useContext } from "react";
import {v4 as uuid} from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";


const BudgetContext = React.createContext();

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

export function useBudgets() {
  return useContext(BudgetContext);

  //  {
  //   id:
  //   name:
  //   max:
  //  }
  //  {
  //   id:
  //   budgetId:
  //   amount:
  //   description:
  //  }
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense({ amount, description, budgetId }) {
    setExpenses((previousExpenses) => {
      return [
        ...previousExpenses,
        { id: uuid(), amount, description, budgetId },
      ];
    });
  }
  function addBudget({ name, max }) {
    setBudgets((previousBudgets) => {
      if (previousBudgets.find((budget) => budget.name === name)) {
        return previousBudgets;
      }
      return [...previousBudgets, { id: uuid(), name, max }];
    });
  }
  function deleteBudget({ id }) {
    setExpenses((previousExpenses) => {
      return previousExpenses.map((expense) => {
        if (expense.budgetId !== id) return expense;
        return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
      });
    });
    setBudgets((previousBudgets) => {
      return previousBudgets.filter((budget) => budget.id !== id);
    });
  }
  function deleteExpense({ id }) {
    setExpenses((previousExpenses) => {
      return previousExpenses.filter((budget) => budget.id !== id);
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
