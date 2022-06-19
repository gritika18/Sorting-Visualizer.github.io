import React from "react";
import CarouselContainer from "./carousel";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LandingPage from "./landingPage";

const Main = ({handleLogout}) => {
    return (
        <section className="hero">
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#">Sorting Visualizer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end" >
                        <Nav navbarScroll >
                            <Nav.Link href="#action1">My Notes</Nav.Link>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Visualizer"
                                    menuVariant="dark"
                                    >
                                    <NavDropdown.Item href="#action/3.1">Bubble Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Selection Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Insertion Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Merge Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Quick Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Counting Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Radix Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Bucket Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Heap Sort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Shell Sort</NavDropdown.Item>
                                </NavDropdown>
                        </Nav>
                        <button onClick={handleLogout} >Logout</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <body>
                <CarouselContainer />
                <br />
                <p className="heading">All Sorting Algorithms</p>
                <LandingPage />
            </body>
        </section>
    );
};

export default Main;