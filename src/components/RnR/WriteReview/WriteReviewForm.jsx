import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioGroupInput from './RadioGroupInput';
import TextInput from './TextInput';

class WriteReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {
        options: ['1', '2', '3', '4', '5'],
        selected: '1',
      },
      recommended: {
        options: ['Yes', 'No'],
        selected: 'Yes',
      },
      characteristics: {
        options: ['Temp 1', 'Temp 2'],
        selected: '',
      },
      summary: '',
      body: '',
      photos: '',
      nickname: '',
      email: '',
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
    const { name, value, type } = target;
    if (type === 'radio') {
      console.log(this.state[name], value);
      this.setState({
        [[name].selected]: value,
      });
    } else {
      this.setState({
        [name]: value,
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
      ratings,
      recommended,
      characteristics,
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
          <RadioGroupInput label="Rating" config={ratings} id="ratings" handleInputChange={this.handleInputChange} />
          <RadioGroupInput label="Recommended" config={recommended} id="recommended" handleInputChange={this.handleInputChange} />
          <RadioGroupInput label="Characteristic" config={characteristics} id="characteristics" handleInputChange={this.handleInputChange} />
          <TextInput label="Review Summary" id="summary" value={summary} handleInputChange={this.handleInputChange} />
          <br />
          <TextInput label="Review Body" id="body" value={body} handleInputChange={this.handleInputChange} />
          <br />
          <TextInput label="Upload Photos" id="photos" value={photos} handleInputChange={this.handleInputChange} />
          <br />
          <TextInput label="Nickname" id="nickname" value={nickname} handleInputChange={this.handleInputChange} />
          <br />
          <TextInput label="Email" id="email" value={email} handleInputChange={this.handleInputChange} />
          <br />
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
