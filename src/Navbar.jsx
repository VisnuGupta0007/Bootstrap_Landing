import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function ContainerOutsideExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mt-3">
            <Container className="d-flex justify-content-between">
                <Link to='/' style={{ textDecoration: 'none', color:'black' }}>
                    <h4>Explore</h4>
                </Link>
                <Nav className="gap-5">
                    <Link to='/Hills' style={{ textDecoration: 'none', color:'black' }}>
                        <h5 id='nav'>Hills Station</h5>
                    </Link>
                    <Link to='/Temple' style={{ textDecoration: 'none', color:'black'}}>
                        <h5 id='nav'>Temples</h5>
                    </Link>
                    <Link to='/Beach' style={{ textDecoration: 'none', color:'black' }}>
                        <h5 id='nav'>Beach</h5>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ContainerOutsideExample;
