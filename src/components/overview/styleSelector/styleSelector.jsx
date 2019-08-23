import React from 'react';
import { connect } from 'react-redux';
import changeStyle from './../../../actions/overview/styleSelector/changeStyle';
import StyleThumbnail from './styleThumbnail.jsx';

const mapStateToProps = function(state) {
  return {
    styleList: state.style.results
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleSwitchStyle: (style) => {
      dispatch(changeStyle(style));
    }
  }
}

const StyleSelector = function({style, styleList, handleSwitchStyle}) {
  return (
    <div>
      {
        styleList.map((currStyle, index) => (
          <StyleThumbnail key={styleList[index].style_id} // dummy
          style={currStyle}
          handleSwitchStyle={handleSwitchStyle} //dummy
          />
        ))
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelector);