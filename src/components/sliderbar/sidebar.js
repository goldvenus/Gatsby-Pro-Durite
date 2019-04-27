import React from "react";
import Sidebar from "react-sidebar";
import {slider_style} from "./style";
import { Link } from "gatsby"
import { NavItem } from "react-bootstrap"

const mql = window.matchMedia(`(min-width: 800px)`);

class SideBar_nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  componentWillReceiveProps (next_props) {
    this.onSetSidebarOpen(next_props.opendialog);
  }
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <div>
        <Sidebar
          sidebar={
            <div>
              <div className="nav_close_btn" onClick={() => this.onSetSidebarOpen(false)}/>
              <div className = "mobile_nav_menu">
                <Link to='/about/'>
                  <NavItem eventKey={1}>
                    <div className="mobile_nav_text">About</div>
                  </NavItem>
                </Link>
                <Link to='/partnering/'>
                  <NavItem eventKey={2}>
                    <div className="mobile_nav_text">Partnering</div>
                  </NavItem>
                </Link>
                <Link to='/chemistry/'>
                  <NavItem eventKey={3}>
                  <div className="mobile_nav_text">Chemistry of Polymers</div>
                  </NavItem>
                </Link>
                <Link to='/nature/'>
                  <NavItem eventKey={4}>
                  <div className="mobile_nav_text">From Nature to Lab</div>
                  </NavItem>
                </Link>
              </div>
            </div>

          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={slider_style}
          pullRight={true}
        >
        </Sidebar>

      </div>
    );
  }
}

export default SideBar_nav;