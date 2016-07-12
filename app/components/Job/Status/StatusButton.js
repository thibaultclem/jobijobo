import React from 'react';
import { connect } from 'react-redux';
import { addStatusToJobOffer } from '../../../actions/job';

class StatusButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e, type) {
    e.preventDefault();
    this.props.dispatch(addStatusToJobOffer(
      this.props.statusType,
      this.props.jobId,
      this.props.token
    ));
  }

  render() {
    var classButton = "btn btn-block "+this.props.buttonType;
    return (
      <div class='StatusButton'>
        <button type="button" className={classButton} onClick={this.handleButtonClick}>{this.props.statusLabel}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(StatusButton);
