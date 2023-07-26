import React from 'react'
import CategoryCard from '../categoryCard/CategoryCard'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../budgetContext/BudgetContext'

const UncategorizedBudgetCard=(props)=> {
  const {getBudgetExpenses} =useBudgets()
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if(amount===0)return null
  return (
    <div>
      <CategoryCard amount={amount} title={'Uncategorized'} {...props}/>
    </div>
  )
}
export default UncategorizedBudgetCard;