import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var apiURL = '/api/v1/job'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <header id="top" className="header">
          <div className="text-vertical-center">
            <h1>JobiJobo</h1>
            <h3>A tool to help you managing your Job Search.
            </h3>
            <br />
            <Link to="/jobDashboard" className="btn btn-info btn-lg">Sign up - It's free.</Link>
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
                <h2>Notre mission: vous mettre dans les meilleurs conditions pour réussir votre recherche d'emploi !</h2>
                <p className="lead">Fini l'utilisation de classeurs Excel ou la multiplication des sous repertoires suivant l'avancée de votre recherche.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services bg-primary">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-10 col-lg-offset-1">
                <h2>Our Services</h2>
                <hr className="small" />
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-cloud fa-stack-1x text-primary"></i>
                      </span>
                      <h4>
                        <strong>Service Name</strong>
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href="#" className="btn btn-light">Learn More</a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-compass fa-stack-1x text-primary"></i>
                      </span>
                      <h4>
                        <strong>Coach Jobi</strong>
                      </h4>
                      <p>Jobi c'est un peu votre elfe de la gestion de l'emploi.
                        Il vous aidera à vous y retrouvez dans toutes vos offres, vous orientera vers des articles intéressant mais aussi partagera vos joies et vos coups durs.
                      </p>
                      <a href="#" className="btn btn-light">Learn More</a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-mobile fa-stack-1x text-primary"></i>
                      </span>
                      <h4>
                        <strong>Disponible partout</strong>
                      </h4>
                      <p>JobiJobo s'adapte à tous vos appareils.
                        Ajouter une note via votre mobile en sortant de votre entretien. Gérer vos offres sur votre ordinateur ou juste checker l'avancée de votre recherche tranquilement assis sur le canapé via votre tablette. Tout est possible.</p>
                      <a href="#" className="btn btn-light">Learn More</a>
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
                <div className="col-lg-10 col-lg-offset-1 text-center">
                    <h2>Our Work</h2>
                    <hr className="small" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="#">
                                    <img className="img-portfolio img-responsive" src="img/english-jobi.jpg" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="#">
                                    <img className="img-portfolio img-responsive" src="img/english-jobi.jpg" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="#">
                                    <img className="img-portfolio img-responsive" src="img/english-jobi.jpg" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="#">
                                    <img className="img-portfolio img-responsive" src="img/english-jobi.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-dark">View More Items</a>
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
                <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:name@example.com">name@example.com</a>
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
    messages: state.messages,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Home);
