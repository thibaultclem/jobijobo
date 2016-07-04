import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Note">
        <p>{this.props.note.body}</p>
        <h6>{this.props.note.updatedDate}</h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Note);
