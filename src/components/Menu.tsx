import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Menu() {
    return (
        <Container className="menu">
            <About />
            <Portfolio />
            <Contact />
        </Container>
    );
}

export default Menu;
