import React, { useState, useEffect } from 'react';

function InventoryList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/inventory')
            .then(response => {
                if (!response.ok) {throw response }
                return response.json()
            })
            .then(data => {
                setItems(data);
            })
            .catch((error) => {
                console.log('error');
            
            });
    },[])
    return (
        <div>
            <h1>Inventory List</h1>
            {items.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.quantity}</p>
                  </div>  
            ))}
        </div>
    )
}

export default InventoryList;
