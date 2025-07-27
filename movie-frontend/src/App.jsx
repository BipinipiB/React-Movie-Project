
import { Routes,Route } from 'react-router-dom';
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
    {/* adding navbar to all pages */}
      <NavBar/>
      <main className="main-content">
        <Routes>
          {/* //Hey we want to go to slash path and element we want to display when we go to slash path is Home */}
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App
