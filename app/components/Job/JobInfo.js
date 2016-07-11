import React from 'react';
import { connect } from 'react-redux';
import { updateJobOffer, deleteJobOffer } from '../../actions/job';
import ExpandedText from '../Helper/ExpandedText';

class JobInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      company: this.props.job.company,
      position: this.props.job.position,
      link: this.props.job.link,
      description: this.props.job.description
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSubmitEditJob = this.handleSubmitEditJob.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDeleteJob = this.handleDeleteJob.bind(this);
  }

  handleCompanyChange(e) {
    this.setState({company: e.target.value});
  };

  handlePositionChange(e) {
    this.setState({position: e.target.value});
  };

  handleLinkChange(e) {
    this.setState({link: e.target.value});
  };

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  };

  handleSubmitEditJob(e) {
    //Prevent the browser's default action of submitting the form
    e.preventDefault();
    //Clean data
    var company = this.state.company.trim();
    var position = this.state.position.trim();
    var link = this.state.link.trim();
    var description = this.state.description.trim();
    //Company and position cannot be empty
    if (!company || !position) {
      //TODO: dispatch a message
      return;
    }
    //dispatch the updated job offer
    this.props.dispatch(updateJobOffer(
      this.props.job._id,
      company,
      position,
      link,
      description,
      this.props.token
    ));
    this.setState({editMode: false})
  }

  handleDeleteJob(e) {
    //dispatch the deleted job offer
    this.props.dispatch(deleteJobOffer(
      this.props.job._id,
      this.props.token
    ));
  }

  handleEditClick(e) {
    this.setState({editMode: !this.state.editMode})
  }

  render() {
    return (
      <div className="JobInfo col-sm-5">
        {!this.state.editMode ?
          //Display mode
          <div className="jobInfo-display">
            <div className="jobInfo-action pull-right">
              <button type="button" className='btn btn-default hidden-xs' onClick={this.handleEditClick}>{this.props.labels.edit}</button>
              <button type="button" className='btn btn-default fa fa-pencil-square-o visible-xs-block' onClick={this.handleEditClick}></button>
            </div>
            <h3 className="jobInfo-company">{this.state.company}</h3>
            <h4 className="jobInfo-position">{this.state.position}</h4>
            <i className="fa fa-external-link jobInfo-link"><a href={this.state.link}>{this.props.labels.linkoffer}</a></i>
            <div className="jobInfo-description">
              <h2>{this.props.labels.descriptiontitle}</h2>
              <ExpandedText>{this.state.description}</ExpandedText>
            </div>
          </div>
          :
          //Edit mode
          <div className="JobEdit">
            <form className='form-horizontal' onSubmit={this.handleSubmitEditJob}>
              <div className='btn-group jobInfo-edit-buttons' role='group'>
                <button type='submit' className='btn btn-success hidden-xs'>{this.props.labels.save}</button>
                <button type="submit" className='btn btn-success fa fa-check visible-xs-block'></button>
                <button type='button' className='btn btn-danger hidden-xs' onClick={this.handleDeleteJob}>{this.props.labels.delete}</button>
                <button type="button" className='btn btn-danger fa fa-trash visible-xs-block' onClick={this.handleDeleteJob}></button>
                <button type='button' className='btn btn-default hidden-xs' onClick={this.handleEditClick}>{this.props.labels.cancel}</button>
                <button type="button" className='btn btn-default fa fa-remove visible-xs-block' onClick={this.handleEditClick}></button>
              </div>
              <div className='form-group'>
                <label htmlFor='company'>{this.props.labels.company}</label>
                <div>
                  <input
                    type='text'
                    name='company'
                    id='company'
                    placeholder='JobiJobo & Cie'
                    className='form-control'
                    value={this.state.company}
                    onChange={this.handleCompanyChange}
                    autoFocus/>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='position'>{this.props.labels.position}</label>
                <div>
                  <input
                    type='text'
                    name='position'
                    id='position'
                    placeholder='Développeur informatique'
                    className='form-control'
                    value={this.state.position}
                    onChange={this.handlePositionChange}
                    autoFocus/>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='link'>{this.props.labels.url}</label>
                <div>
                  <input
                    type='url'
                    name='link'
                    id='link'
                    placeholder={this.props.labels.placeholderurl}
                    className='form-control'
                    value={this.state.link}
                    onChange={this.handleLinkChange}
                    autoFocus/>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='description'>{this.props.labels.description}</label>
                <div>
                  <textarea
                    name='description'
                    id='description' rows='7'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    >
                  </textarea>
                </div>
              </div>
            </form>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    labels: state.i18n.labels.job.jobinfo
  };
};

export default connect(mapStateToProps)(JobInfo);
