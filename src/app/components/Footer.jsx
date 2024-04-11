"use client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    <Navbar
      id="footer"
      sticky="bottom"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">&copy; Planet 2024</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created by:{" "}
            <a href="https://github.com/Laqwanda-Nettles">Laqwanda Nettles</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
