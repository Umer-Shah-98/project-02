// import React, { useState, useRef } from "react";
// import {
//   UNCATEGORIZED_BUDGET_ID,
//   useBudgets,
// } from "../budgetContext/BudgetContext";
// import UncategorizedBudgetCard from "../uncategorizedBudgetCard/UncategorizedBudgetCard";
// const ViewExpensesButton = ({
//   budgetId,
//   style,
//   color,
//   buttonName,
//   handleOpenExpenseModal,
//   handleCloseExpenseModal,
//   showExpenseModal,
//   defaultBudgetId,
// }) => {
//   const { budgets, deleteBudget, deleteExpense } = useBudgets();
//   const budget =
//     UNCATEGORIZED_BUDGET_ID === budgetId
//       ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
//       : budgets.find((b) =>b.id === budgetId);ddExpe
//   // const [showModal, setShowModal] = useState(false);
//   // function handleClose() {
//   //   setShowModal(false);
//   // }
//   // function handleOpen() {
//   //   setShowModal(true);
//   // }
//   // const descriptionRef = useRef();
//   // const amountRef = useRef();
//   // const budgetIdRef = useRef();
//   // function handleSubmit(e) {
//   //   console.log("called");
//   //   e.preventDefault();
//   //   addExpense({
//   //     description: descriptionRef.current.value.toUpperCase(),
//   //     amount: parseFloat(amountRef.current.value),
//   //     budgetId: budgetIdRef.current.value,
//   //   });
//   //   handleClose();
//   // }
//   return (
//     <div>
//       <div className="categories flex">
//         {/* <div className="title-btn m-2 flex justify-baseline"> */}
//         {/* <h1 className="text-lg font-bold text-center mt-1">{props.title}</h1> */}
//         <button
//           type="button"
//           style={style}
//           className={`text-black text-center bg-${color} hover:bg-currentColor font-bold rounded-md text-lg px-2 mt-2 py-1 mr-2 mb-2`}
//           // onClick={() => {
//           //   handleOpen();
//           // }}
//           onClick={handleOpenExpenseModal}
//         >
//           {buttonName}
//         </button>
//         {/* </div> */}
//       </div>
//       {showExpenseModal ? (
//         <>
//           <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
//             <div
//               className="relative w-auto my-6 mx-auto max-w-3xl"
//               style={{ width: "500px" }}
//             >
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
//                   <h3 className="text-xl font=semibold">
//                     Expenses Details - {budget.name}
//                   </h3>
//                   {budgetId !== UNCATEGORIZED_BUDGET_ID && (
//                     <button
//                       className="text-white bg-red-600 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
//                       type="button"
//                       onClick={() => {
//                         deleteBudget(budget);
//                         handleCloseExpenseModal();
//                       }}
//                     >
//                       Delete
//                     </button>
//                   )}
//                   <button
//                     className="bg-transparent border-0 text-black float-right"
//                     onClick={handleCloseExpenseModal}
//                   >
//                     <span className="text-black opacity-7 h-8 w-10 text-lg block bg-gray-400 py-0 rounded-full">
//                       x
//                     </span>
//                   </button>
//                 </div>
//                 <div className="relative p-6 flex-auto">
//                   {/* <form
                    
//                     className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
//                   >
//                     <label className="block text-black text-sm font-bold m-2">
//                       Amount
//                     </label>
//                     <input
//                       type="number"
//                       ref={amountRef}
//                       min={0}
//                       step={0.01}
//                       required
//                       className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
//                     />
//                     <label className="block text-black text-sm font-bold m-2">
//                       Budget
//                     </label>
//                     <select
//                       className="w-full py-2 px-1"
//                       defaultValue={defaultBudgetId}
//                       ref={budgetIdRef}
//                       name=""
//                       id=""
//                     >
//                       <option
//                         value={UNCATEGORIZED_BUDGET_ID}
//                         key={UNCATEGORIZED_BUDGET_ID}
//                       >
//                         Uncategorized
//                       </option>
//                       {budgets.map((budget) => (
//                         <option key={budget.id} value={budget.id}>
//                           {budget.name}
//                         </option>
//                       ))}
//                     </select> */}
//                     <div className="flex items-center justify-end p-1 mt-3 border-t border-solid border-blueGray-200 rounded-b">
//                       <button
//                         className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
//                         type="button"
//                         onClick={handleCloseExpenseModal}
//                       >
//                         Close
//                       </button>
//                       {/* <button
//                         className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
//                         type="submit"
//                         // onClick={() => setShowModal(false)}
//                       >
//                         Add
//                       </button> */}
//                     </div>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : null}
//     </div>
//   );
// };

// export default ViewExpensesButton;
