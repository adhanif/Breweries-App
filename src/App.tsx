import React from 'react';
import Companies from './component/Breweries/Breweries';
import BreweryDetail from './component/BreweryDetail/BreweryDetail';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Search from './component/Search/Search';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Companies />}></Route>
        <Route path='/Breweries' element={<Companies />}></Route>
        <Route path='/Breweries/:id' element={<BreweryDetail />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
