import React, { Fragment } from 'react';
import './SearchJobs.css';
import { Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';


import API from '../../../../utils/API';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';


//import bootbox from "../../../../../bootbox.min";

class SearchJobs extends React.Component {

  state = {
    zipcode: '',
    jobs: null,
    spinner: false,
    modal: false,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


  componentDidUpdate() {
    if (this.state.zipcode.length > 5) {
      this.setState({
        zipcode: this.state.zipcode.slice(0, -1)
      })
    }
  }

  handler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  searchJobs(event) {
    event.preventDefault();
    this.toggle1();
    axios.get('/api/jobs/' + this.state.zipcode)
      .then(res => {
        console.log(res);
        this.toggle1();
        this.showJobs(res);
      })
      .catch(err => console.error(err));
  }

  showJobs(res) {
    this.setState({
      jobs: res.data
    })
  }

  makeBid = (jobId) => {
    const input = document.getElementById(jobId);
    let priceInput = input.value;
    let priceNumber = Number(priceInput);
    let user = this.props.mainState.id;
    let status = "pending"
    API.saveBid(user, priceNumber, status, jobId)
      .then(res => console.log(res.data))//need modal here for res.data
      .catch(err => console.log(err))
  }

  toggle1() {
    this.setState({
      spinner: !this.state.spinner
    });
  }

  showDescription = (des) => {
    console.log(des)//need modal here for des


  }

  render() {
    let jobsArray = [];
    if (this.state.jobs) {
      const myJobs = this.state.jobs;
      myJobs.forEach(elem => {
        let address = elem.address.address1 + ', ' + elem.address.city
        jobsArray.push(
          <tr key={elem._id}>
            <th className="align-middle">
              {elem.title}
            </th>
            <td className="align-middle">
              {elem.category}
            </td>
            <td className="align-middle">
              {/* <a href ="#" onClick={()=>this.showDescription(elem.description)}>Description</a> */}
              <span onClick={() => this.showDescription(elem.description)}>
                <button className="btn btn-sm btn-secondary" onClick={this.toggle}>
                  Description
              </button>
              </span>
              {/* MODAL */}
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Event Description</ModalHeader>
                <ModalBody>
                  {elem.description}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.toggle}>Close</Button>
                </ModalFooter>
              </Modal>
            </td>
            <td className="align-middle">
              {address}
            </td>
            <td style={{ minWidth: '80px', maxWidth: '80px' }} className="input-group-sm align-middle">
              <Input className="text-center" placeholder="$$$" id={elem._id} />
            </td>
            <td className="align-middle">
              {/* <button className="bidButton btn btn-primary text-center" onClick={() => this.makeBid(elem._id)} > Submit a bid </button> */}
              <span onClick={() => this.makeBid(elem._id)}>
                <button className="btn btn-sm btn-primary" onClick={(e) => { if (window.alert('Successfully Submitted!')) this.makeBid(elem._id) }}>
                  Bid
              </button>
              </span>
            </td>
          </tr>
        )
      })
    }

    return (
      <div className="container-fluid text-center filler">
        <div className="row">
          <div className="col mt-4">
            <h1>Search</h1>
          </div>
        </div>
        <Form>
          <FormGroup>
            <div className="row justify-content-center">
              <div className="col" style={{ maxWidth: '400px' }}>
                <Input className="form-input" id="zip-code-input" placeholder="Zip Code" onChange={this.handler.bind(this)} value={this.state.zipcode} name='zipcode' />
              </div>
              <div className="col-auto pl-0 py-0">
                <button className="btn btn-primary" onClick={this.searchJobs.bind(this)} >Search</button>
              </div>
            </div>
          </FormGroup>
        </Form>
        
        <div className="row d-flex justify-content-center">
          <div className="col">
            {
              this.state.jobs ?
                <Fragment>
                  <div className="border mb-4">
                    <Table striped hover className="bg-light mb-0 border" size="sm">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Description</th>
                          <th>Address</th>
                          <th>Price</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobsArray}
                      </tbody>
                    </Table>
                  </div>
                </Fragment>
                :
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <h3 className="bg-light p-3 border rounded">No Results :{'('}</h3>
                  </div>
                </div>
            }
          </div>
        </div>
       
      </div>
    )
  }
}

export default SearchJobs;
