import React, { Component } from "react";
import "./Address.css"

class Address extends Component {
    render() {
        return (
            <div className="row mb-3 border rounded">
                <div className="col-md-12 p-0">
                    <div className="card">
                        <div className="card-header text-center" >
                            Address
                    </div>
                        <div className="card-body">
                            <div className="form-group form-inline">
                            <label for="address1" style={{width: "100px"}}>Address1 : </label>
                                <input className="form-control  m-1"
                                    name={"address1"}
                                    value={this.props.address1}
                                    placeholder={"address1"}
                                    onChange={this.props.onChange}
                                />
                                

                                 <label for="address2" style={{width: "100px"}}>Address2 : </label>
                                <input className="form-control m-1"
                                    name={"address2"}
                                    value={this.props.address2 }
                                    placeholder={"address2"}
                                    onChange={this.props.onChange}
                                />

                                 <label for="city" style={{width: "100px"}} >    City : </label>
                                <input className="form-control m-1"
                                    name={"city"}
                                    value={this.props.city}
                                    placeholder={"city"}
                                    onChange={this.props.onChange}
                                />

                                <label for="state" style={{width: "100px"}} >State : </label>
                                <input className="form-control m-1"
                                    name={"state"}
                                    value={this.props.state}
                                    placeholder={"state"}
                                    onChange={this.props.onChange}
                                />
                                 <label for="zip" style={{width: "100px"}} >Zip :</label>
                                <input className="form-control m-1"
                                    name={"zip"}
                                    value={this.props.zip}
                                    placeholder={"zip"}
                                    onChange={this.props.onChange}
                                /> 

                                <button className="btn buttoncolor lettercolor2 mt-3"
                                    disabled={!(this.props.address1 && this.props.city && this.props.state && this.props.zip)}
                                    onClick={this.props.onClick}
                                >
                                    Edit Address
                      </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        )
    }

}



export default Address;


// WEBPACK FOOTER //
// ./src/components/pages/Main/pages/Home/components/Address/Address.js