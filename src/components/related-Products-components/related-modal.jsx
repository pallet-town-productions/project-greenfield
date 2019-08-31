import { Component } from 'react';
import ReactDOM from 'react-dom';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';

const mapStateToProps = (state) => ({
  ...state,
});

const modalRoot = document.getElementById('related-modal-root');

export class RelatedModal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      children,
      this.el,
    );
  }
}

RelatedModal.propTypes = {
  children: PT.element,
};

RelatedModal.defaultProps = {
  children: null,
};

const connectedRelatedModal = connect(mapStateToProps, null)(RelatedModal);
export default connectedRelatedModal;
