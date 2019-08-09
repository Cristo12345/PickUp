import React, { Component } from "react";
// import axios from 'axios';
// import "./Register.css";
import API from "../utils/API";


class Register extends Component {
    state = {
        name: "",
        email: "",
        password: ""

    }
    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleSubmit = event => {
        event.preventDefault();
        alert("u submitted");

        let user = { name: this.state.name, email: this.state.email, password: this.state.password };
        console.log(user);
    
      
        API.saveUser(user);
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        // })
    }

    register = () => {
        let user = { name: this.state.name, email: this.state.email, password: this.state.password }
        // API.createUserProfile(user)
        // .then(res =>console.log("user added to userData"))
        // .catch(err => console.log(err));

        API.registerUser(user)
            .then(res => this.props.history.replace('/login'))
            .catch(err => console.log(err));
    }

    goToLoginPage() {
        window.location.href = window.location.origin + '/login'
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <label>
          Email:
          <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input name="password" type="text" value={this.state.password} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        )}};






            // <div className="container">




            //     <div className="container py-5">
            //         <div className="row">
            //             <div className="col-md-12">
            //                 <h2 className="text-center text-black mb-4">Need Help?</h2>
            //                 <div className="row">
            //                     <div className="col-md-6 mx-auto">


            //                         <div className="card rounded-0">
            //                             <div className="card-header">
            //                                 <h3 className="mb-0">Register</h3>
            //                             </div>
            //                             <div className="card-body">
            //                                 <div className="form-group">
            //                                     <input className="form-control"
            //                                         value={this.state.topic}
            //                                         onChange={this.handleInputChange}
            //                                         name="email"
            //                                         placeholder="Email"
            //                                     />
            //                                 </div>
            //                                 <div className="form-group">
            //                                     <input className="form-control"
            //                                         value={this.state.topic}
            //                                         onChange={this.handleInputChange}
            //                                         name="name"
            //                                         placeholder="Name"
            //                                     />
            //                                 </div>
            //                                 <div className="form-group">
            //                                     <input className="form-control"
            //                                         value={this.state.topic}
            //                                         onChange={this.handleInputChange}
            //                                         name="password"
            //                                         placeholder="Password"
            //                                         type="password"
            //                                     />
            //                                 </div>
            //                                 <button className="btn btn-primary" disabled={!(this.state.email && this.state.name && this.state.password)} onClick={this.goToLoginPage.bind(this)}>
            //                                     Register
            //                 </button>
            //                             </div>


            //                         </div>

            //                     </div>


            //                 </div>


            //             </div>


            //         </div>

            //     </div>







                /* <div className="row">
                    <div className="col-12 col-lg-6 mt-3">
                        <div className="card">
                            <div className="card-header text-center" >
                                Register
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input className="form-control"
                                        value={this.state.topic}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                        value={this.state.topic}
                                        onChange={this.handleInputChange}
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                        value={this.state.topic}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <button className="btn btn-primary" disabled={!(this.state.email && this.state.name && this.state.password)} onClick={this.register}>
                                    Register
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <div className="card h-100">
                            <div className="card-header text-center" >
                                Login
                            </div>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>Login here.</div>
                                <div>
                                    <button className="btn text-light btn-primary" onClick={this.goToLoginPage.bind(this)}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */
//             // </div>
//         );
//     }
// }

export default Register;


// WEBPACK FOOTER //
// ./src/components/pages/Register/Register.js