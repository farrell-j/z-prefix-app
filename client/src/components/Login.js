import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password}),
            });
            if (response.ok) {
                console.log('Login Success');
            } else {
                console.error('Login Failed');
            }    
        } catch (error) {
                console.error('Error during login:', error);
        }
    };

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />

        <button type="submit">Login</button>
    </form>

    );
};

export default LoginForm;
