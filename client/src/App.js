import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Footer from "./components/Footer/Footer";





class App extends Component {


  render() {
    return (
      <Router>
        <div className="filler">
          <div className="filler">
            <Header />
            <Route path="/main" component={Main} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
           
          </div>
          <Footer />
        </div>
      </Router >
    );
  }
}
export default App;




