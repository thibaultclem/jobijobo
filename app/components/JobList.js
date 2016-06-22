import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import Job from './Job';

class JobList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var jobNodes = this.props.jobs.map(function(job) {
      return (
        <Job key={job._id} company={job.company} position={job.position}/>
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
