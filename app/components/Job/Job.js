import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages';

class Job extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="job">
        <div className="panel panel-default job-offer">
          <div className="panel-heading">
            <div className="job-state">Interested</div>
          </div>
          <div className="panel-body">
              <h3 className="jobCompany">{this.props.company}</h3>
              <h5 className="jobPosition">{this.props.position}</h5>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Job);
