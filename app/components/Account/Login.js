import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { login } from '../../actions/auth';
import { facebookLogin, twitterLogin, googleLogin, vkLogin } from '../../actions/oauth';
import Messages from '../Messages';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.dispatch(login(this.state.email, this.state.password));
  }

  handleFacebook() {
    this.props.dispatch(facebookLogin())
  }

  handleTwitter() {
    this.props.dispatch(twitterLogin())
  }

  handleGoogle() {
    this.props.dispatch(googleLogin())
  }

  handleVk() {
    this.props.dispatch(vkLogin())
  }

  render() {
    return (
      <div className="login-container">
        <div className="panel">
          <div className="panel-body">
            <Messages messages={this.props.messages}/>
            <form onSubmit={this.handleLogin.bind(this)}>
              <legend>Se connecter</legend>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" autoFocus className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group"><Link to="/forgot"><strong>Oubli de votre mot de passe ?</strong></Link></div>
              <button type="submit" className="btn btn-success">Se connecter</button>
            </form>
            <div className="hr-title"><span>A venir bientôt</span></div>
            <div className="btn-toolbar text-center">
        <button onClick={this.handleFacebook.bind(this)} className="btn btn-facebook disabled">Sign in with Facebook</button>
        <button onClick={this.handleTwitter.bind(this)} className="btn btn-twitter disabled">Sign in with Twitter</button>
        <button onClick={this.handleGoogle.bind(this)} className="btn btn-google disabled">Sign in with Google</button>
            </div>
          </div>
        </div>
        <p className="text-center">
          Pas encore de compte ? <Link to="/signup"><strong>S'enregistrer'</strong></Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Login);
