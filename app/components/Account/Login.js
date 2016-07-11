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
              <legend>{this.props.labels.login}</legend>
              <div className="form-group">
                <label htmlFor="email">{this.props.labels.email}</label>
                <input type="email" name="email" id="email" placeholder="Email" autoFocus className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">{this.props.labels.password}</label>
                <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group"><Link to="/forgot"><strong>{this.props.labels.forgotpassword}</strong></Link></div>
              <button type="submit" className="btn btn-success">{this.props.labels.login}</button>
            </form>
            <div className="hr-title"><span>{this.props.labels.socialsection}</span></div>
            <div className="btn-toolbar text-center">
        <button className="btn btn-facebook disabled">{this.props.labels.facebooklogin}</button>
        <button className="btn btn-twitter disabled">{this.props.labels.twitterlogin}</button>
        <button className="btn btn-google disabled">{this.props.labels.googlelogin}</button>
            </div>
          </div>
        </div>
        <p className="text-center">
          {this.props.labels.noaccountyet}<Link to="/signup"><strong>{this.props.labels.signup}</strong></Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    labels: state.i18n.labels.account.login
  };
};

export default connect(mapStateToProps)(Login);
