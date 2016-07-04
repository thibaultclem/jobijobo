import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Note">
        <p>{this.props.body}</p>
        <h5>{this.props.updatedDate}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Note);
