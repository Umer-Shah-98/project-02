import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { Line, Circle } from "rc-progress";
import { useState } from "react";
import CategoryCard from "./components/categoryCard/CategoryCard";
import { CustomContentProgressBar } from "./components/progressBar/CustomContentProgressBar";
import EducationIcon from "./assets/education-icon.png";
import HealthCareIcon from "./assets/healthcare-icon.png";
import TransportIcon from "./assets/transport-icon.png";
import FoodIcon from "./assets/food-icon.jpg";
import Login from "./components/Form/Login";
function App() {
  let progressPercentage = 50;
  let titles = ["Health", "Education", "Food", "Transport"];
  const icons = [HealthCareIcon, EducationIcon, FoodIcon, TransportIcon];
  const strokes = ["red", "blue", "green", "orange"];
  const [percentage, setPercentage] = useState(50);

  return (
    <>
      <div className=" m-5 grid grid-cols-[4%_70%_25%] gap-2 con">
        <div className="col-1 rounded-md flex justify-center items-center">
          <NavBar color={{ backgroundColor: "white" }} />
        </div>
        <div className="col-2 rounded-md">
          <div>
            <h1 className="font-bold ml-5 text-xl">Home</h1>
            <div className="font-bold"></div>
            <select name="Expenses" id="Expenses">
              <option>
                <h1>This Month</h1>
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
            </select>
            <button className="w-8 h-8 bg-black text-white rounded-lg">
              +
            </button>
            <div className="bg-white w-100 h-60 font-bold ml-8 mt-16">
              <h1>Budget</h1>
              <p className="mt-8">Analytics: $146411</p>
              <p className="mt-4">Expense: $65112</p>
            </div>
          </div>

          <div className="categories">
            <div className="title-btn m-5">
              <h1 className="text-lg font-bold">
                Budgeting Categories{" "}
                <button className="text-2xl ml-2 bg-white px-4 text-center rounded-md">
                  <div className="mb-1 font-normal">+</div>
                </button>
              </h1>
            </div>
          </div>
          <div className="category-cards-wrapper flex">
            <div>
              <CategoryCard
                title={titles[0]}
                icon={icons[0]}
                color={strokes[0]}
              />
            </div>
            <div>
              <CategoryCard
                title={titles[1]}
                icon={icons[1]}
                color={strokes[1]}
              />
            </div>
          </div>
        </div>
        <div className="col-3 rounded-md"></div>
      </div>
      <div className="foot m-4">
        <Footer />
      </div>
      <div className="rounded-md m-6 h-1 w-20 bg-grey-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
          } rounded-2xl`}
        ></div>
      </div>
      <div>
        <Login></Login>
      </div>
    </>
  );
}

export default App;
