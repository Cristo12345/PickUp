import React from 'react';
import image from '../../images/spinner.svg';
import { Modal } from 'reactstrap';

export default class Spinner extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} zIndex="10000" className="pr-0" centered>
        <img src={image} alt="spinner" />
      </Modal>
    )
  }
}

