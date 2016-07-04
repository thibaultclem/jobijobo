import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import NewNote from './NewNote';

class JobNote extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var noteNodes = this.props.job.notes ?
      this.props.job.notes.map(function(note) {
        return (
          <Note key={note._id} note={note}/>
        );
      })
      : null;

      return (
        <div className="JobNote col-sm-4">
          <h2>NOTES</h2>
          {noteNodes}
          <NewNote jobId={this.props.job._id}/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
    };
  };

  export default connect(mapStateToProps)(JobNote);
