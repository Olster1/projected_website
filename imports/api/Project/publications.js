import Projects from './Projects.js';

Meteor.publish("projects.allProjects", function() {
  return Projects.find();
});