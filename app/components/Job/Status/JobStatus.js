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
        <h2>STATUT</h2>
        <StatusAction status={this.props.job.status[0]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(JobStatus);
