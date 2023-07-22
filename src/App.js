import "./App.css";
import { useState  } from "react";
import { Routes, Route } from "react-router-dom";

//------ import Components
import Navbar from "./Components/navbar/Navbar";
import Shoppinglist from "./Components/shoppinglist/Shoppinglist";
//------ import Pages
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Jobs from "./pages/jobs/Jobs";
import Menufoods from "./pages/menu_foods/Menufoods";
//------ import context provider
import { ShopProvider } from "./context/ShopContext";

function App() {
  
  //----------States
  const [isshoppinglist, setIsshoppinglist] = useState(false);
  
  //-------function Show Shopping list
  let showShoppinglist = () => {
    setIsshoppinglist((pre) => !pre);
  };


  return (
    <ShopProvider>
      <div className="App">
        <Navbar
          showShoppinglist={showShoppinglist}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route
            path="/menufoods"
            element={<Menufoods />}
          />
        </Routes>

        {isshoppinglist && (
          <Shoppinglist
            
            showShoppinglist={showShoppinglist}
          />
        )}
      </div>
    </ShopProvider>
  );
}

export default App;
