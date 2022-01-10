import Link from "next/link";

import { Row, Navbar, NavbarBrand, NavLink } from "reactstrap";

const AppNavbar = () => {
  return (
    <Navbar className="navbar" fixed="top">
      <Row>
        <NavbarBrand className="navbar-brand">
          Contentful API usage App
        </NavbarBrand>
        <NavLink href="/">Home</NavLink>
      </Row>
    </Navbar>
  );
};

export default AppNavbar;
