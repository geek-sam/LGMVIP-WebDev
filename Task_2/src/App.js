import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Load from './Components/Load';
import Card from './Components/Card';

function App() {
    const [fetchData, setfetchData] = useState(false);
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(false);

    const getData = async () => {
        setLoad(true);
        const response = await fetch('https://reqres.in/api/users?page=2');
        const res = await response.json();
        setUsers(res.data);
        setInterval(() => {
            setfetchData(true);
        }, 2000);
    };

    return (
        <>
            <Nav getData={getData} />

            {load ? (
                fetchData ? (
                    <Card users={users} />
                ) : (
                    <Load />
                )
            ) : (
                <Home getData={getData} />
            )}
        </>
    );
}

export default App; 