import React from 'react';
import Dropzone from "react-dropzone"
import Address from "./components/Address";
import Skills from "./components/Skills";
import { Link } from 'react-router-dom';
import './Home.css';
import Job from './components/Job/Job';
import Bid from './components/Bid/Bid';


export default class Home extends React.Component {
  render() {
    const jobsArray1 = [];
    const jobsArray2 = [];
    const jobsArray3 = [];
    const myJobs = this.props.mainState.myJobs;
    myJobs.forEach(job => {
      const active = job.bids.filter(bid => bid.status === 'active');
      const pending = job.bids.filter(bid => bid.status === 'pending');
      if (active && active.length) { jobsArray1.push(<Job job={job} key={job._id} id={job._id} color="lightgreen" active />) }
      else if (pending && pending.length) { jobsArray2.push(<Job job={job} key={job._id} id={job._id} color="#47b9d2" confirmBid={this.props.confirmBid} />) }
      else { jobsArray3.push(<Job job={job} key={job._id} id={job._id} color="lightgrey" />) }
    })
    const bidsArray1 = [];
    const bidsArray2 = [];
    const myBids = this.props.mainState.myBids;
    myBids.forEach((bid, index) => {
      const status = bid.status;
      if (status === 'active') { bidsArray1.push(<Bid {...bid} key={'bid-' + index} color="lightgreen" active />) }
      else if (status === 'pending') { bidsArray2.push(<Bid {...bid} color="lightgrey" key={'bid-' + index} />) }
    })
    console.log("TESTTTTT")
    return (
      <div className="container" >
        <div className="row my-4 bg-light border rounded mx-0">
          <div className="col-12 col-lg-4 picture picturepadding d-flex justify-content-center align-items-center mt-2">
            <div className="middle">
          
              <h1> <ion-icon name="add-circle-outline" >+</ion-icon></h1>
            </div>
           
            <Dropzone width="100%" onDrop={this.props.onDrop} className="img-thumbnail" inputProps={{ className: 'maxWidth' }} style={{ width: '250px', height: '250px' }}></Dropzone>
             
          </div>
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12 col-md-6 flex-column justify-content-between align-self-stretch p-3 p-md-4">
                <h1>
                  {this.props.mainState.name}
                </h1>
                <h3>
                  {this.props.mainState.email}
                </h3>
              </div>
              <div className="col-12 col-md-6 flex-column justify-content-between align-self-stretch p-3 p-md-4">
                <h4><u>Address:</u></h4>
                <br />
                {this.props.mainState.address1}
                {this.props.mainState.address2}
                <br />
                {this.props.mainState.city}, {this.props.mainState.state}
                <br />
                {this.props.mainState.zip}
                <br />
                <br />
                <a href=" " onClick={this.props.onView}>Edit Address</a>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-12 col-lg-6 mt-3">
                <Link to="/main/post-job" className="w-100" style={{ maxWidth: '300px' }}><button className="btn btn-primary btn-block">Post a Job</button></Link>
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <Link to="/main/search-jobs" className="w-100" style={{ maxWidth: '300px' }}><button className="btn btn-primary btn-block">Search for Jobs</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="card">
                  <div className="card-header" >
                    My Events
                  </div>
                  <div className="card-body m-2 p-0" style={{ borderStyle: 'solid', borderWidth: '1px 1px 0px 1px', borderColor: '#dee2e6' }}>
                    {myJobs.length > 0 ? null : <div className="text-center p-3 border-bottom">No events.</div>}
                    <div className="container-fluid">
                      {
                        jobsArray1.length > 0 ?
                          <div className="row">
                            <div className="col py-1 d-flex align-items-center justify-content-center job-section">
                              <h6 className="mb-0">Active Events</h6>
                            </div>
                          </div>
                          : null
                      }
                      {this.props.mainState.myJobs ? jobsArray1 : null}
                      {
                        jobsArray2.length > 0 ?
                          <div className="row">
                            <div className="col py-1 d-flex align-items-center justify-content-center job-section">
                              <h6 className="mb-0">Events with Bids</h6>
                            </div>
                          </div>
                          : null
                      }
                      {this.props.mainState.myJobs ? jobsArray2 : null}
                      {
                        jobsArray3.length > 0 ?
                          <div className="row">
                            <div className="col py-1 d-flex align-items-center justify-content-center job-section">
                              <h6 className="mb-0">Pending Events</h6>
                            </div>
                          </div>
                          : null
                      }
                      {this.props.mainState.myJobs ? jobsArray3 : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="card">
                  <div className="card-header" >
                    My Bids
                    </div>
                  <div className="card-body m-2 p-0" style={{ borderStyle: 'solid', borderWidth: '1px 1px 0px 1px', borderColor: '#dee2e6' }}>
                    {myBids.length > 0 ? null : <div className="text-center p-3 border-bottom">No bids.</div>}
                    <div className="container-fluid">
                      {
                        bidsArray1.length > 0 ?
                          <div className="row">
                            <div className="col py-1 d-flex align-items-center justify-content-center job-section">
                              <h6 className="mb-0">Active Bids</h6>
                            </div>
                          </div>
                          : null
                      }
                      {this.props.mainState.myBids ? bidsArray1 : null}
                      {
                        bidsArray2.length > 0 ?
                          <div className="row">
                            <div className="col py-1 d-flex align-items-center justify-content-center job-section">
                              <h6 className="mb-0">Pending Bids</h6>
                            </div>
                          </div>
                          : null
                      }
                      {this.props.mainState.myBids ? bidsArray2 : null}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-12 mb-4">
                <div className="card">
                  <div className="card-header" >
                    Job History
                    </div>
                  <div className="card-body">
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-4">
            {this.props.mainState.addressFlag ?
              <Address
                address1={this.props.mainState.address1}
                address2={this.props.mainState.address2}
                city={this.props.mainState.city}
                state={this.props.mainState.state}
                zip={this.props.mainState.zip}
                onChange={this.props.onChange}
                onClick={this.props.onAddressClick}
              /> : null}
            <Skills
              skills={this.props.mainState.skills}
              skill={this.props.mainState.skill}
              onChange={this.props.onChange}
              onClick={this.props.onClick}
            />
          </div>
        </div>
      </div>
    )
  }
}