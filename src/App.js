import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/about/About';
import TopBar from './components/TopBar';
import { Outlet, Route } from 'react-router-dom';
import Footer from './components/Footer';
import {initialState, reducer} from './store/itemCart'
import CustomContext from './store/CustomContext'


function App() {
  const [state, dispatch ] = useReducer(reducer, initialState);

  const providerState = {
    state,
    dispatch
  }
  return (
    <CustomContext.Provider value={providerState} >
      <div className="App">
        <TopBar/>
        <Outlet />
        <Footer/>
      </div>
    </CustomContext.Provider>
  );
}

export default App;
