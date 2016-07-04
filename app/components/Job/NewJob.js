import React from 'react';
import { connect } from 'react-redux';
import { addJobOffer } from '../../actions/job';

class NewJob extends React.Component {

  constructor(props) {
    super(props);
    this.state = {company: '', position: '', link: '', description: '', display: false};
    this.handleSubmitNewJob = this.handleSubmitNewJob.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDisplayClick = this.handleDisplayClick.bind(this);
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

  handleDisplayClick(e) {
    this.setState({display: !this.state.display});
  }

  handleSubmitNewJob(e) {

    //Prevent the browser's default action of submitting the form
    e.preventDefault();

    //Clean data
    var company = this.state.company.trim();
    var position = this.state.position.trim();
    var link = this.state.link.trim();
    var description = this.state.description.trim();

    //Company and position cannot be empty
    if (!company || !position) {
      return;
    }

    //dispatch the new job offer
    this.props.dispatch(addJobOffer(
      company,
      position,
      link,
      description,
      this.props.token
    ));

    //Clear the field and close the form
    this.setState({company: '', position: '', link: '', description: ''});
    this.setState({display: !this.state.display});
  };

  render() {

    //Form to submit a new job offer

    return (
      <div className="add-new-job">
        { this.state.display ?
          <div className='panel panel-default new-job-offer'>
              <div className='panel-heading'>
                <div className='job-state'>
                  Ajouter une nouvelle offre
                  <button className='btn btn-secondary pull-right' onClick={this.handleDisplayClick}>Annuler</button>
                </div>
              </div>
              <div className='panel-body'>
                <form className='form-horizontal' onSubmit={this.handleSubmitNewJob}>
                  <div className='form-group'>
                    <label htmlFor='company' className='col-sm-2'>Entreprise</label>
                    <div className='col-sm-8'>
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
                    <label htmlFor='position' className='col-sm-2'>Poste</label>
                    <div className='col-sm-8'>
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
                    <label htmlFor='link' className='col-sm-2'>URL</label>
                    <div className='col-sm-8'>
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
                    <label htmlFor='description' className='col-sm-2'>Description</label>
                    <div className='col-sm-8'>
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
                  <div className='form-group'>
                    <div className='col-sm-offset-2 col-sm-8'>
                      <button type='submit' className='btn btn-success'>Ajouter</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            :
            <p>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.handleDisplayClick}>Ajouter une nouvelle offre</button>
            </p> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(NewJob);
