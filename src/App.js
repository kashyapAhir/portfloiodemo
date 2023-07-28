

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Home from './Component/Home';
import About from './Component/About'
import Service from './Component/Service'
import Portfolio from './Component/Portfolio'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Error from './Component/Error'

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>      
  );
}

export default App;
