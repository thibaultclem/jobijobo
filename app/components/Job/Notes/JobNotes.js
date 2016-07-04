import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import NewNote from './NewNote';

class JobNote extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var noteNodes = this.props.notes ?
      this.props.notes.map(function(note) {
        return (
          <Note key={note._id} note={note}/>
        );
      })
      : null;

      return (
        <div className="JobNote col-sm-4">
          <h2>NOTES</h2>
          {noteNodes}
          <NewNote />
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
    };
  };

  export default connect(mapStateToProps)(JobNote);
