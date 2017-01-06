import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import LanguageMenu from './Header/LanguageMenu';

var apiURL = '/api/v1/job'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <header id="top" className="header">
          <div className="home-language">
            <LanguageMenu />
          </div>
          <div className="text-vertical-center">
            <h1>JobiJobo</h1>
            <h3>{this.props.labels.subtitle}
            </h3>
            <br />
            <Link to="/jobDashboard" className="btn btn-info btn-lg">{this.props.labels.signupbutton}</Link>
            <div className="action-more-info">
              <a href="#about">
                <button type="button" className="btn btn-info btn-circle btn-xxl"><i className="fa fa-2x fa-angle-double-down"></i></button>
              </a>
            </div>
          </div>
        </header>
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>{this.props.labels.introduction}</h2>
                <p className="lead">{this.props.labels.subintroduction}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services bg-primary">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-10 col-lg-offset-1">
                <h2>{this.props.labels.feature.title}</h2>
                <hr className="small" />
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-simplybuilt fa-stack-1x text-primary"></i>
                      </span>
                      <h4>
                        <strong>{this.props.labels.feature.feature1.title}</strong>
                      </h4>
                      <p>{this.props.labels.feature.feature1.description}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-smile-o fa-stack-1x text-primary"></i>
                      </span>
                      <h4>
                        <strong>{this.props.labels.feature.feature2.title}</strong>
                      </h4>
                      <p>{this.props.labels.feature.feature2.description}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-mobile fa-stack-1x text-primary"></i>
                      </span>
                      <h4>
                        <strong>{this.props.labels.feature.feature3.title}</strong>
                      </h4>
                      <p>{this.props.labels.feature.feature3.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>{this.props.labels.screenshot.title}</h2>
                    <hr className="small" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a>
                                    <img className="img-portfolio img-responsive" src="img/dashboard-fr.png" />
                                </a>
                                <p>{this.props.labels.screenshot.screenshot1.description}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a>
                                    <img className="img-portfolio img-responsive" src="img/detail-fr.png" />
                                </a>
                                <p>{this.props.labels.screenshot.screenshot2.description}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a>
                                    <img className="img-portfolio img-responsive" src="img/status-fr.png" />
                                </a>
                                <p>{this.props.labels.screenshot.screenshot3.description}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a>
                                    <img className="img-portfolio img-responsive" src="img/notes-fr.png" />
                                </a>
                                <p>{this.props.labels.screenshot.screenshot4.description}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/jobDashboard" className="btn btn-info btn-lg">{this.props.labels.signupbutton}</Link>
                </div>
            </div>
        </div>
    </section>
        <section id="footer" className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 text-center">
                <h4><strong>JobiJobo</strong>
              </h4>
              <ul className="list-unstyled">
                <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:support@jobijobo.io">support@jobijobo.io</a>
              </li>
            </ul>
            <br />
            <p>© 2016 JobiJobo. <i className="fa fa-lightbulb-o"></i> by friend in <strong>Vietnam</strong>, <strong><i className="fa fa-code"></i></strong> with <i className="fa fa-heart danger"></i> in <strong>France</strong>, <i className="fa fa-wrench"></i> from <strong>Singapore</strong>.</p>
          </div>
        </div>
      </div>
      <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-angle-double-up fa-fw fa-1x"></i></a>
    </section>
  </div>
);
}
}

const mapStateToProps = (state) => {
  return {
    labels: state.i18n.labels.home
  };
};

export default connect(mapStateToProps)(Home);
