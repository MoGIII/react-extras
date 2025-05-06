import './App.css'

import MenuItem from './Menu/MenuItem/MenuItem';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <div>
       <Menu>
        <MenuItem route="/">Home</MenuItem>
        <MenuItem route="/gallery">Gallery</MenuItem>
        <MenuItem route="/contact">Contact</MenuItem>
       </Menu>
      </div>


      <Routes>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App
