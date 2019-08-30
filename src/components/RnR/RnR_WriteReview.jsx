import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: '',
      recommended: '',
      characteristics: '',
      reviewSummary: '',
      reviewBody: '',
      photos: '',
      nickname: '',
      email: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.state;
    // make a post with form data if everything all good
  }

  render() {
    return (
      <form>
        <label htmlFor="default">
          Default Value
          <input
            id="default"
            name=""
            type=""
            value=""
            onChange={this.handleInputChange}
          />
        </label>
        <br />
      </form>
    );
  }
}

export default WriteReview;
