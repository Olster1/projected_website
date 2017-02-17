import React from 'react';
import {Grid, Row, Col, Input, ButtonInput, Checkbox} from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Project from './Project';

export default ProjectView = React.createClass({
  getInitialState() {
    return {
    
    }
  },

  propTypes: {
    projects: React.PropTypes.array.isRequired,
    loading: React.PropTypes.bool.isRequired,
  },

  render() {
    if(!this.props.loading) {
      return (
        <div>
          <h1>Projects</h1>
          <ul>
          {
            this.props.projects.map((project) => {
              return (
                <li key={project._id}> <Project text={project.text} /> </li>
              );
            })
          }
          </ul>
        </div>
      )
    } else {
      return <div className='uil-ring-css'><div></div></div>;
    }
  }
});