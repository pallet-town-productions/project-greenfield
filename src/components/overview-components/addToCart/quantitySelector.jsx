import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { range } from 'underscore';
import { changeQuantity } from '../../../actions/overview-Actions/addToCart/changeSizeQty';

const BLANKQUANTITY = '-';

const mapStateToProps = function (state) {
  const { currentSizeIndex, showQuantities } = state; // this is for detecting if Size is selected
  const currentAvailQuantity = 20; // dummy for future additional functionality
  return {
    currentSizeIndex,
    currentAvailQuantity,
    showQuantities,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleQuantityChange: () => {
      const selectedQuantity = Number(document.getElementById('current-quantity').value);
      dispatch(changeQuantity(selectedQuantity));
    },
  };
};

export const QuantitySelectorComponent = function ({
  showQuantities,
  currentAvailQuantity,
  handleQuantityChange,
}) {
  const quantityList = range(1, Math.min(currentAvailQuantity, 15) + 1);
  const list = (showQuantities) ? quantityList : [BLANKQUANTITY];
  return (
    <div id="quantity-selector" className="dropdown-selector">
      <select
        onChange={() => {
          handleQuantityChange();
        }}
        id="current-quantity"
      >
        {list.map((qty) => (
          <option
            key={qty}
            value={qty}
          >
            {qty}
          </option>
        ))}
      </select>
    </div>
  );
};

QuantitySelectorComponent.propTypes = {
  showQuantities: PT.bool.isRequired,
  currentAvailQuantity: PT.number.isRequired,
  handleQuantityChange: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantitySelectorComponent);
