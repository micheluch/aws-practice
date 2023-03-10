import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Login from './pages/Login.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <NavLink className="content" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="content" activeClassName="active" to="/about">About</NavLink>
          <NavLink className="content" activeClassName="active" to="/login">Login</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
