import React, { Component } from 'react';
import moment from 'moment';
import './ForumTopic.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleRight);

class ForumTopic extends Component {
    state = {
        expanded: false
    }

    togglePostsView(element) {
        this.setState(! this.state.expanded);
        alert(this.state.expanded);
    }

    render() {
        const {forum} = this.props;
        const {expanded} = this.state;

        // find last post and by whom ... through all posts and replies...
        var lastPostBy = null;
        var lastPostOn = null;

        forum.posts.forEach(function(post) {
            const createdOn = moment(post.createdOn);

            if (lastPostOn == null) {
                lastPostOn = createdOn;
                lastPostBy = post.createdBy;
            } else if (createdOn.isAfter(lastPostOn)) {
                lastPostOn = createdOn;
                lastPostBy = post.createdBy;
            }
        });

        return (
            <div className='forum-topic'>
                <div className='forum-topic-title'>{forum.title}</div>
                <div className='forum-topic-details'>{forum.createdOn}</div>
                <div className='forum-topic-details'>{forum.posts.length}</div>
                <div className='forum-topic-details'>{lastPostBy}&nbsp;{lastPostOn == null ? "" : lastPostOn.format()}</div>
                <div className='forum-topic-description'>{forum.description}</div>
                <div className={expanded ? "forum-expanded" : "forum-contracted"} onClick={this.togglePostsView}><FontAwesomeIcon icon="angle-right"/></div>
            </div>
        );
    }
}

export default ForumTopic;
