import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import './NewsItem.css';

class NewsItem extends Component {

    render() {
        const {title, datestamp, content} = this.props;

        return (
            <div className="newsbox">
                <div className="newsbox-title">
                <span className="newsbox-title-text">{title}</span>
                <span className="newsbox-title-date">{datestamp}</span>
                </div>
                <div className="newsbox-text"><ReactMarkdown source={content} linkTarget="_blank"/></div>
            </div>
        );
    }

}

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    datestamp: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default NewsItem;
