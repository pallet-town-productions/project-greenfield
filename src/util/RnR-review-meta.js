/*
  Utility functions to transform data for Review Endpoints
  Review Meta: GET /reviews/:product_id/meta
  Add Review: POST /reviews/:product_id

  Product Characteristic Functions:
  - setProductRatingValue
  - setProductSublables

  Add/Write Review Functions:
  - getReviewFormConfig

*/

// Set value for characteristic rating scale represented by progress bar
const setProductRatingValue = (value = 0) => {
  const values = {
    leftValue: 0,
    centerValue: 0,
    rightValue: 0,
  };
  if (value > 0 && value < 1.5) {
    values.leftValue = value;
  }
  if (value >= 1.5 && value < 3) {
    values.centerValue = value;
  }
  if (value >= 3 && value <= 5) {
    values.rightValue = value;
  }
  return values;
};

// Set characteristic sublabels for rating scale
const setProductSublables = (label = 'Default') => {
  const defaultSubLabels = {
    Size: {
      left: 'A size too small',
      center: 'Perfect',
      right: 'A size too big',
    },
    Width: {
      left: 'Too narrow',
      center: 'Perfect',
      right: 'Too wide',
    },
    Comfort: {
      left: 'Uncomfortable',
      center: 'Ok',
      right: 'Perfect',
    },
    Quality: {
      left: 'Poor',
      center: 'What I expected',
      right: 'Perfect',
    },
    Length: {
      left: 'Runs short',
      center: 'Perfect',
      right: 'Runs long',
    },
    Fit: {
      left: 'Runs tight',
      center: 'Perfect',
      right: 'Runs loose',
    },
    Default: {
      left: 'Not enough',
      center: 'Perfect',
      right: 'Too much',
    },
  };
  return {
    leftSublabel: defaultSubLabels[label].left || defaultSubLabels.Default.left,
    centerSublabel: defaultSubLabels[label].center || defaultSubLabels.Default.center,
    rightSublabel: defaultSubLabels[label].right || defaultSubLabels.Default.right,
  };
};

const getReviewFormConfig = () => {
  const formConfig = {
    rating: {
      label: 'Overall Rating',
      mandatory: true,
      id: 'rating',
      type: 'radio',
      constraints: {
        options: [1, 2, 3, 4, 5],
      },
    },
    recommend: {
      label: 'Do you recommend this product?',
      mandatory: true,
      id: 'recommend',
      type: 'radio',
      constraints: {
        options: ['Yes', 'No'],
      },
    },
    characteristics: {
      label: 'Characteristics PlaceHolder',
      mandatory: false,
      id: 'characteristic placeholder',
      type: 'radio',
      constraints: {
        options: ['Temp1', 'Temp2', 'Temp3'],
      },
    },
    summary: {
      label: 'Review Summary',
      mandatory: false,
      id: 'summary',
      type: 'text',
      constraints: {
        max: 50,
        placeholder: 'Example: Best purchase ever!',
      },
    },
    body: {
      label: 'Review Body',
      mandatory: true,
      id: 'body',
      type: 'textarea',
      constraints: {
        min: 50,
        max: 1000,
        placeholder: 'Example: Best purchase ever!',
      },
    },
    photos: {
      label: 'Upload your photos',
      mandatory: false,
      id: 'photos',
      type: 'file',
      constraints: {
        max: 5,
      },
    },
    name: {
      label: 'What is your nickname',
      mandatory: true,
      id: 'name',
      type: 'text',
      constraints: {
        max: 60,
        placeholder: 'Example: jackson11',
        sublabel: 'For privacy reasons, do not use your full name or email address',
      },
    },
    email: {
      label: 'Your email',
      mandatory: true,
      id: 'email',
      type: 'email',
      constraints: {
        max: 60,
        placeholder: 'Example: jackson11@email.com',
        sublabel: 'For authenication reasons, you will not be emailed',
      },
    },
  };
  return formConfig;
};

const getFilteredFormData = (formData) => {
  const objReducer = (accumulator, currentValue) => ({ ...accumulator, ...currentValue });
  const filteredData = Object.keys(formData)
    .map((input) => {
      let value = formData[input].value !== undefined ? formData[input].value : '';
      if (input === 'recommend') {
        if (value === 'Yes') {
          value = 0;
        } else {
          value = 1;
        }
      }
      if (input === 'rating') {
        value = Number(value);
      }
      return { [input]: value };
    })
    .reduce(objReducer, {});
  filteredData.photos = [];
  filteredData.characteristics = {};
  return { ...filteredData };
};

export {
  setProductRatingValue,
  setProductSublables,
  getReviewFormConfig,
  getFilteredFormData,
};
