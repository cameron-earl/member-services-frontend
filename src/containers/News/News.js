import React from "react";
import { PageHeader } from "react-bootstrap";
import MainView from "../MainView/MainView";
import MainNavBar from "../../components/MainNavBar/MainNavBar";
import NewsBox from "../../components/NewsBox/NewsBox";
import PasswordChangeModal from "../../components/PasswordChangeModal/PasswordChangeModal";
import "./News.css";

class News extends MainView {
  render() {
    return (
      <div className="News">
        <MainNavBar
          page="News"
          togglePasswordModal={this.togglePasswordModal}
        />
        <PageHeader>Site News</PageHeader>
        <NewsBox />
        {this.state.showPasswordModal && (
          <PasswordChangeModal toggleModal={this.togglePasswordModal} />
        )}
      </div>
    );
  }
}

export default News;
