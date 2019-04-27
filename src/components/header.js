import { Link } from "gatsby"
import React from "react"
import { Container, Nav, NavItem } from "react-bootstrap"
import SideBar_nav from "./sliderbar/sidebar"

class Header extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isModalOpen: false
    }
  }
  handleModalOpen = event => {
    console.log('handleModalOpen: ', this.state.isModalOpen);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }
  render () {


    return (
      <header>
        <SideBar_nav opendialog = {this.state.isModalOpen}/>
        <Container className="container" style={{
          margin: `0 auto`,
          maxWidth: 1280,
          padding: `1.45rem 1.0875rem 0 1.0875rem` }}>
          <Nav className="header_nav_menu">
            <div className="col-3" >
              <Link to='/' style={{
                color: 'black',
                textDecoration: 'none'}}>
                <img src={require('../images/Logo.svg')}
                     style={{ width: 120, height: 60, paddingBottom: 0, marginBottom: 0, pointerEvents: 'auto' }}/>
              </Link>
            </div>
            <div className="col-9 d-lg-flex d-none" style={{ 'display': `flex` }}>
              <Link to='/about/'>
                <NavItem eventKey={1}>
                  <div>About</div>
                </NavItem>
              </Link>
              <Link to='/partnering/'>
                <NavItem eventKey={2}>
                  <div>Partnering</div>
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
            </div>
            <div className="mobile-header-menu col-9" >
              <div className="slidemenunav" onClick={this.handleModalOpen}/>
            </div>
          </Nav>
        </Container>



      </header>
    );
  }
  }


export default Header;
