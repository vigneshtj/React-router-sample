import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Shop() {

    const [entries,setEntries] = useState([]);

    useEffect(()=>{
        fetchItems();
    },[]); 

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
        console.log(data);

        const entries = await data.json();
        console.log(entries);
        setEntries(entries);
    }

    return (
        <div>
           <h1> Shop </h1>
            {entries.map(
                entry=>(
                        <Link to={`/shop/${entry.id}`}>
                        <h1 key={entry.id}>{entry.title}</h1>
                        </Link>
                    )
                )
            }
        </div>
    )
}

export default Shop
