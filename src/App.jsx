import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/Homepage'
import './App.css'
import Board from './components/Board'

// function App() {
//  return(
//   <div className="app">
//     <Board/>
//   </div>
//  )
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/board/:boardTitle" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App
