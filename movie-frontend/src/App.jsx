
import { Routes,Route } from 'react-router-dom';
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
// import LoginForm from './pages/LoginForm';

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
      {/* adding navbar to all pages */}
        <NavBar/>
        <main className="main-content">
          <Routes>
            {/* //Hey we want to go to slash path and element we want to display when we go to slash path is Home */}
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/register" element={<Register/>}/>
            {<Route path="/login" element={<Login/>}/> }
            
          </Routes>
        </main>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App
