import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./ForumPost.css";

class ForumPost extends Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        <div className="post">
          <div className="post-title">{post.title}</div>
          <div className="post-content">
            <ReactMarkdown source={post.content} linkTarget="_blank" />
          </div>
        </div>
        <div className="reply">
          {post.replies &&
            post.replies.map(reply => (
              <ForumPost key={reply.id} post={reply} />
            ))}
        </div>
      </div>
    );
  }
}

export default ForumPost;
