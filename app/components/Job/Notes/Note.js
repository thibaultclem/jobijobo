import React from 'react';
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../../../actions/job';

class Note extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      body: this.props.note.body
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSubmitEditNote = this.handleSubmitEditNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  };

  handleSubmitEditNote(e) {
    //Prevent the browser's default action of submitting the form
    e.preventDefault();
    //Clean data
    var body = this.state.body.trim();
    //body cannot be empty
    if (!body) {
      //TODO: dispatch a message
      return;
    }
    //dispatch the updated job offer
    this.props.dispatch(updateNote(
      this.props.jobId,
      this.props.note._id,
      body,
      this.props.token
    ));
    this.setState({editMode: false})
  }

  handleDeleteNote(e) {
    console.log('jobid : '+this.props.jobId);
    //dispatch the deleted job offer
    this.props.dispatch(deleteNote(
      this.props.jobId,
      this.props.note._id,
      this.props.token
    ));
  }

  handleEditClick(e) {
    this.setState({editMode: !this.state.editMode})
  }

  render() {
    return (
      <div className="Note">
        { !this.state.editMode ?
          <div className="note-display">
            <div className="jobNote-action pull-right">
              <button type="button" className='btn btn-default fa fa-pencil-square-o' onClick={this.handleEditClick}></button>
            </div>
            <p>{this.props.note.body}</p>
            <h6>{this.props.note.updatedDate}</h6>
          </div>
          :
          <div className="note-edit">
            <form className='form-horizontal' onSubmit={this.handleSubmitEditNote}>
              <div className='btn-group edit-buttons' role='group'>
                <button type='submit' className='btn btn-success hidden-xs'>Sauvegarder</button>
                <button type="submit" className='btn btn-success fa fa-check visible-xs-block'></button>
                <button type='button' className='btn btn-danger hidden-xs' onClick={this.handleDeleteNote}>Supprimer</button>
                <button type="button" className='btn btn-danger fa fa-trash visible-xs-block' onClick={this.handleDeleteNote}></button>
                <button type='button' className='btn btn-default hidden-xs' onClick={this.handleEditClick}>Annuler</button>
                <button type="button" className='btn btn-default fa fa-remove visible-xs-block' onClick={this.handleEditClick}></button>
              </div>
              <div className='form-group'>
                  <textarea
                    name='body'
                    id='body' rows='2'
                    className='form-control'
                    value={this.state.body}
                    onChange={this.handleBodyChange}
                    >
                  </textarea>
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

export default connect(mapStateToProps)(Note);
