import React from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalBody, FormFeedback, ModalHeader, ModalFooter } from 'reactstrap';

import './PostJob.css';
import Address from "../Home/components/Address";
import axios from 'axios';

export default class PostJob extends React.Component {
  state = {
    title: '',
    category: '',
    description: '',
    address: '', //this is just a string in purpose of viewing it on the page 
    address1: '',
    address2: '',
    state: '',
    city: '',
    zip: '',
    addressFlag: 0,
    spinner: false,
    success: false
  }

  componentDidMount = () => {
    let address = '';
    if ((!this.props.mainState.address1) || (!this.props.mainState.state) || (!this.props.mainState.city) || (!this.props.mainState.zip)) {
      address = "";
    }
    else
     {
      if (this.props.mainState.address2) {
        address = this.props.mainState.address1 + " " + this.props.mainState.address2 + " " + this.props.mainState.state + " " + this.props.mainState.city + " " + this.props.mainState.zip
      }
      else {
        address = this.props.mainState.address1 + " " + this.props.mainState.state + " " + this.props.mainState.city + " " + this.props.mainState.zip
      }
      this.setState({ address: address, address1: this.props.mainState.address1, address2: this.props.mainState.address2, state: this.props.mainState.state, city: this.props.mainState.city, zip: this.props.mainState.zip })
    }
   
  }

  handler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  resetForm() {
    this.setState({
      title: '',
      category: '',
      description: ''
    })
  }

  editAddress = (event) => {
    event.preventDefault();
    this.setState({ addressFlag: 0 })
    let address = '';
    if (this.state.address2) {
      address = this.state.address1 + " " + this.state.address2 + " " + this.state.state + " " + this.state.city + " " + this.state.zip
    }
    else {
      address = this.state.address1 + " " + this.state.state + " " + this.state.city + " " + this.state.zip
    }
    this.setState({ address: address, address1: this.state.address1, address2: this.state.address2, state: this.state.state, city: this.state.city, zip: this.state.zip })
  }


  viewAddress = (e) => {
    e.preventDefault();
    this.setState({ addressFlag: 1 })
  }


  submit(event) {
    event.preventDefault();
    const title = this.state.title;
    const category = this.state.category;
    const description = this.state.description;
    const address = this.state.address;
    const titleInput = document.getElementById('title-input');
    const categoryInput = document.getElementById('category-input');
    const descriptionInput = document.getElementById('description-input');
    const addressInput = document.getElementById('address-input');

    //form validation
    if (!title || !category || !description || !address) {
      if (!title) titleInput.classList.add('is-invalid');
      else {
        titleInput.classList.remove('is-invalid');
        titleInput.classList.add('is-valid');
      }
      if (!category) categoryInput.classList.add('is-invalid');
      else {
        categoryInput.classList.remove('is-invalid');
        categoryInput.classList.add('is-valid');
      }
      if (!description) descriptionInput.classList.add('is-invalid');
      else {
        descriptionInput.classList.remove('is-invalid');
        descriptionInput.classList.add('is-valid');
      }
      if (!address) addressInput.classList.add('is-invalid');
      else {
        addressInput.classList.remove('is-invalid');
        addressInput.classList.add('is-valid');
      }
    } else {

      //request
      this.toggle1();
      axios.post('/api/jobs', {
        owner: this.props.mainState.id,
        title: this.state.title,
        description: this.state.description,
        category: this.state.category,
        address: {
          address1: this.state.address1,
          address2: this.state.address2,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip
        } //now you can take address1,address2,state,city,zip from his.state
      })
        .then(res => {
          this.toggle1();
          this.toggle2();
          this.resetForm();
          console.log(res);
        })
        .catch(err => {
          console.error(err);
          this.toggle1();
        })
    }
  }

  toggle1() {
    this.setState({
      spinner: !this.state.spinner
    });
  }

  toggle2() {
    this.setState({
      success: !this.state.success
    });
  }

  redirect() {
    window.location = window.location.origin + '/main/home'
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 border rounded py-3 my-3 mx-2 bg-light">
            <h4 className="text-center">Post an Event</h4>
            <Form id="post-job-form">
              <FormGroup>
                <Label>Title</Label>
                <Input type="text" id="title-input" placeholder="title" name="title" value={this.state.title} onChange={this.handler.bind(this)} />
                <FormFeedback>Plase add a title.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Category</Label>
                <Input type="text" id="category-input" placeholder="category" name="category" value={this.state.category} onChange={this.handler.bind(this)} />
                <FormFeedback>Plase add a Category.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input type="text" id="address-input" placeholder="address" name="address" value={this.state.address} readonly="readonly" />
                <a href=" " onClick={this.viewAddress}>Add or Edit Address</a>
                <FormFeedback>Plase add an address.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="textarea" id="description-input" placeholder="description" rows="5" name="description" value={this.state.description} onChange={this.handler.bind(this)} required />
                <FormFeedback>Plase add a Description.</FormFeedback>
              </FormGroup>
              <button className="btn btn-primary" onClick={this.submit.bind(this)} type="submit">Submit</button>
            </Form>
          </div>
          <div className="col-md-4  py-3 my-3 mx-2 ">
            {this.state.addressFlag ?
              <Address
                address1={this.state.address1}
                address2={this.state.address2}
                city={this.state.city}
                state={this.state.state}
                zip={this.state.zip}
                onChange={this.handler}
                onClick={this.editAddress}
              /> : null}
          </div>
        </div>

        
        <Modal isOpen={this.state.success} zIndex="10000" className="pr-0" centered onEnter={this.addStyling}>
          <ModalHeader>
            Success!!
          </ModalHeader>
          <ModalBody>
            Job created!
          </ModalBody>
          <ModalFooter>
            <div className="w-100">
              <button className="btn btn-block btn-primary" onClick={this.toggle2.bind(this)}>Create Another Event</button>
              <button className="btn btn-block btn-primary mt-3" onClick={this.redirect.bind(this)}>Home</button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}