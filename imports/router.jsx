import React from 'react';
import {mount} from 'react-mounter';

// IMPORT LAYOUTS
import { MainLayout } from './ui/layouts/MainLayout.jsx';

// IMPORT CONTAINERS
import ProjectContainer from './ui/containers/ProjectContainer';
import LoginContainer from './ui/containers/LoginContainer';

FlowRouter.route("/", {
  name: "home",
  action() {
    mount(MainLayout, {
      content: () => (<LoginContainer />)
    });
  }
});

FlowRouter.route("/register", {
  name: "register",
  action() {
    mount(MainLayout, {
      content: () => (<RegisterContainer />)
    });
  }
});

FlowRouter.route('/projects', {
  name: 'view_projects',
  action(params) {
    mount(MainLayout, {
      content: () => (<ProjectContainer />)
    });
  }
});

FlowRouter.route('/projects/:_id', {
  name: 'view_single_project',
  action(params) {
    mount(MainLayout, {
      content: () => (<ProjectContainer />)
    });
  }
});