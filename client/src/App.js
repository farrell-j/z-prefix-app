import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
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
          <li>
            <Link to="/add-item">Add Item</Link>
          </li>
          <li>
            <Link to="/edit-item">Edit Item</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/inventory' element={<InventoryList />} />
        <Route path='/add-item' element={<AddItem />} />
        <Route path='/edit-item' element={<EditItem />} />

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
