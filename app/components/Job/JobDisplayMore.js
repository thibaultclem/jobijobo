import React from 'react';
import { connect } from 'react-redux';
import JobInfo from './JobInfo';
import JobNotes from './Notes/JobNotes';
import JobStatus from './JobStatus';

class JobDisplayMore extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="JobDisplayMore">
        <JobInfo job={this.props.job} />
        <JobStatus job={this.props.job} />
        <JobNotes notes={this.props.notes} />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(JobDisplayMore);
