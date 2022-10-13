import React from 'react';
import './App.css';
import "animate.css"
import {BrowserRouter} from "react-router-dom";
import MyRoutes from "./app/routes";

function App() {

  return (
      <BrowserRouter>
        <div className='app'>
          <MyRoutes/>
        </div>
      </BrowserRouter>
  );
}

export default App;
