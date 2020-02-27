import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/Admin">Goto Admin</Link>
      </div>
    );
  }
}

export default withRouter(Home);
