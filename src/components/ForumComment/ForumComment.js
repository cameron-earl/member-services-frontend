import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

class ForumComment extends Component {

    postComment() {

    }

    updateComment() {
        
    }

    render() {

    }
}

ForumComment.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    datestamp: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default ForumComment;