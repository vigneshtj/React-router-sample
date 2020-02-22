import React, { useState, useEffect } from 'react'
import '../App.css';

function EntryDetail(match) {
    console.log("test");
    console.log(match.match.params.id);
    const [details,setDetails] = useState({userId: "", id: "", title: "", body:""});

    useEffect(()=>{
        fetchDetails();
    },[]); 

    const fetchDetails = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.match.params.id}`);
        console.log('hi');
        console.log(data);
       // setDetails(data);
        const details = await data.json();
        console.log(details);
        setDetails(details);
    }

    return (
        <div>
               <h1> {details.body} </h1>
        </div>
    )
}

export default EntryDetail
