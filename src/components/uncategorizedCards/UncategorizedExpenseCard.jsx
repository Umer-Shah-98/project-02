import React from "react";
import ViewExpensesCard from "../expenseCard/ViewExpensesCard";

const UncategorizedExpenseCard = (props) => {
  return (
    <>
      <ViewExpensesCard
        title={"Uncategorized"}
        style={{ fontSize: 14 }}
        {...props}
      />
    </>
  );
};
export default UncategorizedExpenseCard;
