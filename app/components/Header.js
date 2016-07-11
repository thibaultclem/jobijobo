import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';
import LanguageMenu from './Header/LanguageMenu';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const active = { borderBottomColor: '#3f51b5' };

    const rightNav = this.props.token ? (
      <ul className="nav navbar-nav navbar-right">
        <LanguageMenu />
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
            <img src={this.props.user.picture || this.props.user.gravatar}/>
            {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
            <i className="caret"></i>
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/account">{this.props.labels.myaccount}</Link></li>
            <li className="divider"></li>
            <li><a href="#" onClick={this.handleLogout}>{this.props.labels.logout}</a></li>
          </ul>
        </li>
      </ul>
    ) : (
      <ul className="nav navbar-nav navbar-right">
        <LanguageMenu />
        <li><Link to="/login" activeStyle={active}>{this.props.labels.login}</Link></li>
        <li><Link to="/signup" activeStyle={active}>{this.props.labels.signup}</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">JobiJobo</IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/jobDashboard" activeStyle={active}>{this.props.labels.myjobs}</IndexLink></li>
              <li><Link to="/stat" activeStyle={active}>{this.props.labels.myactivity}</Link></li>
            </ul>
            {rightNav}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
    labels: state.i18n.labels.header,
    lang: state.i18n.language
  };
};

export default connect(mapStateToProps)(Header);
