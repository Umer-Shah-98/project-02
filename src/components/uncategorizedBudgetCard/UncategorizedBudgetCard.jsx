import React from 'react'
import CategoryCard from '../categoryCard/CategoryCard'
import UncategorizedIcon from '../../assets/uncategorized-icon.png'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../budgetContext/BudgetContext'

export default function UncategorizedBudgetCard(props) {
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
