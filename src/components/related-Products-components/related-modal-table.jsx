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
  console.log(compareData, productData);

  return (
    <table>
      <tbody>
        <tr>
          <th>{currentName}</th>
          <th>Compared To</th>
          <th>{compareName}</th>
        </tr>
        {currentFeatures.map((feature) => (
          <tr>
            <td>{'\u2713'}</td>
            <td>{feature.value !== 'null' ? feature.value : feature.feature}</td>
            <td> </td>
          </tr>
        ))}
        {compareFeatures.map((feature) => (
          <tr>
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
