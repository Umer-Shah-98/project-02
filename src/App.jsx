import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import SignUp from "./components/signup/SignUp";
function App() {
  let progressPercentage=50;
  return (
    <>
      <div className=" m-5 grid grid-cols-[4%_70%_25%] gap-2 con">
        <div className="col-1 rounded-md flex justify-center items-center">
          <NavBar color={{backgroundColor:'white'}} />
        </div>
        <div className="col-2 rounded-md">
    
        </div>
        <div className="col-3 rounded-md">
        
        </div>
        <div className="col-4 rounded-md">
        
        </div>
      </div>
      <div className="foot m-4">
        <Footer/>
      </div>
      <div>
        <SignUp/>
      </div>
      <div className='rounded-md m-6 h-1 w-20 bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${
                    progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'} rounded-2xl`}>
            </div>
            </div>
    </>
  );
}

export default App;
