import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Favourites from './components/Favourites';
import Fight from './components/Fight';
import Pokedex from './components/Pokedex';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/fight" element={<Fight/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
