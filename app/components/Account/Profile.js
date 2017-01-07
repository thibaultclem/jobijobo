import React from 'react';
import { connect } from 'react-redux'
import { updateProfile, changePassword, deleteAccount } from '../../actions/auth';
import { link, unlink } from '../../actions/oauth';
import Messages from '../Messages';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.user.email,
      name: props.user.name,
      gender: props.user.gender,
      location: props.user.location,
      website: props.user.website,
      gravatar: props.user.gravatar,
      password: '',
      confirm: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleProfileUpdate(event) {
    event.preventDefault();
    this.props.dispatch(updateProfile(this.state, this.props.token));
  }

  handleChangePassword(event) {
    event.preventDefault();
    this.props.dispatch(changePassword(this.state.password, this.state.confirm, this.props.token));
  }

  handleDeleteAccount(event) {
    event.preventDefault();
    this.props.dispatch(deleteAccount(this.props.token));
  }

  handleLink(provider) {
    this.props.dispatch(link(provider))
  }

  handleUnlink(provider) {
    this.props.dispatch(unlink(provider));
  }

  render() {
    const facebookLinkedAccount = this.props.user.facebook ? (
      <a role="button" className="text-danger" onClick={this.handleUnlink.bind(this, 'facebook')}>{this.props.labels.facebookunlink}</a>
    ) : (
      <a role="button" onClick={this.handleLink.bind(this, 'facebook')}>{this.props.labels.facebooklink}</a>
    );
    const twitterLinkedAccount = this.props.user.twitter ? (
      <a role="button" className="text-danger" onClick={this.handleUnlink.bind(this, 'twitter')}>{this.props.labels.twitterunlink}</a>
    ) : (
      <a role="button" onClick={this.handleLink.bind(this, 'twitter')}>{this.props.labels.twitterlink}</a>
    );
    const googleLinkedAccount = this.props.user.google ? (
      <a role="button" className="text-danger" onClick={this.handleUnlink.bind(this, 'google')}>{this.props.labels.googleunlink}</a>
    ) : (
      <a role="button" onClick={this.handleLink.bind(this, 'google')}>{this.props.labels.googlelink}</a>
    );

    return (
      <div className="container">
        <div className="panel">
          <div className="panel-body">
            <Messages messages={this.props.messages}/>
            <form onSubmit={this.handleProfileUpdate.bind(this)} className="form-horizontal">
              <legend>{this.props.labels.profileinformation}</legend>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-3">{this.props.labels.email}</label>
                <div className="col-sm-7">
                  <input type="email" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3">{this.props.labels.name}</label>
                <div className="col-sm-7">
                  <input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3">{this.props.labels.gender}</label>
                <div className="col-sm-4">
                  <label className="radio-inline radio col-sm-4">
                    <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleChange.bind(this)}/><span>{this.props.labels.male}</span>
                  </label>
                  <label className="radio-inline col-sm-4">
                    <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleChange.bind(this)}/><span>{this.props.labels.female}</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="location" className="col-sm-3">{this.props.labels.location}</label>
                <div className="col-sm-7">
                  <input type="text" name="location" id="location" className="form-control" value={this.state.location} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3">{this.props.labels.gravatar}</label>
                <div className="col-sm-4">
                  <img src={this.state.gravatar} width="100" height="100" className="profile"/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-4">
                  <button type="submit" className="btn btn-success">{this.props.labels.updateprofile}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="panel">
          <div className="panel-body">
            <form onSubmit={this.handleChangePassword.bind(this)} className="form-horizontal">
              <legend>{this.props.labels.changepassword}</legend>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-3">{this.props.labels.newpassword}</label>
                <div className="col-sm-7">
                  <input type="password" name="password" id="password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="confirm" className="col-sm-3">{this.props.labels.confirmpassword}</label>
                <div className="col-sm-7">
                  <input type="password" name="confirm" id="confirm" className="form-control" value={this.state.confirm} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-4 col-sm-offset-3">
                  <button type="submit" className="btn btn-success">{this.props.labels.changepassword}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/*<div className="panel">
          <div className="panel-body">
            <div className="form-horizontal">
              <legend>{this.props.labels.linkedaccounts}</legend>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-4">
                  <p>{facebookLinkedAccount}</p>
                  <p>{twitterLinkedAccount}</p>
                  <p>{googleLinkedAccount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        <div className="panel">
          <div className="panel-body">
            <form onSubmit={this.handleDeleteAccount.bind(this)} className="form-horizontal">
              <legend>{this.props.labels.deleteaccount}</legend>
              <div className="form-group">
                <p className="col-sm-offset-3 col-sm-9">{this.props.labels.deletewarning}</p>
                <div className="col-sm-offset-3 col-sm-9">
                  <button type="submit" className="btn btn-danger">{this.props.labels.deletebutton}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
    messages: state.messages,
    labels: state.i18n.labels.account.profile
  };
};

export default connect(mapStateToProps)(Profile);
