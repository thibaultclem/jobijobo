import React from 'react';
import { connect } from 'react-redux';
import JobDisplayAll from './JobDisplayAll';
import JobDisplayMinimalist from './JobDisplayMinimalist';

class Job extends React.Component {

  constructor(props) {
    super(props);
    this.state= {displayAll: false}
    this.handleExpandClik = this.handleExpandClik.bind(this);
  }

  handleExpandClik(e) {
    this.setState({displayAll: !this.state.displayAll})
  }

  render() {
    return (
      <div className="job">
        <div className="panel panel-default job-offer">
          <div className="panel-heading">
            <div className="job-state">{this.props.job.status[0].name}</div>
          </div>
          <div className="panel-body" onClick={this.handleExpandClik}>
            { this.state.displayAll ? <JobDisplayAll job={this.props.job}/> : <JobDisplayMinimalist job={this.props.job}/>}
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
