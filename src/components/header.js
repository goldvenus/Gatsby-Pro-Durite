import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Nav, Navbar, NavItem } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Container className="container" style={{
      margin: `0 auto`,
      maxWidth: 1280,
      padding: `1.45rem 1.0875rem`}}>
        <Nav className = "header_nav_menu">
          <Link to='/' style={{
              color: 'black',
              textDecoration: 'none'}}>
              <img src={require('../images/Logo.svg')} style={{width:120,height:60,paddingBottom:0,marginBottom:0,pointerEvents:'auto'}}/>
          </Link>
          <Link to='/about/'>
            <NavItem eventKey={1}>
              <div>About Durite</div>
            </NavItem>
          </Link>
          <Link to='/partnering/'>
            <NavItem eventKey={2}>
              <div>Partnering with Durite</div>
            </NavItem>
          </Link>
          <Link to='/chemistry/'>
            <NavItem eventKey={3}>
              <div>Chemistry of Polymers</div>
            </NavItem>
          </Link>
          <Link to='/nature/'>
            <NavItem eventKey={4}>
              <div>From Nature to Lab</div>
            </NavItem>
          </Link>

          </Nav>
    </Container>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
