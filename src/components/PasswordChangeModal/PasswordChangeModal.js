import React, { Component } from "react";
import {
  Modal,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from "react-bootstrap";
import { withCookies } from "react-cookie";
import PropTypes from "prop-types";

class PasswordChangeModal extends Component {
  state = {
    csrfToken: "",
    oldPW: "",
    newPW: "",
    confirmPW: ""
  };

  constructor(props, context) {
    super(props, context);

    const { cookies } = props;
    this.state.csrfToken = cookies.get("XSRF-TOKEN");
  }

  handleClose = () => {
    this.props.toggleModal();
  };

  handleSubmit = event => {
    alert("Submitting form data");
    this.handleClose();
    event.preventDefault();
  };

  getValidationState = () => (this.isFormValid() ? "success" : "error");

  isFormValid = () => {
    const { oldPW, newPW, confirmPW } = this.state;
    return oldPW.length > 0 && newPW.length > 0 && newPW === confirmPW;
  };

  isPasswordMatch = () => {
    const { newPW, confirmPW } = this.state;
    return newPW.length > 0 && newPW === confirmPW ? "success" : "error";
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Modal show={true} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="oldPW">
              <ControlLabel>Original Password</ControlLabel>
              <FormControl
                type="password"
                name="oldPW"
                value={this.state.oldPW}
                placeholder="Current Password"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="newPW"
              validationState={this.isPasswordMatch()}
            >
              <ControlLabel>New Password</ControlLabel>
              <FormControl
                type="password"
                name="newPW"
                value={this.state.newPW}
                placeholder="Enter new password"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="confirmPW"
              validationState={this.isPasswordMatch()}
            >
              <ControlLabel>Confirm New Password</ControlLabel>
              <FormControl
                type="password"
                name="confirmPW"
                value={this.state.confirmPW}
                placeholder="Confirm new password"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <HelpBlock>
                Both the new password and the confirmation password must be the
                same.
              </HelpBlock>
            </FormGroup>
          </form>
          <Modal.Footer>
            <input
              disabled={!this.isFormValid()}
              id="pwchg-btn"
              className="btn btn-primary"
              type="submit"
              value="Update"
              onClick={this.handleSubmit}
            />
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    );
  }
}

PasswordChangeModal.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default withCookies(PasswordChangeModal);
