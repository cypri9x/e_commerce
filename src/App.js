import logo from './logo.svg';
import './App.css';
import About from './pages/about/About';
import TopBar from './components/TopBar';
import { Outlet, Route } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
