import React from 'react';
import { connect } from 'react-redux';
import changeStyle from '../../../actions/overview/styleSelector/changeStyle';
import StyleThumbnail from './styleThumbnail';

const mapStateToProps = function (state) {
  const styleList = state.style.results;
  const { currentStyleIndex } = state;
  return {
    styleList,
    currentStyleIndex,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSwitchStyle: (styleIndex) => {
      dispatch(changeStyle(styleIndex));
    },
  };
};

const StyleSelector = function ({ styleList, handleSwitchStyle }) {
  return (
    <div>
      {
        styleList.map((styleObj, index) => (
          <StyleThumbnail
            key={styleList[index].style_id}
            styleIndex={index}
            style={styleObj}
            handleClick={handleSwitchStyle}
          />
        ))
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelector);
