import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "./ForumPost.css";

class ForumPost extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="post">
        <Panel bsStyle="primary" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>{post.title}</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ReactMarkdown source={post.content} linkTarget="_blank" />
            </Panel.Body>
            <div className="reply">
              {post.replies &&
                post.replies.map(reply => (
                  <ForumPost key={reply.id} post={reply} />
                ))}
            </div>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

export default ForumPost;
