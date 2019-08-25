import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { changeSize, toggleShowQuantities } from '../../../actions/overview-Actions/addToCart/changeSizeQty';
import { zeroPad } from '../../../util/util';

const mapStateToProps = function (state) {
  const { currentSizeIndex, currentStyleIndex } = state;
  const sizeList = Object.keys(state.style.results[currentStyleIndex].skus);
  const sizeSkus = Object.values(state.style.results[currentStyleIndex].skus);
  sizeList.unshift('Select Size');
  sizeSkus.unshift(-1);
  return { currentSizeIndex, sizeList, sizeSkus };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleChangeSize: () => {
      const selectedSize = Number(document.getElementById('current-size').value);
      if (selectedSize === 0) {
        dispatch(toggleShowQuantities(false));
      } else {
        dispatch(toggleShowQuantities(true));
      }
      dispatch(changeSize(selectedSize));
    },
  };
};

const SizeSelector = function ({ sizeList, sizeSkus, handleChangeSize }) {
  return (
    <div id="size-selector" className="dropdown-selector">
      <select
        onChange={() => { handleChangeSize(); }}
        id="current-size"
      >
        {sizeList.map((size, index) => (
          <option
            key={zeroPad(sizeSkus[index], 3)}
            sku={sizeSkus[index]}
            value={index}
          >
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

SizeSelector.propTypes = {
  sizeList: PT.arrayOf(PT.string.isRequired).isRequired,
  sizeSkus: PT.arrayOf(PT.number.isRequired).isRequired,
  handleChangeSize: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SizeSelector);
