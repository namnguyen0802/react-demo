import React, {Component} from 'react';

class SignInBuilder extends Component {
  state = {
    loading: false
  }

  componentDidMount() {
    this.props.onInitProject();
  }

  render() {
    return (
      "sign in"
    );
  }
}


export default SignInBuilder;
