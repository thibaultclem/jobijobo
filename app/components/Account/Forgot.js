import React from 'react';
import { connect } from 'react-redux'
import { forgotPassword } from '../../actions/auth';
import Messages from '../Messages';

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleForgot(event) {
    event.preventDefault();
    this.props.dispatch(forgotPassword(this.state.email));
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          <div className="panel-body">
            <Messages messages={this.props.messages} />
            <form onSubmit={this.handleForgot.bind(this)}>
              <legend>{this.props.labels.forgotpassword}</legend>
              <div className="form-group">
                <p>{this.props.labels.resetinstruction}</p>
                <label htmlFor="email">{this.props.labels.email}</label>
                <input type="email" name="email" id="email" placeholder="Email" className="form-control" autoFocus value={this.state.email} onChange={this.handleChange.bind(this)}/>
              </div>
              <button type="submit" className="btn btn-success">{this.props.labels.resetpassword}</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    labels: state.i18n.labels.account.forgot
  };
};

export default connect(mapStateToProps)(Forgot);
