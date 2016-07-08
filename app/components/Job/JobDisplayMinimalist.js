import React from 'react';
import { connect } from 'react-redux';

class JobDisplayMinimalist extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="job-display-minimalist">
        <h3 className="jobCompany">{this.props.job.company}</h3>
        <h5 className="jobPosition">{this.props.job.position}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(JobDisplayMinimalist);
