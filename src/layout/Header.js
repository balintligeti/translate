import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


export default function Header() {
    return (
        <Container>
        <div class="mt-4">
            <h1 class="text-center header">You don't get it?</h1>
            <p class="text-center mt-n3">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
            <div class="test-breadcrumb mt-n4">
                <Link to="/" class="link">Translate!</Link>
                
                <Link to="/dictionary" class="link"> Dictionary</Link>
            </div>
        </div>
        </Container>
    )


    
}

