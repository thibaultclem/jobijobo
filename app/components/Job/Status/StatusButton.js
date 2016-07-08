import React from 'react';
import { connect } from 'react-redux';

class StatusButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    //Todo get value of button
    console.log(e.button);
  }

  render() {
    var classButton = "btn btn-block "+this.props.buttonType;
    return (
      <div class='StatusButton'>
        <button  type="button" data='test' className={classButton} onClick={this.handleButtonClick}>{this.props.children}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(StatusButton);
