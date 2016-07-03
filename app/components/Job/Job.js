import React from 'react';
import { connect } from 'react-redux';
import JobDisplayMinimalist from './JobDisplayMinimalist';
import JobDisplayMore from './JobDisplayMore';

class Job extends React.Component {

  constructor(props) {
    super(props);
    this.state= {displayMore: false}
    this.handleExpandClik = this.handleExpandClik.bind(this);
  }

  handleExpandClik(e) {
    this.setState({displayMore: !this.state.displayMore})
  }

  render() {
    return (
      <div className="job">
        <div className="panel panel-default job-offer">
          <div className="panel-heading" onClick={this.handleExpandClik}>
            <div className="job-state">{this.props.job.status[0].name}</div>
          </div>
          <div className="panel-body">
            { this.state.displayMore ? <JobDisplayMore job={this.props.job}/> : <JobDisplayMinimalist job={this.props.job}/>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Job);
