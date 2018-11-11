import React, { Component } from 'react';
// import moment from 'moment';
import './ForumTopic.css';

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// library.add(faAngleRight);

class ForumTopic extends Component {
    state = {
        selectedFn: null
    }

    render() {
        const {forum, selectedFn} = this.props;

        return (
            <div onClick={() => selectedFn(forum)}>{forum.title}</div>
        );
    }
}

export default ForumTopic;
