import React from 'react';
import { connect } from 'react-redux';

class JobNote extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="JobNote  col-sm-4">
        <h2>NOTES</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(JobNote);
