import React, { useState, useEffect, useContext } from 'react';
import EditItem from './EditItem';
import { AuthContext } from './Auth.js';
import './InventoryList.css';


function InventoryList() {
    const { loggedIn } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);

    const fetchItems = () => {
        fetch('http://localhost:3001/inventory')
            .then(response => {
                if (!response.ok) { throw response; }
                return response.json();
            })
            .then(data => {
                setItems(data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    useEffect(() => {
        fetchItems();
    }, []);

    const handleUpdate = () => {
        setCurrentItem(null);
        fetchItems();
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/inventory/${id}`, {
            method: 'DELETE',
        }).then(() => {
            // Remove the item
            setItems(items.filter(item => item.id !== id));
        });
    }
    

    return (
        <div className="inventory-list">
            <h1>Inventory List</h1>
            {currentItem && <EditItem currentItem={currentItem} onUpdate={handleUpdate} />}

            {items.map(item => (
                <div key={item.id} className="inventory-item">
                    <h2>&ensp;{item.name}</h2>
                    <p>Description: &ensp; <strong>{item.description}</strong></p>
                    <p>Quantity: &ensp;<strong>{item.quantity}</strong></p>
                    <button onClick={() => setCurrentItem(item)}>Edit</button>
                    {loggedIn && <button onClick={() => handleDelete(item.id)}>Delete</button>}
                </div>
            ))}
        </div>
    );
}

export default InventoryList;
