import React from 'react';
import { connect } from 'react-redux';

class NewNote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {body: ''};
    this.handleSubmitNewNote = this.handleSubmitNewNote.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleSubmitNewNote(e) {
    e.preventDefault();
    console.log("submit new Note");
  }

  handleBodyChange(e) {
    console.log("body of note change");
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
                placeholder="J'ajoute ici ma nouvelle note"
                value={this.state.body}
                onChange={this.handleBodyChange}
                >
              </textarea>
            </div>
          </div>
          <div className='form-group'>
            <div>
              <button type='submit' className='btn btn-success'>Sauvegarder</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(NewNote);
