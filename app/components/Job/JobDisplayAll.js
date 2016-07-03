import React from 'react';
import { connect } from 'react-redux';

class JobDisplayAll extends React.Component {

  constructor(props) {
    super(props);
    this.handleEditJob = this.handleEditJob.bind(this);
    this.handleDeleteJob = this.handleDeleteJob.bind(this);
  }

  handleEditJob(e) {
    this.setState({displayAll: true})
    console.log("edit job");
  }

  handleDeleteJob(e) {
    this.setState({displayAll: true})
    console.log("delete job");
  }

  render() {
    return (
            <div className="job-display-all">
              <div className="job-actions pull-right">
                  <button type="button" className='btn btn-primary fa fa-pencil-square-o hidden-xs' onClick={this.handleEditJob}> Editer</button>
                  <button type="button" className='btn btn-primary fa fa-pencil-square-o visible-xs-block' onClick={this.handleEditJob}></button>
                  <button type="button" className='btn btn-primary fa fa-times hidden-xs' onClick={this.handleDeleteJob}> Supprimer</button>
                  <button type="button" className='btn btn-primary fa fa-times visible-xs-block' onClick={this.handleDeleteJob}></button>
              </div>
              <h3 className="jobCompany">{this.props.job.company}</h3>
              <h5 className="jobPosition">{this.props.job.position}</h5>
              <p className="jobDescription">{this.props.job.description}</p>
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(JobDisplayAll);
