import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import CategoryCard from "./components/categoryCard/CategoryCard";
import SavingsCard from "./components/savingsCard/SavingsCard";
import TitleWithButton from './components/titleWithButton/TitleWithButton';
function App() {
  let progressPercentage = 50;
  // let titles = ["Health", "Education", "Food","Transport"];
  // const icons = [HealthCareIcon,EducationIcon,FoodIcon,TransportIcon]
  // const strokes =['red','blue','green','orange']
  const [percentage, setPercentage] = useState(50);

  return (
    <>
      <div className=" m-5 grid grid-cols-[4%_70%_25%] gap-2 con">
        <div className="col-1 rounded-md flex justify-center items-center">
          <NavBar color={{ backgroundColor: "white" }} />
        </div>
        <div className="col-2 rounded-md">
          <div className='budgeting-categories'>
            <TitleWithButton title='Budgeting Categories'/>
          </div>
            <div className="flex flex-wrap ">
              <CategoryCard />
            </div>
            <div className='mt-10 mb-0 savings-categories'>
              <TitleWithButton title='Your Savings Goals'/>
            </div>
            <div className="flex flex-wrap">
              <SavingsCard/>
            </div>
        </div>
        <div className="col-3 rounded-md"></div>
      </div>
      <div className="foot m-4">
        <Footer />
      </div>
      <div className="rounded-md m-6 h-1 w-20 bg-gray-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
          } rounded-2xl`}
        ></div>
      </div>
    </>
  );
}

export default App;
