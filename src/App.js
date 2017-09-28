import React, { Component } from "react";
import "./App.css";

const Profile = props => <div>Name: {props.user.name}</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "Chris" },
      hasError: false
    };
  }
  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };

  componentDidCatch(err, info) {
    console.log("error", err);
    console.log("info", info);
    this.setState(state => ({ ...state, hasError: true }));
    // good place to send the error to error reporting
    // sendToErrorReporting(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong!</div>;
    } else {
      return (
        <div>
          <Profile user={this.state.user} />
          <button onClick={this.updateUser}>Update</button>
        </div>
      );
    }
  }
}

export default App;
