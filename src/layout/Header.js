import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

export default function Header() {
    return (
        <div>
            <h1>Translate</h1>
            <Link to="/">Translate!</Link> | <Link to="/dictionary">Dictionary</Link>
        </div>
    )
}
