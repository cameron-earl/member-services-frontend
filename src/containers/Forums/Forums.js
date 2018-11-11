import React from "react";
import { PageHeader } from "react-bootstrap";
import MainView from "../MainView/MainView";
import MainNavBar from "../../components/MainNavBar/MainNavBar";
import ForumTopic from "../../components/ForumTopic/ForumTopic";
import ForumContent from "../../components/ForumContent/ForumContent";
import PasswordChangeModal from "../../components/PasswordChangeModal/PasswordChangeModal";
import "./Forums.css";

import { ForumData } from "../../Data";

class Forums extends MainView {
  state = {
    forums: [],
    selectedForum: null
  };

  componentDidMount = () => {
    this.setState({ forums: ForumData, selectedForum: ForumData[0] });
    console.log(ForumData);
  };

  selectForum = forum => {
    alert(forum.title);
  };

  render() {
    return (
      <div className="Forums">
        <MainNavBar
          page="Forums"
          togglePasswordModal={this.togglePasswordModal}
        />
        <PageHeader>Forums</PageHeader>
        <div className="forum-container container">
          <div className="forum-topics col">
            {this.state.forums.map(forum => (
              <ForumTopic
                key={forum.id}
                forum={forum}
                selectedFn={this.selectForum}
              />
            ))}
          </div>
          <div className="forum-subjects col">
            <ForumContent forum={this.state.selectedForum} />
          </div>
        </div>
        {this.state.showPasswordModal && (
          <PasswordChangeModal toggleModal={this.togglePasswordModal} />
        )}
      </div>
    );
  }
}

export default Forums;
