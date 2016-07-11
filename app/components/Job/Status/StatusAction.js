import React from 'react';
import { connect } from 'react-redux';
import StatusButton from './StatusButton';

class StatusAction extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="StatusAction">
        <div className="btn-group" role="group">
          {(this.props.status.name == 'I') ? <StatusButton buttonType='btn-info' statusType='candidated' statusLabel={this.props.labels.candidated}/> : null }
          {(this.props.status.name == 'I') ? <StatusButton buttonType='btn-success' statusType='interview' statusLabel={this.props.labels.interview}/> : null }
          {(this.props.status.name == 'I') ? <StatusButton buttonType='btn-default' statusType='uninterested' statusLabel={this.props.labels.uninterested}/> : null }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    labels: state.i18n.labels.job.status.statusaction
  };
};

export default connect(mapStateToProps)(StatusAction);
