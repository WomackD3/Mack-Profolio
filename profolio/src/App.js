import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home.jsx'
import NavBar from './screens/NavBar'


function App() {
  return (
    <>
      <h2>Wassup Mack</h2>
      <NavBar />

      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
