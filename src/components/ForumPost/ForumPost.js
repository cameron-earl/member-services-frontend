import React, { Component } from 'react';

class ForumPost extends Component {

    render() {
        const { post } = this.props;

        return (
            <div>
                {post.title}
            </div>
        );
    }
}

export default ForumPost;
