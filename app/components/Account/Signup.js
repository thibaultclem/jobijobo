import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { signup } from '../../actions/auth';
import { facebookLogin, twitterLogin, googleLogin, vkLogin } from '../../actions/oauth';
import Messages from '../Messages';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignup(event) {
    event.preventDefault();
    this.props.dispatch(signup(this.state.name, this.state.email, this.state.password));
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
            <form onSubmit={this.handleSignup.bind(this)}>
              <legend>{this.props.labels.createaccount}</legend>
              <div className="form-group">
                <label htmlFor="name">{this.props.labels.name}</label>
                <input type="text" name="name" id="name" placeholder="Name" autoFocus className="form-control" value={this.state.name} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="email">{this.props.labels.email}</label>
                <input type="email" name="email" id="email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">{this.props.labels.password}</label>
                <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <small className="text-muted">{this.props.labels.agreeterms}<Link to="/">{this.props.labels.termofservice}</Link>.</small>
              </div>
              <button type="submit" className="btn btn-success">{this.props.labels.createaccount}</button>
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
          {this.props.labels.alreadyaccount}<Link to="/login"><strong>{this.props.labels.login}</strong></Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    labels: state.i18n.labels.account.signup
  };
};

export default connect(mapStateToProps)(Signup);
