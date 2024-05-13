import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About';
import PreviousWork from './PreviousWork';
import Photo from './Photo';
import Video from './Video';


function Menu() {
    return (
        <Container className="menu">
            <Photo />
            <Video />
            <PreviousWork />
            <About />
        </Container>
    );
}

export default Menu;
