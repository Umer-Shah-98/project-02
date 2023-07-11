import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import SignUp from "./components/signup/SignUp";
function App() {
  return (
    <>
      <div className=" m-5 grid grid-cols-[5%_45%_22%_26%] gap-2 con">
        <div className="col-1 rounded-md">
          <NavBar color={{backgroundColor:'white'}} />
        </div>
        <div className="col-2 rounded-md">
    
        </div>
        <div className="col-3 rounded-md">
        
        </div>
        <div className="col-4 rounded-md">
        
        </div>
      </div>
      <div className="foot m-5">
        <Footer/>
      </div>
      <div>
        <SignUp/>
      </div>
    </>
  );
}

export default App;
