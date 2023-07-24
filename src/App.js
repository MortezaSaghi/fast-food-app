import "./App.css";
import { useState  } from "react";
import { Routes, Route } from "react-router-dom";

//------ import Components
import Navbar from "./Components/navbar/Navbar";
import Shoppinglist from "./Components/shoppinglist/Shoppinglist";
import Login from "./Components/login/Login";
//------ import Pages
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Jobs from "./pages/jobs/Jobs";
import Menufoods from "./pages/menu_foods/Menufoods";
import Register from "./pages/register/Register";
//------ import context provider
import { ShopProvider } from "./context/ShopContext";

function App() {
  
  //----------States
  const [isshoppinglist, setIsshoppinglist] = useState(false);
  const [isshowlogin,setisshowlogin]=useState(false);
  const [islogin, setIslogin] = useState(false);
  const [dataUserlogin,setDataUserlogin]=useState({});
  
  //-------function Show Shopping list
  const showShoppinglist = () => {
    setIsshoppinglist((pre) => !pre);
  };
  const showlogin = () => {
    if(!islogin) {setisshowlogin((pre) => !pre)}else{setIslogin(pre=>!pre);setDataUserlogin({})}
  };
  


  return (
    <ShopProvider>
      <div className="App">
        <Navbar
          showShoppinglist={showShoppinglist}
          showlogin={showlogin}
          islogin={islogin}
        />
        
        <Routes>
          <Route path="/" element={<Home islogin={islogin} dataUserlogin={dataUserlogin} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route
            path="/menufoods"
            element={<Menufoods />}
          />
          <Route path="/register" element={<Register/>}/>
        </Routes>

        {isshoppinglist && (
          <Shoppinglist
            
            showShoppinglist={showShoppinglist}
          />
        )}
        {isshowlogin && (
          <Login
            
            showlogin={showlogin}
            setIslogin={setIslogin}
            setDataUserlogin={setDataUserlogin}

          />
        )}
      </div>
    </ShopProvider>
  );
}

export default App;
