import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';

var apiURL = '/api/v1/job'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <div className="row home">
          <div className="col-md-8 col-md-offset-2">
            Bienvenue sur JobiJobo
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Home);
