import React, { useState, useEffect } from 'react';
import EditItem from './EditItem';

function InventoryList() {
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

    return (
        <div>
            <h1>Inventory List</h1>
            {items.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.quantity}</p>
                    <button onClick={() => setCurrentItem(item)}>Edit</button>
                </div>
            ))}
            {currentItem && <EditItem currentItem={currentItem} onUpdate={handleUpdate} />}
        </div>
    );
}

export default InventoryList;
