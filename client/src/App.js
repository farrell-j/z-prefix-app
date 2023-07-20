import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import InventoryList from './components/InventoryList';
import LoginForm from './components/login.js';
import SignupForm from './components/signup.js';
import { AuthProvider, AuthContext } from './components/Auth.js';


const App = () => {
 const [loggedIn, setLoggedIn] = useState(false);
 const logout = () => setLoggedIn(false);

 return (
 <AuthProvider value={{ loggedIn, setLoggedIn, logout }}>
 
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
           
           <AuthContext.Consumer>
             {({ loggedIn, logout }) => loggedIn && (
               <li>
                 <button onClick={logout}>Logout</button>
               </li>
             )}
           </AuthContext.Consumer>
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
 </AuthProvider>
 
 );
};
export default App;



// const App = () => (
//   <div className="App">
//     <LoginForm />
//     <InventoryList />
//   </div>
// );

// export default App;
