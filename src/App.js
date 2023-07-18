import './App.css';
import { useState } from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

//------ Components
import Navbar from './Components/navbar/Navbar';
import Shoppinglist from './Components/shoppinglist/Shoppinglist';
//------ Pages
import Home from './Components/pages/home/Home';
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import Jobs from './Components/pages/jobs/Jobs';
import Menufoods from './Components/pages/menu_foods/Menufoods'



function App() {

  //----------States
  const [shoppinglist, setShoopinglist] = useState([]);
  const [isshoppinglist, setIsshoppinglist] = useState(false);
  const [numberofproduct, setNumberofproduct] = useState(0);
  const [totalprice, setTotalprice] = useState(0);
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Pizza Peperoni",
      pic: "pics/pizza5.jpg",
      price: 12,
      nummer: 1,
    },
    {
      id: 2,
      name: "Pizza Salami",
      pic: "pics/pizza2.jpg",
      price: 10,
      nummer: 1,
    },
    {
      id: 3,
      name: "Pizza Margarita",
      pic: "pics/pizza1.jpg",
      price: 7,
      nummer: 1,
    },
    { id: 4, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, nummer: 1 },
    { id: 5, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, nummer: 1 },
    { id: 6, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, nummer: 1 },
    { id: 7, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, nummer: 1 },
    { id: 8, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, nummer: 1 },
  ]);

  //-------function Show Shopping list
  let showShoppinglist = () => {
    setIsshoppinglist((pre) => !pre);
  };

   //-----------setNumberofproduct function

   const chnageNummerShooping = () => {
    if (shoppinglist.length === 0) {
      setNumberofproduct((pre) => pre + 1);
    }
    if (shoppinglist.length !== 0) {
      const change = shoppinglist.reduce((pre, current) => {
        if (typeof pre === "object") {
          return pre.nummer + current.nummer;
        } else {
          return pre + current.nummer;
        }
      });
      typeof change === "object"
        ? setNumberofproduct(change.nummer)
        : setNumberofproduct(change);
    }
  };

  //-----------function Add Basket
  const addHandler = (addPizza) => {
    const existingItemIndex = shoppinglist.findIndex(
      (item) => item.id === addPizza.id
    );
    if (existingItemIndex !== -1) {
      shoppinglist[existingItemIndex].nummer += 1;
      chnageNummerShooping();
      setShoopinglist((pre) => [...pre]);
    } else {
      chnageNummerShooping();
      setShoopinglist((pre) => [...pre, addPizza]);
    }
    // setNumberofproduct(shoppinglist.length + 1);
  };

  return (
    <div className="App">
        <BrowserRouter>
            <Navbar numberofproduct={numberofproduct} showShoppinglist={showShoppinglist}/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/jobs' element={<Jobs/>}/>
              <Route path='/menufoods' element={<Menufoods foods={foods} addHandler={addHandler}/>}/>
              
            </Routes>
        </BrowserRouter>
        {isshoppinglist && (
        <Shoppinglist
          shoppinglist={shoppinglist}
          showShoppinglist={showShoppinglist}
          // removeHander={removeHander}
          numberofproduct={numberofproduct}
          totalprice={totalprice}
          addHandler={addHandler}
        />
      )}
      
    </div>
  );
}

export default App;
