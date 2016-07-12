import React from 'react';
import { connect } from 'react-redux';

class JobHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var classHeadingStatus = "panel-heading job-status-" + this.props.status.type;
    var textHeadingStatus = (this.props.status.type == 'interested') ?
    this.props.labels.interested
    :
    this.props.labels.unknown
    ;
    return (
      <div className="JobHeader">
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
