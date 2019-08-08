import React, { Component } from "react";
import TopNav from "./components/TopNav";
// import LoginNav from "./components/LoginNav";
import Login from "./components/Login/Login";
import Register from "./pages/Register";
import SavedItems from "./pages/SavedItems";
import AddItem from "./pages/AddItem";
import UpcomingEvents from "./pages/UpcomingEvents";
import Welcome from "./pages/Welcome/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {

    // state = {
    //     loggedIn: false
    // }


    render() {
        return (
            // placeholder ternary to check if loggedIn - if yes, directed to Saved items page as default, if no, direct to login page
            // loggedIn will need to be defined when building authentication
            //    loggedIn ? (
            <
            div className = "App" >
            <
            TopNav / >


            <
            Router >
            <
            div >
            <
            Switch >
            <
            Route exact path = "/"
            component = { Welcome }
            /> <
            Route exact path = "/home"
            component = { SavedItems }
            /> <
            Route exact path = "/login"
            component = { Login }
            /> <
            Route exact path = "/additem"
            component = { AddItem }
            /> <
            Route exact path = "/upcomingevents"
            component = { UpcomingEvents }
            /> <
            Route exact path = "/register"
            component = { Register }
            />\

            <
            /Switch> <
            /div> <
            /Router> <
            /div>
            //    ) : (
            //        <div className="Login">
            //             <LoginNav />
            //             <Router>
            //                 <div>
            //                     <Switch>
            //                         <Route exact path="/" component={Login} />
            //                         <Route exact path="/signup" component={Signup} />
            //                     </Switch>
            //                 </div>
            //             </Router>
            //        </div>
            // )
        );
    }
}

export default App;