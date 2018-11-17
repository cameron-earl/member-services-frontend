import React from "react";
import { PageHeader } from "react-bootstrap";
import SplitPane from "react-split-pane";
import MainView from "../MainView/MainView";
import MainNavBar from "../../components/MainNavBar/MainNavBar";
import ForumTopic from "../../components/ForumTopic/ForumTopic";
import ForumPost from "../../components/ForumPost/ForumPost";
import ForumReplyModal from "../../components/ForumReplyModal/ForumReplyModal";
import PasswordChangeModal from "../../components/PasswordChangeModal/PasswordChangeModal";
import "./Forums.css";

import { ForumData } from "../../Data";

class Forums extends MainView {
  state = {
    forums: [],
    selectedForum: null,
    showForumReplyModal: false,
    replyPost: null,
  };

  componentDidMount = () => {
    this.setState({ forums: ForumData, selectedForum: ForumData[0] });
  };

  toggleForumReplyModal = (post) => {
    this.setState(prevState => ({
      showForumReplyModal: !prevState.showForumReplyModal,
      replyPost: post
    }));
  }

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
                post.replyId == null &&
                  <ForumPost
                    key={post.id}
                    post={post}
                    toggleReplyModal={this.toggleForumReplyModal}
                  />
              ))}
          </div>
        </SplitPane>
        {this.state.showPasswordModal && (
          <PasswordChangeModal toggleModal={this.togglePasswordModal} />
        )}
        {this.state.showForumReplyModal && (
          <ForumReplyModal
            toggleModal={this.toggleForumReplyModal}
            post={this.state.replyPost}
          />
        )}
      </div>
    );
  }
}

export default Forums;
