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
              <h3>Bienvenue sur JobiJobo un outil pour vous facilitez la gestion de votre recherche d'emplois.</h3>
              <br />
            </div>
            <div>
              <h4>Enregistrer vous puis rendez vous sur l'onglet "Mes offres" pour ajouter votre première offre d'emplois.</h4>
              <br />
              <br />
            </div>
            <div>
              <strong>NOTE for my english friend: Currently JobiJobo is only available in french. English version coming soon...</strong>
            </div>
            <div>
              <br />
              <br />
              <h5>Pour les geeks, la stack:</h5>
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
