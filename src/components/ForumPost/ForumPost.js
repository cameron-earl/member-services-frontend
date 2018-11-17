import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "./ForumPost.css";
import PropTypes from "prop-types";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

library.add(faReply);

class ForumPost extends Component {
  render() {
    const { post, toggleReplyModal } = this.props;
    return (
      <div className="post">
        <Panel bsStyle={post.replyId == null ? "primary" : "info"} defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>{post.title}</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ReactMarkdown source={post.content} linkTarget="_blank" />
              <div
                className="reply-button"
                onClick={() => { toggleReplyModal(post); }}
              />
            </Panel.Body>
            <div className="reply">
              {post.replies &&
                post.replies.map(reply => (
                  <ForumPost
                    key={reply.id}
                    post={reply}
                    toggleReplyModal={this.props.toggleReplyModal}
                  />
                ))}
            </div>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

ForumPost.propTypes = {
  toggleReplyModal: PropTypes.func.isRequired,
  post: PropTypes.object,
};

export default ForumPost;
