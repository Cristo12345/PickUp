import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { Collapse, Table } from 'reactstrap';
import Bid from './Bid';
import './Job.css';
import axios from 'axios';
import UserModal from './UserModal';

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
    const job = this.props.job;
    const bids = [];
    job.bids.forEach((bid, index) => {
      bids.push(
        <Bid
          bid={bid}
          key={bid.user}
          jobId={job._id}
          number={index + 1}
          confirmBid={this.props.confirmBid}
          getUserInfo={this.getUserInfo.bind(this)} />
      )
    })

    return (
      <div className="row">
        <div className="col p-0">
          <div className="row border-bottom p-2 mx-0" >
            <div className="col col-sm d-flex align-items-end pl-0 py-0 pr-2">
              <strong>{job.title}</strong>
            </div>
            <div className="col-4 d-flex align-items-end p-0">
              {job.category}
            </div>
            <div className="col-auto d-flex align-items-end justify-content-end p-0">
              <FaExclamationCircle size="1.5em" color={this.props.color} className="pointer" onClick={this.toggleCollapse.bind(this)} />
            </div>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <Table hover className="mb-0">
              <tbody style={{ background: '#EFEFEF' }}>
                {bids.length > 0 ? bids : <tr><td><h3 className="ml-3 my-2">No bids yet :{'('}</h3 ></td></tr>}
              </tbody>
            </Table>
            <div style={{ background: 'black', height: '2px' }} />
          </Collapse>
        </div>
        <UserModal modal={this.state.modal} toggleModal={this.toggleModal.bind(this)} userData={this.state.userData} active={this.props.active ? true : false} />
      </div >
    )
  }
}


// WEBPACK FOOTER //
// ./src/components/pages/Main/pages/Home/components/Job/Job.js