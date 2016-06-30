import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages';

class Job extends React.Component {

  constructor(props) {
    super(props);
    this.state= {displayAll: false}
    this.handleClik = this.handleClik.bind(this);
    this.handleEditJob = this.handleEditJob.bind(this);
    this.handleDeleteJob = this.handleDeleteJob.bind(this);
  }

  handleClik(e) {
    this.setState({displayAll: !this.state.displayAll})
  }

  handleEditJob(e) {
    console.log("edit job");
  }

  handleDeleteJob(e) {
    console.log("delete job");
  }

  render() {
    return (
      <div className="job" onClick={this.handleClik}>
        <div className="panel panel-default job-offer">
          <div className="panel-heading">
            <div className="job-state">{this.props.job.status[0].name}</div>
            <div className="job-actions">
              <button className='btn btn-secondary pull-right' onClick={this.handleEditJob}>Editer</button>
              <button className='btn btn-secondary pull-right' onClick={this.handleDeleteJob}>Supprimer</button>
            </div>
          </div>
          { !this.state.displayAll ?
                <div className="panel-body">
                    <h3 className="jobCompany">{this.props.job.company}</h3>
                    <h5 className="jobPosition">{this.props.job.position}</h5>
                </div>
            :
                <div className="panel-body">
                    <h3 className="jobCompany">{this.props.job.company}</h3>
                    <h5 className="jobPosition">{this.props.job.position}</h5>
                    <p className="jobDescription">{this.props.job.description}</p>
                </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Job);
