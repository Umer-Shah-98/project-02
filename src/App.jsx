import "./App.css";
import { useState } from "react";
import Home from "./components/pages/Home";
// import { Link, Route, Router, Routes, NavLink} from 'react-router'
function App() {
  
  // let titles = ["Health", "Education", "Food","Transport"];
  // const icons = [HealthCareIcon,EducationIcon,FoodIcon,TransportIcon]
  // const strokes =['red','blue','green','orange']
  const [percentage, setPercentage] = useState(50);

  return (
    <>
    <Home/>
    </>
  );
}

export default App;
