import logo from './logo.svg';
import './App.css';
import About from './pages/about/About';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Outlet, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <SideBar/>
      <Outlet />
    </div>
  );
}

export default App;
