import React, {useState} from 'react';
import * as builderActions from '../../store/actions/index';
import {connect} from "react-redux";

function SignInBuilder(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  // const handleLogin = () => {
  //   props.history.push('/dashboard');
  // }

  return (
    <div>
      Login<br/><br/>
      <div>
        Username<br/>
        <input type="text" {...username} autoComplete="new-password"/>
      </div>
      <div style={{marginTop: 10}}>
        Password<br/>
        <input type="password" {...password} autoComplete="new-password"/>
      </div>
      <input type="button" value={loading ? 'Loading...' : 'Login'} disabled={loading}/><br/>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

const mapStateToProps = state => {
  return {
    isSigIn: state.isSigIn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(builderActions.signIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInBuilder);
