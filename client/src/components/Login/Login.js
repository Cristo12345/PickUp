import React, { Component } from "react";
import "./Login.css";
// import AuthService from '../../utils/AutService';

class Login extends Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.Auth = new AuthService();
    }

    state = {
        user: "",
        email: "",
        password: ""
    }

    // componentWillMount() {
    //     if (this.Auth.loggedIn())
    //         this.props.history.replace('/home');
    // }
    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // login = () => {
    //     this.Auth.login(this.state.email, this.state.password)
    //         .then(res => {
    //             this.props.history.replace('/home');
    //         })
    //         .catch(err => {
    //             alert(err);
    //         })
    // }

    goToRegisterPage() {
        window.location.href = window.location.origin + '/register'
    }

    goToProfilePage() {
        window.location.href = window.location.origin + '/profile'
    }

    render() {
        return (
            <div className="container">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center text-black mb-4">Welcome</h2>
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="card rounded-0">
                                        <div className="card-header">
                                            <h3 className="mb-0">Login</h3>
                                        </div>
                                        <div className="card-body">
                                            <input className="form-control"
                                                value={this.state.topic}
                                                onChange={this.handleInputChange}
                                                name="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <input className="form-control"
                                                value={this.state.topic}
                                                onChange={this.handleInputChange}
                                                name="password"
                                                placeholder="Password"
                                                type="password"
                                            />
                                        </div>
                                        <button className="btn btn-primary m-3"
                                            disabled={!(this.state.email && this.state.password)}
                                            onClick={this.goToProfilePage.bind(this)}
                                        >
                                            Log In
                                        </button>
                                        <h6 className="mx-3 mb-0">Don't have an account?</h6>
                                        <button className="btn text-light btn-primary mx-3 mt-1 mb-3" onClick={this.goToRegisterPage.bind(this)}>
                                            Register Here
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Login;

