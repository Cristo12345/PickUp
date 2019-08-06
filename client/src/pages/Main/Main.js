import React, { Component } from "react";
import withAuth from '../../components/withAuth';
import AuthService from '../../components/AuthService';
import API from "../../utils/API";
import { Route } from 'react-router-dom';
import PostJob from './pages/PostJob/PostJob';
import SearchJobs from './pages/SearchJobs/SearchJobs';
import Home from './pages/Home/Home';
import axios from 'axios';


class Main extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    id: "",
    skill: "",
    skills: [],
    email: "",
    phone: "",
    name: "",
    image: null,
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    myJobs: [],
    myBids: [],
    history: [],
    addressFlag: 0
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBidData() {
    const jobIds = this.state.myBids;
    axios.get('/api/bids', { params: { jobIds: jobIds } })
      .then(res => {
        const bids = []
        res.data.forEach(job => {
          job.bids.forEach(bid => {
            if (bid.user === this.state.id) {
              const bidInfo = {
                status: bid.status,
                price: bid.price,
                address: job.address,
                title: job.title,
                category: job.category,
                description: job.description,
                ownerId: job.owner
              }
              bids.push(bidInfo);
            }
          })
        })
        this.setState({
          myBids: bids
        })
      })
      .catch(err => console.log(err));
  }

  getUserInfo = (email) => {
    API.getUserInfoFromDB(email)
      .then(res => {
        const data = res.data;
        const address = data.address;
        if (data.image) {
          var b64string = data.image;
          var buf = Buffer.from(b64string, 'base64');
        }
        this.setState({
          skills: data.skills,
          id: data._id,
          myJobs: data.myJobs,
          myBids: data.myBids,
          address1: address ? address.address1 : null,
          address2: address ? address.address2 : null,
          state: address ? address.state : null,
          city: address ? address.city : null,
          zip: address ? address.zip : null,
          image: buf ? buf : null
        })
      })
      .then(() => {
        this.getBidData()
      })
      .catch(err => console.log(err));
  }

  componentDidMount = () => {
    //call the function to retrive user info 
    this.getUserInfo(this.Auth.getProfile().email);
    //get user email and name from the token through getProfile function
    this.setState({
      name: this.Auth.getProfile().name,
      email: this.Auth.getProfile().email
    });
  }

  viewAddress = (e) => {
    e.preventDefault();
    this.setState({ addressFlag: 1 })
  }

  addSkill = () => {
    let tempSkillArray = this.state.skills;
    tempSkillArray.push(this.state.skill);
    API.updateSkills(tempSkillArray, this.state.id)
      .then(res => this.getUserInfo(this.Auth.getProfile().email)) //this.setState({skills:res.data.skills}))//here we retrive the data and set state each with its value 
      .catch(err => console.log(err));
    this.setState({ skill: "" })
  }

  saveImage = (files) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      this.setState({ image: dataURL })
      API.saveImage(dataURL, this.Auth.getProfile().email)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
    reader.readAsDataURL(files[0]);
  }

  editAddress = (event) => {
    event.preventDefault();
    let data = {
      address1: this.state.address1,
      address2: this.state.address2,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      id: this.state.id
    }
    this.setState({ addressFlag: 0 })
    API.updateAddress(data)
      .then(res => this.getUserInfo(this.Auth.getProfile().email))
      .catch(err => console.log(err));
  }

  getUserDataById(event) {
    event.preventDefault();
    console.log('hello');
    const id = this.state.id;
    axios.get(`/api/userData/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
  }

  getUserDataPopulate(event) {
    event.preventDefault();
    const id = this.state.id;
    const field = 'myJobs';
    axios.get(`/api/userData/populate/${id}/${field}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
  }

  confirmBid(jobId, userId) {
    axios.put('/api/bid/confirm', {
      jobId: jobId,
      userId: userId
    })
      .then(() => {
        this.getUserInfo(this.Auth.getProfile().email);
        this.setState({
          name: this.Auth.getProfile().name,
          email: this.Auth.getProfile().email
        });
      });
  }

  render() {
   
    return (
      <div className="d-flex flex-column flex-grow-1">
        <Route exact path="/main/home" render={(props) => <Home {...props} mainState={this.state} onChange={this.handleInputChange} onClick={this.addSkill} onAddressClick={this.editAddress} onView={this.viewAddress} onDrop={this.saveImage} confirmBid={this.confirmBid.bind(this)} />} />
        <Route exact path="/main/search-jobs" render={(props) => <SearchJobs {...props} mainState={this.state} />} />
        <Route exact path="/main/post-job" render={(props) => <PostJob {...props} mainState={this.state} />} />

      </div>
    );
  }
}

export default withAuth(Main);