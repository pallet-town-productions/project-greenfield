import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { changeSize } from '../../../actions/overview-Actions/addToCart/changeSizeQty';
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
      let selectedSize = document.getElementById('current-size').value;
      dispatch(changeSize(selectedSize));
    }
  }
};

const SizeSelector = function ({ sizeList, sizeSkus, handleChangeSize }) {
  return (
    <select 
    onChange={() => {handleChangeSize()}}
    id="current-size"
    >
      {sizeList.map((size, index) => {
        return <option 
        key={zeroPad(sizeSkus[index], 3)}
        sku={sizeSkus[index]}
        value={index}>
          {size}
        </option>
      })}
    </select>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SizeSelector);