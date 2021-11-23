import "./App.css";
import React, { Component } from "react";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import Home from "./Component/Home/Home";
import data from "./Component/data";
import Details from "./Component/Details/Details";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "Details",
      info: [],
    };
  }

  componentWillMount() {
    // console.log("comdm", data);
    this.setState({ info: data });
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  renderSwitch(param) {
    switch (param) {
      case "SignIn":
        return <SignIn onRouteChange={this.onRouteChange} />;
      case "SignUp":
        return <SignUp onRouteChange={this.onRouteChange} />;
      case "Home":
        return (
          <Home onRouteChange={this.onRouteChange} info={this.state.info} />
        );

      case "Details":
        return (
          <Details onRouteChange={this.onRouteChange} info={this.state.info} />
        );

      default:
        return <SignIn onRouteChange={this.onRouteChange} />;
    }
  }

  render() {
    // console.log("app", this.state.info);
    return <div className="App">{this.renderSwitch(this.state.route)}</div>;
  }
}

export default App;
