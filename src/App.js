import React, { Component } from "react";
import "./App.css";

const Profile = props => <div>Name: {props.user.name}</div>;

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
        <Profile user={this.state.user} />
        <button onClick={this.updateUser}>Update</button>
      </div>
    );
  }
}

export default App;
