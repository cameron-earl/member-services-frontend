import React, { Component } from "react";
import {
  Modal,
} from "react-bootstrap";
import PropTypes from "prop-types";

class ForumReplyModal extends Component {
  state = {
  };

  handleClose = () => {
    this.props.toggleModal();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Modal show={true} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reply to "{this.props.post.title}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ForumReplyModal is working!
          <Modal.Footer>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    );
  }
}

ForumReplyModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

export default ForumReplyModal;
