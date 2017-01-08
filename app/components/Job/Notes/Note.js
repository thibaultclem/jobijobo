import React, { Component, PropTypes } from 'react';

export default class Note extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      body: this.props.note.body
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSubmitEditNote = this.handleSubmitEditNote.bind(this);
    this.handleSubmitDeleteNote = this.handleSubmitDeleteNote.bind(this);
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
    // Invoke the callback from parent
    this.props.onSubmitEditNote(body);
    this.setState({editMode: false})
  }

  handleSubmitDeleteNote(e) {
    //Prevent the browser's default action of submitting the form
    e.preventDefault();
    // Invoke the callback from parent
    this.props.onSubmitDeleteNote();
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
            <h6>{new Date(this.props.note.updatedDate).toLocaleDateString()}</h6>
          </div>
          :
          <div className="note-edit">
            <form className='form-horizontal' onSubmit={this.handleSubmitEditNote}>
              <div className='btn-group edit-buttons' role='group'>
                <button type='submit' className='btn btn-success hidden-xs'>{this.props.labels.save}</button>
                <button type="submit" className='btn btn-success fa fa-check visible-xs-block'></button>
                <button type='button' className='btn btn-danger hidden-xs' onClick={this.handleSubmitDeleteNote}>{this.props.labels.delete}</button>
                <button type="button" className='btn btn-danger fa fa-trash visible-xs-block' onClick={this.handleSubmitDeleteNote}></button>
                <button type='button' className='btn btn-default hidden-xs' onClick={this.handleEditClick}>{this.props.labels.cancel}</button>
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

Note.propTypes = {
  onSubmitEditNote: PropTypes.func.isRequired,
  onSubmitDeleteNote: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired
};
