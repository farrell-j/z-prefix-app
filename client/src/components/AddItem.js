import React, { useState } from 'react';

function AddItem() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, description, quantity}),
        }).then(() => {
        
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Item description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button type="submit">Add Item</button>
        </form>
    );
}

export default AddItem;
