import React, { Component } from "react";
import md5 from "md5";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { withCookies } from "react-cookie";
import "./MainNavBar.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { UserInfo } from "../../Data";

library.add(faUser);

class MainNavBar extends Component {
  state = {
    userinfo: {},
    gravatar: "",
    csrfToken: ""
  };

  async componentDidMount() {
    let newState = { csrfToken: this.props.cookies.get("XSRF-TOKEN") };

    newState.userinfo = UserInfo;
    const hash = md5(newState.userinfo.email.toLowerCase());
    newState.gravatar = "https://www.gravatar.com/avatar/" + hash;
    this.setState({ ...this.state, ...newState });
  }

  logout = () => {
    axios.post("/logout", { _csrf: this.state.csrfToken }).then(() => {
      document.location = "/";
    });
  };

  profile = () => {
    alert("Profile");
  };

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/forums">
            <NavItem eventKey={1}>Forums</NavItem>
          </LinkContainer>
          <LinkContainer to="/archives">
            <NavItem eventKey={2}>Archives</NavItem>
          </LinkContainer>
          <LinkContainer to="/eduweb">
            <NavItem eventKey={3}>Education</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            id="navmenudropdown"
            eventKey={5}
            title={
              <span>
                {this.state.userinfo.nickname}
                &nbsp;
                <FontAwesomeIcon icon="user" />
              </span>
            }
          >
            <MenuItem eventKey={5.1} onClick={this.profile}>
              Profile...
            </MenuItem>
            <MenuItem eventKey={5.2} onClick={this.props.togglePasswordModal}>
              Change Password...
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={5.3} onClick={this.logout}>
              Sign Out
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default withCookies(MainNavBar);
