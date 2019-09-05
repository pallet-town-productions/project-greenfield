import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioGroupInput from './RadioGroupInput';
import SingleInput from './SingleInput';
// import FileInput from './FileInput';
import TextAreaInput from './TextAreaInput';
import { recordClickData } from '../../../util/util';
import { getReviewFormConfig, getFilteredFormData } from '../../../util/RnR-review-meta';
import '../../../styles/RnR-breakdown.scss';

const apiUrl = process.env.REACT_APP_APIURL || '123.456.789.1011';

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
      const newState = { ...previousState[name], ...temp };
      return { [name]: newState };
    });
  }

  handleSubmit(event) {
    const { hideModal, productData } = this.props;
    const { id } = productData;
    const { target } = event;
    const formData = getFilteredFormData(this.state);
    event.preventDefault();
    fetch(`${apiUrl}/reviews/${id}`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
        recordClickData(target, 'RatingsAndReviews');
        hideModal();
      })
      .catch((err) => {
        console.log(err);
        hideModal();
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
    const { productData } = this.props;
    const productName = productData.name;
    return (
      <div
        role="presentation"
        onKeyDown={this.handleKeyPress}
        className="modal-container"
      >
        <form
          id="add-review-form"
          className="form"
          onSubmit={this.handleSubmit}
        >
          <h3>{productName}</h3>
          <ul className="form-list">
            <RadioGroupInput config={rating} handleInputChange={this.handleInputChange} />
            <RadioGroupInput config={recommend} handleInputChange={this.handleInputChange} />
            <SingleInput config={summary} handleInputChange={this.handleInputChange} />
            <TextAreaInput config={body} handleInputChange={this.handleInputChange} />
            <SingleInput config={name} handleInputChange={this.handleInputChange} />
            <SingleInput config={email} handleInputChange={this.handleInputChange} />
          </ul>
          <div>* indicates a required field.</div>
          <input id="submit-review-btn" className="submit-form-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

WriteReviewForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
  productData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default WriteReviewForm;
