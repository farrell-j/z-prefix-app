import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth.js';
import './EditItem.css';


function EditItem({ currentItem, onUpdate }) {
    const { loggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {

        if (!loggedIn) {
            navigate('/');
        } else if (currentItem) {
                setName(currentItem.name);
                setDescription(currentItem.description);
                setQuantity(currentItem.quantity);
        }

      
    }, [currentItem,loggedIn, navigate]);

    const handleSubmit = (e) => {
        console.log("Current Item:", currentItem);
        console.log("Name:", name);
        console.log("Description:", description);
        console.log("Quantity:", quantity);
        e.preventDefault();
      

        fetch(`http://localhost:3001/inventory/${currentItem.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, description, quantity}),
        }).then((response) => {
            console.log(response); 
            return response.json(); 
        }).then((data) => {
            console.log(data); 
            onUpdate();
        });
    };

    if (!loggedIn || !currentItem) {
        return null;
    }

    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Item description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button type="submit">Edit Item</button>
        </form>
    );
}

export default EditItem; 
