import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProjectView from '../components/ProjectView.jsx';

import Projects from '../../api/Project/Projects';

export default createContainer(({ params }) => {
  const projectsHandle = Meteor.subscribe('projects.allProjects');

  const projects = Projects.find().fetch();

  const loading = !projectsHandle.ready();

  return {
  	loading,
    projects
  };
}, ProjectView);