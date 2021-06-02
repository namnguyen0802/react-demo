import {Component} from 'react';
import {connect} from 'react-redux';
import * as projectBuilderActions from '../../store/actions/index';
import {Table} from "react-bootstrap";

class ProjectBuilder extends Component {
  state = {
    loading: false
  }

  componentDidMount() {
    this.props.onInitProject();
  }

  handleEditCourse = () => {
    this.props.history.push(`/project/1`);
  }

  render() {
    let listProject = [];
    if (this.props.projects) {
      listProject = Object.keys(this.props.projects)
        .map(key => {
          return <tr key={key}>
            <td>{key}</td>
            <td>{this.props.projects[key].name}</td>
            <td>
              <span>
                <i className="fa fa-edit mr-2" onClick={this.handleEditCourse}/>
                <i className="fa fa-trash"/>
              </span>
            </td>
          </tr>;
        });
    }

    return (
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>User name</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {listProject}
        </tbody>
      </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBuilder);
