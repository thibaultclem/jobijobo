import React from 'react';
import { connect } from 'react-redux';

class JobHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var classHeadingStatus = "panel-heading job-status-" + this.props.status.name;
    var textHeadingStatus = (this.props.status.name == 'I') ?
    "Interessé par l'offre"
    :
    "Statut inconnu ! Hum... souci dans la plomberie"
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
  };
};

export default connect(mapStateToProps)(JobHeader);
