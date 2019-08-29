/*
  Utility functions to transform data from Review Meta Endpoint
  GET /reviews/:product_id/meta

  Product Characteristic Functions:
  - setProductRatingValue
  - setProductSublables

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

export {
  setProductRatingValue,
  setProductSublables,
};
