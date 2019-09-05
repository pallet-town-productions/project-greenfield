import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { changeSize, toggleShowQuantities, togglePromptSelectSize } from '../../../actions/overview-Actions/addToCart/changeSizeQty';
import { zeroPad, recordClickData, OVERVIEWOWNER } from '../../../util/util';

function mapStateToProps(st) {
  const { currentSizeIndex, currentStyleIndex, promptSelectSize } = st;
  const currentStyleObj = st.styleData.results[currentStyleIndex];
  const sizeList = Object.keys(currentStyleObj.skus);
  const sizeSkus = Object.values(currentStyleObj.skus).map((val) => val || 999);
  const isOutOfStock = sizeList.length === 0;
  sizeList.unshift('Select Size');
  sizeSkus.unshift(-1);
  return {
    currentSizeIndex, sizeList, sizeSkus, promptSelectSize, isOutOfStock,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeSize: (e) => {
      const selectedSize = Number(document.getElementById('current-size').value);
      if (selectedSize === 0) {
        dispatch(toggleShowQuantities(false));
      } else {
        dispatch(toggleShowQuantities(true));
        dispatch(togglePromptSelectSize(false)); // hide prompt to select size
      }
      dispatch(changeSize(selectedSize));
      recordClickData(e.currentTarget, OVERVIEWOWNER);
    },
  };
}

function DropDown({
  sizeList, sizeSkus, handleChangeSize, isOutOfStock,
}) {
  if (isOutOfStock) {
    return (
      <select>
        <option>OUT OF STOCK</option>
      </select>
    );
  }
  return (
    <select
      onChange={handleChangeSize}
      id="current-size"
    >
      {sizeList.map((size, index) => (
        <option
          key={zeroPad(index, 3) + zeroPad(sizeSkus[index], 3)}
          sku={sizeSkus[index]}
          value={index}
        >
          {size}
        </option>
      ))}
    </select>
  );
}

function PromptSizeText({ promptSelectSize }) {
  return (
    <div id="select-size-prompt">
      {(promptSelectSize) ? 'Please Select Size' : <br />}
    </div>
  );
}

export function SizeSelectorComponent({
  sizeList, sizeSkus, promptSelectSize, isOutOfStock, handleChangeSize,
}) {
  return (
    <div id="size-selector" className="dropdown-selector">
      <PromptSizeText promptSelectSize={promptSelectSize} />
      <DropDown
        sizeList={sizeList}
        sizeSkus={sizeSkus}
        handleChangeSize={handleChangeSize}
        isOutOfStock={isOutOfStock}
      />
    </div>
  );
}

DropDown.propTypes = {
  sizeList: PT.arrayOf(PT.string.isRequired).isRequired,
  sizeSkus: PT.arrayOf(PT.number.isRequired).isRequired,
  isOutOfStock: PT.bool.isRequired,
  handleChangeSize: PT.func.isRequired,
};

PromptSizeText.propTypes = {
  promptSelectSize: PT.bool.isRequired,
};

SizeSelectorComponent.propTypes = {
  sizeList: PT.arrayOf(PT.string.isRequired).isRequired,
  sizeSkus: PT.arrayOf(PT.number.isRequired).isRequired,
  promptSelectSize: PT.bool.isRequired,
  isOutOfStock: PT.bool.isRequired,
  handleChangeSize: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SizeSelectorComponent);
