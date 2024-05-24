import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About';
import PreviousWork from './PreviousWork';
import Photo from './Photo';
import Video from './Video';
import Illustrations from './Illustrations';


function Menu() {
    return (
        <Container className="menu">
            <PreviousWork />
            <Video />
            <Photo />
            <Illustrations />
            <About />
        </Container>
    );
}

export default Menu;
