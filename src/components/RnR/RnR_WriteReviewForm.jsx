import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioGroupInput from './RnR_RadioGroupInput';

class WriteReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: true,
      characteristics: false,
      reviewSummary: '',
      reviewBody: '',
      photos: '',
      nickname: '',
      email: '',
      ratingOptions: ['1', '2', '3', '4', '5'],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    const { key } = event;
    const { hideModal } = this.props;
    if (key === 'Escape') {
      hideModal();
    }
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
    // const formData = this.state;
    this.hideModal();
    // check if data is valid
    // make a post with form data if everything all good
    // otherwise render some errors
  }

  render() {
    const {
      ratingOptions,
      recommended,
      characteristics,
      reviewSummary,
      reviewBody,
      photos,
      nickname,
      email,
    } = this.state;
    return (
      <div
        role="presentation"
        onKeyDown={this.handleKeyPress}
      >
        <form>
          <RadioGroupInput options={ratingOptions} handleInputChange={this.handleInputChange} />
          <label htmlFor="recommended">
          Recommended
            <input
              id="recommended"
              name="recommended"
              type="radio"
              value={recommended}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="characteristics">
          Characteristics
            <input
              id="characteristics"
              name="characteristics"
              type="radio"
              value={characteristics}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="reviewSummary">
          reviewSummary
            <input
              id="reviewSummary"
              name="reviewSummary"
              type="text"
              value={reviewSummary}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="reviewBody">
          reviewBody
            <input
              id="reviewBody"
              name="reviewBody"
              type="textarea"
              value={reviewBody}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="photos">
          Recommended
            <input
              id="photos"
              name="photos"
              type="text"
              value={photos}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="nickname">
          nickname
            <input
              id="nickname"
              name="nickname"
              type="text"
              value={nickname}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="email">
          email
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

WriteReviewForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default WriteReviewForm;
