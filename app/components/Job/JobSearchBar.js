import React, { Component, PropTypes } from 'react';

export default class SearchJobBar extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value,
      this.onGoingOnlyInput.checked
    );
  }

  render() {
    return (
      <div className="JobSearchBar">
        <form>
          <i className="fa fa-search"> </i>
          <input
            className="searchInput"
            type="text"
            placeholder={this.props.labels.placeholder}
            value={this.props.filterText}
            ref={(input) => this.filterTextInput = input}
            onChange={this.handleChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.onGoingOnly}
              ref={(input) => this.onGoingOnlyInput = input}
              onChange={this.handleChange}
            />
            {' '}
            {this.props.labels.onGoingOnly}
          </p>
        </form>
      </div>
    );
  }
}

SearchJobBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired
};
