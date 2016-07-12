import React from 'react';
import { connect } from 'react-redux';
import JobDisplayMinimalist from './JobDisplayMinimalist';
import JobDisplayMore from './JobDisplayMore';
import JobHeader from './JobHeader';

class Job extends React.Component {

  constructor(props) {
    super(props);
    this.state= {displayMore: false}
    this.handleExpandClik = this.handleExpandClik.bind(this);
  }

  handleExpandClik(e) {
    this.setState({displayMore: true})
  }

  render() {
    var classHeadingStatus = "panel-heading job-status-" + this.props.job.status[0].name;
    return (
      <div className="job">
        <div className="panel panel-default job-offer">
          <JobHeader status={this.props.job.status[this.props.job.status.length-1]}/>
          <div className="panel-body" onClick={this.handleExpandClik}>
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
