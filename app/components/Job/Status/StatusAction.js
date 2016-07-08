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
          {(this.props.status.name == 'I') ? <StatusButton buttonType='btn-info' statusType='candidated'>Candidature envoyée</StatusButton> : null }
          {(this.props.status.name == 'I') ? <StatusButton buttonType='btn-success' statusType='interview'>Direct à l'entretien</StatusButton> : null }
          {(this.props.status.name == 'I') ? <StatusButton buttonType='btn-default' statusType='uninterested'>Plus intéressé</StatusButton> : null }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(StatusAction);
