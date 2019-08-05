import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default class Bid extends React.Component {

  render() {
    const pending = (
      <button className="btn btn-sm btn-primary" onClick={() => this.props.confirmBid(this.props.jobId, this.props.bid.user)}>Confirm</button>
    )
    const active = (
      <button className="btn btn-sm btn-success" disabled>Active</button>
    )

    return (
      <tr className="text-center py-1">
        <th className="align-middle px-1">
          <div>{this.props.number}</div>
        </th>
        <td width="30%" className="align-middle px-1" style={{ maxWidth: '60px' }}>
          ${this.props.bid.price}.00
        </td>
        <td width="30%" className="px-1">
          <button className="btn btn-circle p-0" onClick={() => this.props.getUserInfo(this.props.bid.user)}>
            <FaUserCircle size="1.8em" />
          </button>
        </td>
        <td width="30%" className="align-middle text-right pr-2">
          {this.props.bid.status === 'active' ? active : pending}
        </td>
      </tr>
    )
  }
}


// WEBPACK FOOTER //
// ./src/components/pages/Main/pages/Home/components/Job/Bid.js