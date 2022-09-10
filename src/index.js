import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globals';

// Views
import Home from './views/home';

const App = () => {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>
      </BrowserRouter>
   )
};

ReactDOM.render(<App/>, document.getElementById('root'));