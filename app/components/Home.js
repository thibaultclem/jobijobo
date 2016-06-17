import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <div className="row job">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <div class="job-state">Interested</div>
              </div>
              <div className="panel-body">
                <p>
                <h3>Alstom</h3>
                <h5>Software Engineer</h5>
                </p>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <div class="job-state">Rejected</div>
              </div>
              <div className="panel-body">
                <p>
                <h3>Thales</h3>
                <h5>Full-stack developer</h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
