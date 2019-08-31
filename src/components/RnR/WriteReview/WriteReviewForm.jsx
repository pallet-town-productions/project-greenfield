import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioGroupInput from './RadioGroupInput';
import TextInput from './TextInput';
import { getReviewFormConfig } from '../../../util/RnR-review-meta';

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
    const { name, value, type } = target;
    if (type === 'radio') {
      this.setState({
        [[name].selected]: value,
      });
    } else {
      this.setState({
        [[name].value]: value,
      });
    }
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
      rating,
      recommended,
      characteristic,
      summary,
      body,
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
          <RadioGroupInput config={rating} handleInputChange={this.handleInputChange} />
          <RadioGroupInput config={recommended} handleInputChange={this.handleInputChange} />
          <RadioGroupInput config={characteristic} handleInputChange={this.handleInputChange} />
          <TextInput config={summary} handleInputChange={this.handleInputChange} />
          <TextInput config={body} handleInputChange={this.handleInputChange} />
          <TextInput config={photos} handleInputChange={this.handleInputChange} />
          <TextInput config={nickname} handleInputChange={this.handleInputChange} />
          <TextInput config={email} handleInputChange={this.handleInputChange} />
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
