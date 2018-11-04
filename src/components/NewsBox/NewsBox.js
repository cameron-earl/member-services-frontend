import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import { SiteNews } from '../../Data';
import "./NewsBox.css";

class NewsBox extends Component {
  state = {
    newsItems: []
  };

  componentDidMount = () => {
    this.setState({ newsItems: SiteNews });
  }

  render() {
    return (
      <div>
        {this.state.newsItems.map(newsItem => (
          <NewsItem
            key={newsItem.id}
            title={newsItem.title}
            datestamp={newsItem.datestamp}
            content={newsItem.content}
          />
        ))}
      </div>
    );
  }
}

export default NewsBox;
