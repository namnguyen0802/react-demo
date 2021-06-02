import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as projectBuilderActions from '../../store/actions/index';

class UserBuilder extends Component {
  state = {
    loading: false
  }

  componentDidMount() {
    this.props.onInitProject();
  }

  render() {

    return (
      "user"
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onInitProject: () => dispatch(projectBuilderActions.initProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBuilder);
