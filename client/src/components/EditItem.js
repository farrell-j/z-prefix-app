import React, { useState, useEffect } from 'react';

function EditItem({ currentItem, onUpdate }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        if (currentItem) {
            setName(currentItem.name);
            setDescription(currentItem.description);
            setQuantity(currentItem.quantity);
        }
    }, [currentItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/inventory/${currentItem.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, description, quantity}),
        }).then(() => {
        
            onUpdate();
        });
    };

    if (!currentItem) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Item description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button type="submit">Edit Item</button>
        </form>
    );
}

export default EditItem; 
