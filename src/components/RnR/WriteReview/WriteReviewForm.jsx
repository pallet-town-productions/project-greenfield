import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioGroupInput from './RadioGroupInput';
import SingleInput from './SingleInput';
// import FileInput from './FileInput';
import TextAreaInput from './TextAreaInput';
import { getReviewFormConfig, getFilteredFormData } from '../../../util/RnR-review-meta';
import '../../../styles/RnR-breakdown.scss';

class WriteReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = getReviewFormConfig();

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
    const temp = { value };
    this.setState((previousState) => {
      const newState = { ...temp, ...previousState[name] };
      return { [name]: newState };
    });
  }

  handleSubmit(event) {
    const { hideModal } = this.props;
    const formData = getFilteredFormData(this.state);
    event.preventDefault();
    fetch('fake.com', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('got it');
          hideModal();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      rating,
      recommend,
      summary,
      body,
      name,
      email,
    } = this.state;
    return (
      <div
        role="presentation"
        onKeyDown={this.handleKeyPress}
      >
        <form
          className="form-style-7"
          onSubmit={this.handleSubmit}
        >
          <ul>
            <RadioGroupInput config={rating} handleInputChange={this.handleInputChange} />
            <RadioGroupInput config={recommend} handleInputChange={this.handleInputChange} />
            <SingleInput config={summary} handleInputChange={this.handleInputChange} />
            <TextAreaInput config={body} handleInputChange={this.handleInputChange} />
            <SingleInput config={name} handleInputChange={this.handleInputChange} />
            <SingleInput config={email} handleInputChange={this.handleInputChange} />
            <li><input type="submit" value="Submit" /></li>
          </ul>
        </form>
      </div>
    );
  }
}

WriteReviewForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default WriteReviewForm;
