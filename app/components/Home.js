import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import NewJob from './NewJob';
import JobList from './JobList';

var apiURL = '/api/v1/job'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jobs: []};
  }

  componentDidMount() {
    this.loadJobFromServer();
  }

  loadJobFromServer() {
    //Request to get jobs from server
    $.ajax({
      url: apiURL,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({jobs: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(apiURL, status, err.toString());
      }.bind(this)
    });
  }

  handleJobSubmit(job) {
    //submit to the server and refresh the list
    $.ajax({
      url: apiURL,
      dataType: 'json',
      type: 'POST',
      data: job,
      success: function(data) {
        var jobsList = this.state.jobs.slice();
        jobsList.push(data);
        this.setState({jobs: jobsList});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(apiURL, status, err.toString());
      }.bind(this)
    });
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
            <JobList jobs={this.state.jobs}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    jobs: state.jobs
  };
};

export default connect(mapStateToProps)(Home);
