import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class UserModal extends React.Component {
  render() {
    const data = {
      name: '',
      image: '',
      email: ''
    };
    if (this.props.userData) {
      const userData = this.props.userData;
      let image = null;
      if (userData.image) {
        image = Buffer.from(userData.image, 'base64');
      } else {
        image = null;
      }
      data.name = userData.firstName;
      data.image = image;
      data.email = userData.email
    }
    return (
      <Modal isOpen={this.props.modal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.props.toggleModal}>{data.name}</ModalHeader>
        <ModalBody>
          <div>
            <img src={data.image ? data.image : '../../../../../../images/profileImage.png'} alt="" className="img-fluid rounded" style={{ maxWidth: '150px' }} />
          </div>
          <div>
            {this.props.active ? 'Email: ' + data.email : null}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-primary" onClick={this.props.toggleModal}>Close</Button>
        </ModalFooter>
      </Modal>
    )
  }
}




// WEBPACK FOOTER //
// ./src/components/pages/Main/pages/Home/components/Job/UserModal.js