import React from 'react';
import Companies from './component/Breweries/Breweries';
import BreweryDetail from './component/BreweryDetail/BreweryDetail';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Companies />}></Route>
        <Route path='/Breweries/:id' element={<BreweryDetail />}></Route>
      </Routes>
    </div>
  );
};

export default App;
