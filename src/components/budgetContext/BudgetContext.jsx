import React from "react";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
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
  const [savings, setSavings] = useLocalStorage("savings", []);
  const [savingProgress, setSavingProgress] = useLocalStorage(
    "savingProgress",
    []
  );
  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function getSavingsHistory(savingId) {
    return savingProgress.filter((saving) => saving.savingId === savingId);
  }
  function addBudget({ name, max }) {
    setBudgets((previousBudgets) => {
      if (previousBudgets.find((budget) => budget.name === name)) {
        return previousBudgets;
      }
      return [...previousBudgets, { id: uuid(), name, max }];
    });
  }

  function addExpense({ amount, description, budgetId }) {
    setExpenses((previousExpenses) => {
      return [
        ...previousExpenses,
        { id: uuid(), amount, description, budgetId },
      ];
    });
  }

  function addSavings({ name, max }) {
    setSavings((previousSavings) => {
      if (previousSavings.find((saving) => saving.name === name)) {
        return previousSavings;
      }
      return [...previousSavings, { id: uuid(), name, max }];
    });
  }

  function addSavingProgress({ amount, description, savingId }) {
    setSavingProgress((previousSavingProgress) => {
      return [
        ...previousSavingProgress,
        { id: uuid(), amount, description, savingId },
      ];
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
  function deleteSavings({ id }) {
    // setBudgets((previousBudgets) => {
    //   return previousBudgets.map((budget) => {
    //     // return budget;
    //     return { ...budget, budgetId: UNCATEGORIZED_BUDGET_ID };
    //   });
    // });
    setSavings(([previousSavings]) => {
      return [previousSavings].filter((saving) => saving.id !== id);
    });
  }

  // function addSaving({ amount, description, savingId }) {
  //   setSavings((previousSavings) => {

  //     if(previousSavings.find((saving)=>saving.id===savingId)){
  //       return previousSavings;
  //     }
  //     return [
  //       ...previousSavings,
  //       { id: uuid(), amount, description, savingId },
  //     ];
  //   });
  // }

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        savings,
        savingProgress,
        getBudgetExpenses,
        addBudget,
        addExpense,
        deleteBudget,
        deleteExpense,
        addSavings,
        addSavingProgress,
        getSavingsHistory,
        deleteSavings,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
