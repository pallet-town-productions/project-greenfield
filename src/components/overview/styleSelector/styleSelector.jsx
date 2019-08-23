import React from 'react';
import { connect } from 'react-redux';
import changeStyle from './../../../actions/overview/styleSelector/changeStyle';
import StyleThumbnail from './styleThumbnail.jsx';

const mapStateToProps = function(state) {
  let styleList = state.style.results;
  let currentStyleIndex = state.currentStyleIndex;
  return {
    styleList,
    currentStyleIndex
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleSwitchStyle: (styleIndex) => {
      dispatch(changeStyle(styleIndex));
    }
  }
}

const StyleSelector = function({currentStyleIndex, styleList, handleSwitchStyle}) {
  return (
    <div>
      {
        styleList.map((styleObj, index) => (
          <StyleThumbnail key={styleList[index].style_id}
          styleIndex={index}
          style={styleObj}
          handleClick={handleSwitchStyle}
          />
        ))
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelector);