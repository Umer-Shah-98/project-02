import React, { useState, useRef } from "react";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../budgetContext/BudgetContext";
const AddSavingModal = ({
  style,
  color,
  buttonName,
  handleOpen,
  handleClose,
  showAddSavingModal,
  defaultSavingId,
}) => {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const savingIdRef = useRef();
  const { addSavingProgress, savings } = useBudgets();
  function handleSubmit(e) {
    console.log("called");
    e.preventDefault();
    addSavingProgress({
      description:
        descriptionRef.current.value.slice(0, 1).toUpperCase() +
        descriptionRef.current.value.slice(1).toLowerCase(),
      amount: parseFloat(amountRef.current.value),
      savingId: savingIdRef.current.value,
    });
    handleClose();
  }
  return (
    <div>
      <div className="categories flex">
        <button
          type="button"
          style={style}
          className={`text-black text-center bg-gray-200 hover:bg-inherit font-bold rounded-md text-lg px-3 mt-2 py-1 mr-2 mb-2`}
          onClick={handleOpen}
        >
          {buttonName}
        </button>
      </div>
      {showAddSavingModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              style={{ width: "500px" }}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">New Savings Amount</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handleClose}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-lg block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                  >
                    <label className="block text-black text-sm font-bold m-2">
                      Description
                    </label>
                    <input
                      type="text"
                      ref={descriptionRef}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold m-2">
                      Amount
                    </label>
                    <input
                      type="number"
                      ref={amountRef}
                      min={0}
                      step={0.01}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold m-2">
                      Savings
                    </label>
                    <select
                      className="w-full py-2 px-1"
                      defaultValue={defaultSavingId}
                      ref={savingIdRef}
                      name=""
                      id=""
                    >
                      {/* <option
                        value={UNCATEGORIZED_BUDGET_ID}
                        key={UNCATEGORIZED_BUDGET_ID}
                      >
                        Uncategorized
                      </option> */}
                      {savings.map((saving) => (
                        <option key={saving.id} value={saving.id}>
                          {saving.name}
                        </option>
                      ))}
                    </select>
                    <div className="flex items-center justify-end p-1 mt-3 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={handleClose}
                      >
                        Close
                      </button>
                      <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AddSavingModal;
