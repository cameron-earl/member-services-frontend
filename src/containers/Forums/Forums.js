import React from "react";
import { PageHeader } from "react-bootstrap";
import SplitPane from "react-split-pane";
import MainView from "../MainView/MainView";
import MainNavBar from "../../components/MainNavBar/MainNavBar";
import ForumTopic from "../../components/ForumTopic/ForumTopic";
import ForumPost from "../../components/ForumPost/ForumPost";
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
  };

  selectForum = forum => {
    this.setState({ selectedForum: forum });
    console.log(forum);
  };

  render() {
    return (
      <div className="Forums">
        <MainNavBar
          page="Forums"
          togglePasswordModal={this.togglePasswordModal}
        />
        <PageHeader>Forums</PageHeader>
        <SplitPane split="vertical" minSize={100} defaultSize={150}>
          <div className="forum-topics">
            {this.state.forums.map(forum => (
              <ForumTopic
                key={forum.id}
                forum={forum}
                selectedFn={this.selectForum}
              />
            ))}
          </div>
          <div>
            {this.state.selectedForum &&
              this.state.selectedForum.posts.map(post => (
                post.replyId == null && <ForumPost key={post.id} post={post} />
              ))}
          </div>
        </SplitPane>
        {this.state.showPasswordModal && (
          <PasswordChangeModal toggleModal={this.togglePasswordModal} />
        )}
      </div>
    );
  }
}

export default Forums;
