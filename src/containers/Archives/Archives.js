import React from 'react';
import MainView from '../MainView/MainView';
import { PageHeader } from 'react-bootstrap';
import MainNavBar from '../../components/MainNavBar/MainNavBar';
import PasswordChangeModal from '../../components/PasswordChangeModal/PasswordChangeModal';
import './Archives.css';
import ArchivedItem from '../../components/ArchivedItem/ArchivedItem';
import ArchiveSummary from '../../components/ArchiveSummary/ArchiveSummary';
import { ArchiveData } from '../../Data';

class Archives extends MainView {

  state = {
    items: [],
    summaryItem: null
  }

  componentDidMount = () => {
    this.setState({items: ArchiveData, summaryItem: null});
  }

  updateSummaryPanel = (item) => {
    this.setState({summaryItem: item});
    return false;
  }

  render() {
    return (
      <div className='Archives'>
        <MainNavBar
          page='Archives'
          togglePasswordModal={this.togglePasswordModal}
        />
        <PageHeader>Archives</PageHeader>
        <div>
          {this.state.items.map(item => (
            <ArchivedItem key={item.id} item={item} fn={this.updateSummaryPanel}/>
          ))}
        </div>
        <ArchiveSummary item={this.state.summaryItem}/>
        {this.state.showPasswordModal && (
          <PasswordChangeModal toggleModal={this.togglePasswordModal} />
        )}
      </div>
    );
  }
}

export default Archives;
