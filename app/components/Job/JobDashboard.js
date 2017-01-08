import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages';
import NewJob from './NewJob';
import JobSearchBar from './JobSearchBar';
import JobList from './JobList';
import { fetchJobOffer } from '../../actions/job';

var apiURL = '/api/v1/job'

class JobDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      onGoingOnly: true
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, onGoingOnly) {
    this.setState({
      filterText: filterText,
      onGoingOnly: onGoingOnly
    });
  }

  componentDidMount() {
    this.props.dispatch(fetchJobOffer(this.props.token));
  }

  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <div className="row job">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="row">
              <div className="col-sm-9">
                <NewJob/>
              </div>
              <div className="col-sm-3">
                <JobSearchBar
                  filterText={this.state.filterText}
                  onGoingOnly={this.state.onGoingOnly}
                  onUserInput={this.handleUserInput}
                  labels={this.props.labels.searchBar}
                  />
              </div>
            </div>
            <div className="row">
              <JobList
                jobs={this.props.jobs}
                filterText={this.state.filterText}
                onGoingOnly={this.state.onGoingOnly}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    token: state.auth.token,
    jobs: state.jobs,
    labels: state.i18n.labels.job
  };
};

export default connect(mapStateToProps)(JobDashboard);
