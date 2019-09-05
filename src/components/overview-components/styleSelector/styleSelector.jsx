import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import changeStyle from '../../../actions/overview-Actions/styleSelector/changeStyle';
import { changePhoto } from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
import StyleThumbnail from './styleThumbnail';
import { zeroPad } from '../../../util/util';

function mapStateToProps(st) {
  const styleList = st.styleData.results;
  const { currentStyleIndex, currentPhotoIndex } = st;
  return {
    styleList,
    currentStyleIndex,
    currentPhotoIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSwitchStyle: (styleList, styleIndex, currentPhotoIndex) => {
      if (styleList.photos.length <= currentPhotoIndex) {
        dispatch(changePhoto(0));
      }
      dispatch(changeStyle(styleIndex));
    },
  };
}

export function StyleSelectorComponent({
  styleList,
  handleSwitchStyle,
  currentStyleIndex,
  currentPhotoIndex,
}) {
  return (
    <div>
      <div id="style-name">
        <strong>STYLE &gt; </strong>
        {styleList[currentStyleIndex].name}
      </div>
      <div id="style-thumbnail-grid">
        {
          styleList.map((styleObj, index) => (
            <StyleThumbnail
              key={styleList[index].style_id}
              thisId={zeroPad(styleList[index].style_id, 6)}
              styleIndex={index}
              styleObj={styleObj}
              handleClick={handleSwitchStyle}
              currentStyleIndex={currentStyleIndex}
              currentPhotoIndex={currentPhotoIndex}
            />
          ))
        }
      </div>
    </div>
  );
}

StyleSelectorComponent.propTypes = {
  styleList: PT.arrayOf(PT.object).isRequired,
  handleSwitchStyle: PT.func.isRequired,
  currentStyleIndex: PT.number.isRequired,
  currentPhotoIndex: PT.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelectorComponent);
