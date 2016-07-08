import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import NewNote from './NewNote';

class JobNote extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var jobId = this.props.job._id;
    var noteNodes = this.props.job.notes ?
      this.props.job.notes.map(function(note) {
        return (
          <Note key={note._id} note={note} jobId={jobId}/>
        );
      })
      : null;

      return (
        <div className="JobNote col-sm-4">
          <h2>NOTES</h2>
          {noteNodes}
          <NewNote jobId={jobId}/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
    };
  };

  export default connect(mapStateToProps)(JobNote);
