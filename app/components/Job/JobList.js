import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages';
import Job from './Job';

class JobList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    // Filter the job list
    var jobs = [];
    this.props.jobs.forEach((job) => {
      if (
        // Filter on the company name and position
        (job.company.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1
        && job.position.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1)
        // Filter on ongoing job (not uninterested or rejected status)
        || ((job.status[job.status.length-1].type === 'uninterested' || job.status[job.status.length-1].type === 'rejected') && this.props.onGoingOnly)
      )
      {
        return;
      } else {
        jobs.push(<Job key={job._id} job={job}/>);
      }
    });

    return (
      <div className="jobList">
        {jobs}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(JobList);
