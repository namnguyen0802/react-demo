import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as projectBuilderActions from '../../store/actions/index';

class EditProjectBuilder extends Component {
  state = {
    loading: false
  }

  componentDidMount() {
    console.log('jajjaajja')
    this.props.onGetProject(this.props.projectId);
  }

  render() {
    return "nananan"
  }
}

const mapStateToProps = (state, ownProps) => {
  const projectId = ownProps.match.params.id;

  return {
    projectId,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProject: (projectId) => dispatch(projectBuilderActions.onGetProject(projectId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectBuilder);
