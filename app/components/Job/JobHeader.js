import React from 'react';
import { connect } from 'react-redux';

class JobHeader extends React.Component {

  constructor(props) {
    super(props);
    this.handleClik = this.handleClik.bind(this);
  }

  handleClik(e) {
    this.props.onClick(e);
  }

  render() {
    var classHeadingStatus = "panel-heading job-status-" + this.props.status.type;
    switch (this.props.status.type) {
      case 'interested':
        var textHeadingStatus = this.props.labels.interested;
        break;
      case 'apply':
        var textHeadingStatus = this.props.labels.apply;
        break;
      case 'interview':
        var textHeadingStatus = this.props.labels.interview;
        break;
      case 'interviewed':
        var textHeadingStatus = this.props.labels.interviewed;
        break;
      case 'offer':
        var textHeadingStatus = this.props.labels.offer;
        break;
      case 'offer':
        var textHeadingStatus = this.props.labels.offerrejected;
        break;
      case 'accepted':
        var textHeadingStatus = this.props.labels.accepted;
        break;
      case 'rejected':
        var textHeadingStatus = this.props.labels.rejected;
        break;
      case 'uninterested':
        var textHeadingStatus = this.props.labels.uninterested;
        break;
      default:
      var textHeadingStatus = this.props.labels.unknown;
    };

    return (
      <div className="JobHeader" onClick={this.handleClik}>
        <div className={classHeadingStatus}>
          <div className="job-state">{textHeadingStatus}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    labels: state.i18n.labels.job.jobheader
  };
};

export default connect(mapStateToProps)(JobHeader);
