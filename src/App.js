import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';

import "./App.css";
import ProjectBuilder from "./containers/ProjectBuilder/ProjectBuilder";
import {ToastContainer} from "react-toast";
import UserBuilder from "./containers/UserBuilder/UserBuilder";
import SignInBuilder from "./containers/AuthBuilder/SignInBuilder";
import EditProjectBuilder from "./containers/ProjectBuilder/EditProjectBuilder";

function App() {
  return (
    <div>
      <ToastContainer delay={3000} position={"top-right"}/>
      <Layout>
        <Switch>
          <Route path="/" exact component={ProjectBuilder}/>
          <Route path="/project" exact component={ProjectBuilder}/>
          <Route path="/project/:id" component={EditProjectBuilder} />
          <Route path="/user" exact component={UserBuilder}/>
          <Route path="/sign-in" exact component={SignInBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
