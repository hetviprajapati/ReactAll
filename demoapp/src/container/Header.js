import React from 'react'
import {Navbar,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'


 const Header=()=> {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/">Demo</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="/FormDemo">Prop-State-Demo</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/Clock">Life-Cycle Clock Demo</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/FetchDemo">Fetch API demo</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/ComponentLC">Component Life-cycle Demo</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/ApiFormDemo">Api Demo Form</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/BootstrapDemo">Redux Thunk Demo</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    )
}

export default Header
