import React from 'react';
import { FaUserCircle, FaExclamationCircle } from 'react-icons/fa';
import '../Job/Job.css';
import axios from 'axios';
import UserModal from '../Job/UserModal';

export default class Job extends React.Component {

  state = {
    collapse: false,
    modal: false,
    userData: null
  }

  getUserInfo(id) {
    axios.get(`/api/userData/${id}`)
      .then(res => {
        console.log(res);
        this.toggleModal();
        this.setState({
          userData: res.data
        })
      })
      .catch(err => console.error(err));
  }

  toggleCollapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const bid = this.props;
    return (
      <div className="row">
        <div className="col p-0">
          <div className="row border-bottom p-2 mx-0" >
            <div className="col-auto d-flex align-items-center py-0 pl-0">
              {
                bid.status === 'active' ?
                  <button className="btn p-0 btn-circle" onClick={() => this.getUserInfo(bid.ownerId)}>
                    <FaUserCircle size="1.8em" />
                  </button>
                  :
                  <FaUserCircle size="1.8em" color='rgb(241, 241, 241)' />
              }
            </div>
            <div className="col d-flex align-items-center pl-0 py-0 pr-2">
              <strong>{bid.title}</strong>
            </div>
            <div className="col-4 d-flex align-items-center p-0">
              {bid.category}
            </div>
            <div className="col-auto d-flex align-items-center justify-content-end p-0">
              {
                bid.status === 'active' ?
                  <FaExclamationCircle size="1.5em" color={this.props.color} className="pointer" onClick={() => this.getUserInfo(bid.ownerId)} />
                  :
                  <FaExclamationCircle size="1.5em" color={this.props.color} />
              }
            </div>
          </div>
        </div>
        <UserModal modal={this.state.modal} toggleModal={this.toggleModal.bind(this)} userData={this.state.userData} active={true} />
      </div>
    )
  }
}


// WEBPACK FOOTER //
// ./src/components/pages/Main/pages/Home/components/Bid/Bid.js