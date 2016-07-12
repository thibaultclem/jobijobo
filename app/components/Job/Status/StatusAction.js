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
            <StatusButton buttonType='btn-default' statusType='apply' statusLabel={this.props.labels.apply}/> : null }
          {(status == 'apply' || status == 'interviewed') ?
            <StatusButton buttonType='btn-default' statusType='interview' statusLabel={this.props.labels.interview}/> : null }
          {(status == 'interview') ?
            <StatusButton buttonType='btn-default' statusType='interviewed' statusLabel={this.props.labels.interviewed}/> : null }
          {(status == 'interviewed' || status == 'offerrejected') ?
            <StatusButton buttonType='btn-default' statusType='offer' statusLabel={this.props.labels.offer}/> : null }
          {(status == 'interviewed' || status == 'offerrejected') ?
            <StatusButton buttonType='btn-default' statusType='rejected' statusLabel={this.props.labels.rejected}/> : null }
          {(status == 'offer') ?
            <StatusButton buttonType='btn-default' statusType='accepted' statusLabel={this.props.labels.accepted}/> : null }
          {(status == 'offer') ?
            <StatusButton buttonType='btn-default' statusType='offerrejected' statusLabel={this.props.labels.offerrejected}/> : null }
          {(status == 'interested' || status == 'apply' || status == 'interview' || status == 'interviewed' || status == 'offer' || status == 'offerrejected') ?
            <StatusButton buttonType='btn-default' statusType='uninterested' statusLabel={this.props.labels.uninterested}/> : null }
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
