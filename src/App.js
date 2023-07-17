import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

//------ Components
import Navbar from './Components/navbar/Navbar';
//------ Pages
import Home from './Components/pages/home/Home';
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import Jobs from './Components/pages/jobs/Jobs';
import Menufoods from './Components/pages/menu_foods/Menufoods'



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/jobs' element={<Jobs/>}/>
              <Route path='/menufoods' element={<Menufoods/>}/>
              
            </Routes>
        </BrowserRouter>
        
      
    </div>
  );
}

export default App;
