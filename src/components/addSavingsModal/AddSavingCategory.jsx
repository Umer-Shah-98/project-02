import React, { useRef } from "react";
import { useBudgets } from "../budgetContext/BudgetContext";
const AddSavingCategory = ({
  title,
  style,
  buttonName,
  showSavingModal,
  handleCloseSavingModal,
  handleOpenSavingModal,
}) => {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addSavings} = useBudgets();
  function handleSubmit(e) {
    console.log("called");
    e.preventDefault();
    addSavings({
      name:
        nameRef.current.value.slice(0, 1).toUpperCase() +
        nameRef.current.value.slice(1).toLowerCase(),
      max: parseFloat(maxRef.current.value),
    });
    handleCloseSavingModal();
  }
  return (
    <>
      <div className="m-2 flex justify-baseline">
        <h1 className="text-lg font-bold text-center mt-1">{title}</h1>
        <button
          type="button"
          style={style}
          className={`bg-white button-hover hover:bg-gray-200 font-bold rounded-md text-lg px-3 py-1 ml-4 mr-2 mb-2`}
          onClick={() => {
            handleOpenSavingModal();
            console.log("called");
          }}
        >
          {buttonName}
        </button>
      </div>
      {showSavingModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              style={{ width: "500px" }}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">New Saving Goal</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handleCloseSavingModal}
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
                      Name
                    </label>
                    <input
                      type="text"
                      ref={nameRef}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold m-2">
                      Allocated Amount
                    </label>
                    <input
                      type="number"
                      ref={maxRef}
                      min={0}
                      step={0.01}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <div className="flex items-center justify-end p-1 mt  - 3 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={handleCloseSavingModal}
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
    </>
  );
};

export default AddSavingCategory;














