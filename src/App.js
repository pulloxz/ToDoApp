import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/header/header.js';
import AboutComponent from './components/about/about.js';
import ListComponent from './components/list/list.js';

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route exact path='/' element={<ListComponent />} />
        <Route path='/about' element={<AboutComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
