import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/about/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Admin from './pages/Admin/Admin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="home" element={<Home />} />
        <Route path="Cart" element={<Cart/>}/>
        <Route path="Admin" element={<Admin/>}/>  
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
