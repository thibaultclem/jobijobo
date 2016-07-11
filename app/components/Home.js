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
            <div>
              <h3>Welcome to JobiJobo! </h3>
              <br />
            </div>
            <div>
              <h4>Landing page coming soon :)</h4>
              <br />
              <br />
            </div>
            <div>
              <br />
              <br />
              <h5>Tech:</h5>
              <ul>
                <li>Platform: node</li>
                <li>Framework: express</li>
                <li>Template Engine: handlebars</li>
                <li>CSS Framework: bootstrap</li>
                <li>CSS Preprocessor: less</li>
                <li>JavaScript Framework: react</li>
                <li>Build Tool: gulp</li>
                <li>Unit Testing: mocha</li>
                <li>Database: mongodb</li>
                <li>Authentication: email,facebook,google,twitter</li>
                <li>Deployment: heroku</li>
              </ul>
            </div>
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
