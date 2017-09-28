import React, { Component } from "react";
import "./App.css";

const Profile = props => <div>Name: {props.user.name}</div>;

class MyErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(err, info) {
    this.setState(state => ({ ...state, hasError: true }));
    // sendToErrorReporting(err, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong!</div>;
    } else {
      return this.props.children;
    }
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "Chris" }
    };
  }
  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };

  render() {
    return (
      <div>
        <MyErrorBoundry>
          <Profile user={this.state.user} />
        </MyErrorBoundry>
        <button onClick={this.updateUser}>Update</button>
      </div>
    );
  }
}

export default App;
