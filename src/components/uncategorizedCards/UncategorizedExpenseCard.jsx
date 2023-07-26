import React from 'react'
import ViewExpensesCard from '../expenseCard/ViewExpensesCard'

const UncategorizedExpenseCard=(props)=> {
  return (
    <>
      <ViewExpensesCard cardSize={{marginLeft:5,}} title={"Uncategorized"} style={{fontSize:14,}} {...props}/>
      </>
  )
}
export default UncategorizedExpenseCard;