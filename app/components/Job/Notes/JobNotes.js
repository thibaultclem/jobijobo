import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import NewNote from './NewNote';
import { addNoteToJobOffer, updateNote, deleteNote } from '../../../actions/job';

class JobNote extends React.Component {

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(body) {
    //dispatch the added note
    this.props.dispatch(addNoteToJobOffer(
      body,
      this.props.job._id,
      this.props.token
    ));
  }

  editNote(id, body) {
    //dispatch the updated note
    this.props.dispatch(updateNote(
      this.props.job._id,
      id,
      body,
      this.props.token
    ));
  }

  deleteNote(id) {
    //dispatch the deleted note
    this.props.dispatch(deleteNote(
      this.props.job._id,
      id,
      this.props.token
    ));
  }

  render() {

    var $_ = this;
    //Map on each note
    var noteNodes = this.props.job.notes ?
    this.props.job.notes.map(function(note) {
      return (
        <Note
          key={note._id}
          note={note}
          labels={$_.props.labels.note}
          onSubmitEditNote={(body) => $_.editNote(note._id, body)}
          onSubmitDeleteNote={() => $_.deleteNote(note._id)}
          />
      );
    })
    : null;

    return (
      <div className="JobNote col-sm-4">
        <h2>{this.props.labels.jobnotes.title}</h2>
        {noteNodes}
        <NewNote
          labels={this.props.labels.newnote}
          onSubmitNewNote={(body) => this.addNote(body)}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    labels: state.i18n.labels.job.notes
  };
};

export default connect(mapStateToProps)(JobNote);
