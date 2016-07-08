import React from 'react';
import { connect } from 'react-redux';

class ExpandedText extends React.Component {

  constructor(props) {
    super(props);
    this.state = {expanded: false};
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick(e) {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <div className="ExpandedText">
        { this.state.expanded ?
          <div className="longtext">
            <p>{this.props.children}</p>
            <a onClick={this.handleExpandClick}> Réduire</a>
          </div>
          :
          <div className="shorttext">
            <p>{this.props.children.substring(0,150)}...</p>
            <a onClick={this.handleExpandClick}> tout afficher</a>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(ExpandedText);
