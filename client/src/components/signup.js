import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
const SignupForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({ username, password });


        try {
            const response = await fetch('http://localhost:3001/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ first_name, last_name, username, password }),
            });

            if (response.ok) {
                console.log('Signup Successful');
                navigate('/inventory');
            } else {
                console.error('Signup Failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="username">Username:</label>
            
            <input
                type="username"
                placeholder="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                placeholder="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input 
            type="text" 
            placeholder="First Name" 
            value={first_name} 
            onChange={(e) => setFirstName(e.target.value)} />
            <input 
            type="text" 
            placeholder="Last Name" 
            value={last_name} 
            onChange={(e) => setLastName(e.target.value)} />

            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupForm;
