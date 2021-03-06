import React from 'react';
import { connect } from 'react-redux';
import StatusButton from './StatusButton';

class StatusAction extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var status = this.props.status.type;

    return (
      <div className="StatusAction">
        <div className="btn-group" role="group">
          {(status == 'interested') ?
            <StatusButton jobId={this.props.jobId} buttonType='btn-info' statusType='apply' statusLabel={this.props.labels.apply}/> : null }
          {(status == 'apply' || status == 'interviewed') ?
            <StatusButton jobId={this.props.jobId} buttonType='btn-interview' statusType='interview' statusLabel={this.props.labels.interview}/> : null }
          {(status == 'interview') ?
            <StatusButton jobId={this.props.jobId} buttonType='btn-interviewed' statusType='interviewed' statusLabel={this.props.labels.interviewed}/> : null }
          {(status == 'interviewed' || status == 'offerrejected') ?
            <StatusButton jobId={this.props.jobId} buttonType='btn-offer' statusType='offer' statusLabel={this.props.labels.offer}/> : null }
          {(status == 'interviewed' || status == 'offerrejected') ?
            <StatusButton jobId={this.props.jobId} buttonType='btn-danger' statusType='rejected' statusLabel={this.props.labels.rejected}/> : null }
          {(status == 'offer') ?
            <StatusButton jobId={this.props.jobId} buttonType='btn-success' statusType='accepted' statusLabel={this.props.labels.accepted}/> : null }
          {(status == 'offer') ?
            <StatusButton jobId={this.props.jobId} buttonType='btn-warning' statusType='offerrejected' statusLabel={this.props.labels.offerrejected}/> : null }
          {(status == 'interested' || status == 'apply' || status == 'interview' || status == 'interviewed' || status == 'offer' || status == 'offerrejected') ?
            <StatusButton jobId={this.props.jobId} buttonType='btn-uninterested' statusType='uninterested' statusLabel={this.props.labels.uninterested}/> : null }
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
