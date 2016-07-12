import React from 'react';
import { connect } from 'react-redux';
import StatusAction from './StatusAction';

class JobStatus extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="JobStatus col-sm-3">
        <h2>{this.props.labels.title}</h2>
        <StatusAction jobId={this.props.job._id} status={this.props.job.status[this.props.job.status.length-1]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    labels: state.i18n.labels.job.status.jobstatus
  };
};

export default connect(mapStateToProps)(JobStatus);
