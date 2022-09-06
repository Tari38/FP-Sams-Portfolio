import { Container, Dropdown, Nav, Navbar, NavbarBrand, Offcanvas } from "react-bootstrap";
import "./Nav.css";

export default function NavBar() {
    return (
        <>
        {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar shadow" fixed="top">
          <Container fluid>
          <NavbarBrand href="/" className="nav-brand">Samantha Dorrell | Tech Trainee</NavbarBrand>
            <Navbar.Toggle className="nav-tog" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  PORTFOLIO MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
                <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
                  <Nav.Link className="nav-item" href="/">Home</Nav.Link>
                  <Nav.Link className="nav-item" href="/About">About</Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdown-btn">
                      Projects
                    </Dropdown.Toggle>
                  
                    <Dropdown.Menu>
                    <Dropdown.Item href="/pone">Project One</Dropdown.Item>
                    <Dropdown.Item href="/ptwo">Project Two</Dropdown.Item>
                    <Dropdown.Item href="/pthree">Project Three</Dropdown.Item>
                    <Dropdown.Item href="/pfour">Project Four</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/futureproof-tech-training">Futureproof</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link className="nav-item" href="/contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
        ))}
    </>
    )
}