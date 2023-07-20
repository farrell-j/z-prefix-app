import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InventoryList from './components/InventoryList';
import LoginForm from './components/login.js';
import SignupForm from './components/signup.js';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/inventory' element={<InventoryList />} />
      </Routes>
    </div>
  </Router>
);

export default App;



// const App = () => (
//   <div className="App">
//     <LoginForm />
//     <InventoryList />
//   </div>
// );

// export default App;
