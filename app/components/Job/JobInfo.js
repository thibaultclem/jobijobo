import React from 'react';
import { connect } from 'react-redux';
import { updateJobOffer } from '../../actions/job';

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
    console.log("handle delete a job");
  }

  handleEditClick(e) {
    this.setState({editMode: !this.state.editMode})
  }

  render() {
    return (
      <div className="JobInfo col-sm-5">
      {!this.state.editMode ?
        //Display mode
        <div className="JobInfo-display">
          <div className="jobInfo-action pull-right">
            <button type="button" className='btn btn-default hidden-xs' onClick={this.handleEditClick}>Editer</button>
            <button type="button" className='btn btn-default fa fa-pencil-square-o visible-xs-block' onClick={this.handleEditClick}></button>
          </div>
          <h3 className="JobInfo-company">{this.state.company}</h3>
          <h4 className="JobInfo-position">{this.state.position}</h4>
          <a className="JobInfo-link">{this.state.link}</a>
          <h2>DESCRIPTION</h2>
          <p className="JobInfo-description">{this.state.description}</p>
          </div>
        :
        //Edit mode
        <div className="JobEdit">
          <form className='form-horizontal' onSubmit={this.handleSubmitEditJob}>
            <div className='form-group'>
                <button type='submit' className='btn btn-success'>Sauvegarder</button>
                <button type="button" className='btn btn-danger' onClick={this.handleDeleteJob}>Supprimer</button>
                <button type="button" className='btn btn-secondary' onClick={this.handleEditClick}>Annuler</button>
            </div>
            <div className='form-group'>
              <label htmlFor='company'>Entreprise</label>
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
              <label htmlFor='position'>Poste</label>
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
              <label htmlFor='link'>URL</label>
              <div>
                <input
                  type='url'
                  name='link'
                  id='link'
                  placeholder='http://candidat.pole-emploi.fr/candidat/rechercheoffres/detail/XXXXXX'
                  className='form-control'
                  value={this.state.link}
                  onChange={this.handleLinkChange}
                  autoFocus/>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
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
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(JobInfo);
