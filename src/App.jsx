import "./App.css";
import { useState } from "react";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Main, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import CategoryCard from "./components/categoryCard/CategoryCard";
import SavingsCard from "./components/savingsCard/SavingsCard";
// import { Navbar } from "rsuite";
import Wallet from "./components/pages/wallet/Wallet";
import Expenses from "./components/pages/expenses/Expenses";
import Settings from "./components/pages/settings/Settings";
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      errorElement: (
        <>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </>
      )
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/wallet',
      element:<Wallet/>
    },
    {
      path:'/expenses',
      element:<Expenses/>
    },
    {
      path:'/settings',
      element:<Settings/>
    }
  ])
  // let titles = ["Health", "Education", "Food","Transport"];
  // const icons = [HealthCareIcon,EducationIcon,FoodIcon,TransportIcon]
  // const strokes =['red','blue','green','orange']
  const [percentage, setPercentage] = useState(50);

  return (
    <>
    <RouterProvider router={router}/>
    {/* <Main>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/wallet" element={<NavBar/>}/>
      <Route exact path="/expenses" element={<CategoryCard amount={100} max={200}/>}/>
    </Routes>
    </Main>
     */}
     
    </>
  );
}

export default App;
