import React from 'react';
import { connect } from 'react-redux';
import { fetchLanguage } from '../../actions/i18n';

class LanguageMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {lang: this.props.lang}
  }

  handleLanguageChange(e, lang) {
    e.preventDefault();
    this.setState({lang: lang});
    this.props.dispatch(fetchLanguage(
      lang,
      this.props.token
    ));
  }

  render() {

    var imgStyle = {
      width: '35px',
      height: '23px'
    }
    // TODO: export lang icon in another Component
    const icon_fr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAABlElEQVRoQ+3bv07CUBTH8d/BQYluYpx8D0cXWxYHTZCS+DcODj6MM5oIiQ6WKiRO+gY8isS4OACLHENDSUUlnFiGm/yYCFxK7iffnulWkHr5lUYRAz2HYBPAOgBJf29936ztWn8y8/r+0cXMa6csVEA7AmkrctXVqPqcrI03vnVSW1rs5+uAlLP4t+QaDsBMbFfCLpZPN6LLXgzjBeGtAAdZogyv5R4MoCp3hYerQ9ku33s5kZesUVyFiR1UfPGDxiOge4T5JtASPwjfABQIkxbQ1yGMzgPF6VsJGBDmjyoIQxjbwGAxLIbF2ARYjM2LM4bFsBibAIuxeXHGsBgWYxNgMTYvzhgWw2JsAizG5sUZw2JYjE2Axdi8OGNYDIuxCbAYmxdnDIthMTYBFmPz4oxhMSzGJjClGJ7B+4Gj7+IFYVOAuRzhdvGc78ioxXO+v91KgiJPhk/AjE+GDz8vlRr5jwWtA9jPZHKNLuLcrSSIurpyPH6WIMHwKuGOqJwBmjx98i8nR2A6ArQ/gZu16Pop2fAXkg44lBfMKAsAAAAASUVORK5CYII=";
    const icon_eng = "data:image/png;base64,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";

      return (
        <li className="dropdown LanguageMenu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            { (this.state.lang == 'fr') ?
              <img
                alt="Francais"
                style={imgStyle}
                src={icon_fr} />
              : null
            }
            { (this.state.lang == 'en') ?
              <img
                alt="English"
                style={imgStyle}
                src={icon_eng} />
              : null
            }
            <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li>
                { (this.state.lang !== 'fr') ?
                  <a href="#" onClick={(event) => this.handleLanguageChange(event, 'fr')}>
                    <img
                      alt="Francais"
                      style={imgStyle}
                      src={icon_fr} />
                    {' '}Francais
                  </a>
                  : null
                }
                { (this.state.lang !== 'en') ?
                  <a href="#" onClick={(event) => this.handleLanguageChange(event, 'en')}>
                    <img
                      alt="English"
                      style={imgStyle}
                      src={icon_eng} />
                    {' '}English
                  </a>
                  : null
                }
              </li>
            </ul>
          </li>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      lang: state.i18n.language,
      token: state.auth.token
    };
  };

  export default connect(mapStateToProps)(LanguageMenu);
