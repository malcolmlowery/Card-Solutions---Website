import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.jsx';
import './globals';

// Views
import Home from './views/home';

const App = () => {
   return(
      <Routes>
         <Route path='/' element={<Navigation />}>
            <Route path='home' element={<Home />} />
         </Route>
      </Routes>
   )
};

export default App;