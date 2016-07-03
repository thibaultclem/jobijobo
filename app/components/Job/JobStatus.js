import React from 'react';
import { connect } from 'react-redux';

class JobStatus extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="JobStatus col-sm-3">
        <h2>STATUT</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(JobStatus);
