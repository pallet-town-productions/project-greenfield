import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';

const mapStateToProps = (state) => ({
  ...state,
});

export const ModalTable = (props) => {
  const { compareData } = props;
  const { productData } = props;
  const { features: currentFeatures } = productData;
  const { features: compareFeatures } = compareData;
  const { name: currentName } = productData;
  const { name: compareName } = compareData;
  const sharedData = [];
  currentFeatures.filter((current) => (
    compareFeatures.filter((related) => (
      current.feature === related.feature ? sharedData.push(related) : null
    ))
  ));
  const filterdCurrentFeatures = currentFeatures.filter((current) => {
    if (sharedData.filter((shared) => (
      current.feature === shared.feature
    )).length) {
      return false;
    }
    return true;
  });
  const filterdCompareFeatures = compareFeatures.filter((compare) => {
    if (sharedData.filter((shared) => (
      compare.feature === shared.feature
    )).length) {
      return false;
    }
    return true;
  });

  return (
    <table id="compare-table">
      <tbody>
        <tr>
          <th>{currentName}</th>
          <th>Compared To</th>
          <th>{compareName}</th>
        </tr>
        {filterdCurrentFeatures.map((feature) => (
          <tr key={feature.feature}>
            <td>{'\u2713'}</td>
            <td>{feature.value !== 'null' ? feature.value : feature.feature}</td>
            <td> </td>
          </tr>
        ))}
        {sharedData.map((feature) => (
          <tr key={feature.feature}>
            <td>{'\u2713'}</td>
            <td>{feature.value !== 'null' ? feature.value : feature.feature}</td>
            <td>{'\u2713'}</td>
          </tr>
        ))}
        {filterdCompareFeatures.map((feature) => (
          <tr key={feature.feature}>
            <td> </td>
            <td>{feature.value !== 'null' ? feature.value : feature.feature}</td>
            <td>{'\u2713'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ModalTable.propTypes = {
  compareData: PT.shape({ features: PT.array, name: PT.string }).isRequired,
  productData: PT.shape({ features: PT.array, name: PT.string }).isRequired,
};

const ConnectedModalTable = connect(mapStateToProps, null)(ModalTable);
export default ConnectedModalTable;
