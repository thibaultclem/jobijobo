import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages';
import Job from './Job';

class JobList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log("jobs: " + this.props.jobs);

    var jobNodes = this.props.jobs.map(function(job) {
      return (
        <Job key={job._id} job={job}/>
      );
    });

    return (
      <div className="jobList">
        {jobNodes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(JobList);
