import React, { Component, PropTypes } from 'react';

export default class NewNote extends Component {

  constructor(props) {
    super(props);
    this.state = {body: ''};
    this.handleSubmitNewNote = this.handleSubmitNewNote.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleSubmitNewNote(e) {
    e.preventDefault();
    //Clean data
    var body = this.state.body.trim();
    //Don't save empty note
    if (!body) {
      return;
    }
    // Invoke the callback from parent
    this.props.onSubmitNewNote(body);
    //Clear the field
    this.setState({body: ''});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  render() {
    return (
      <div className="NewNote">
        <form className='form-horizontal' onSubmit={this.handleSubmitNewNote}>
          <div className='form-group'>
            <div>
              <textarea
                name='body'
                id='body' rows='2'
                className='form-control'
                placeholder={this.props.labels.placeholder}
                value={this.state.body}
                onChange={this.handleBodyChange}
                >
              </textarea>
            </div>
          </div>
          <div className='form-group'>
            <div>
              <button type='submit' className='btn btn-success'>{this.props.labels.save}</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

NewNote.propTypes = {
  onSubmitNewNote: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired
};
