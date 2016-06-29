import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import NewJob from './NewJob';
import JobList from './JobList';
import { fetchJobOffer } from '../actions/job';

var apiURL = '/api/v1/job'

class Home extends React.Component {

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
          <div className="col-md-8 col-md-offset-2">
            <div className="add-new-job">
              <p>
                <button type="button" className="btn btn-primary btn-lg">Ajouter une nouvelle offre</button>
              </p>
            </div>
            <NewJob onJobSubmit={this.handleJobSubmit.bind(this)}/>
            <JobList jobs={this.props.jobs}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    jobs: state.jobs,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Home);
