import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container} from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <header
  >
  <Container className="container" style={{
    margin: `0 auto`,
    maxWidth: 1280,
    padding: `1.45rem 1.0875rem`,
  }}>
                      <Link to='/' style={{
                          color: 'black',
                          textDecoration: 'none'
                      }}>
                          <img src={require('../images/Logo.svg')} style={{width:120,height:60,paddingBottom:0,marginBottom:0,pointerEvents:'auto'}}/>
                      </Link>
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
