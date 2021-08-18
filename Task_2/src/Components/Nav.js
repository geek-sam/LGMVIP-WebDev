import React from 'react'
import './Nav.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
            <div className="max-width">
                <span className="logo">Mad Touch_up</span>
                <button onClick={getData}>Get Users</button>
            </div>
        </nav>
    )
}