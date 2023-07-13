import React from "react";

const TitleWithButton = (props) => {
  return (
    <div className="categories">
      <div className="title-btn m-5">
        <h1 className="text-lg font-bold">
          {props.title}
          <button type="button" className="text-black  bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 font-bold rounded-md text-xl px-4 py-1 ml-4 mr-2 mb-2 dark:bg-gray-200 dark:hover:bg-gray-200 dark:focus:ring-gray-200 dark:border-gray-200">+</button>
        </h1>
      </div>
    </div>
  );
};

export default TitleWithButton;
