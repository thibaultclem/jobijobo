import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages';
import NewJob from './NewJob';
import JobList from './JobList';
import { fetchJobOffer } from '../../actions/job';

var apiURL = '/api/v1/job'

class JobDashboard extends React.Component {

  constructor(props) {
    super(props);
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
            <NewJob/>
            <JobList/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    messages: state.messages,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(JobDashboard);
