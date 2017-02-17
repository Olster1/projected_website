import React, { Component, PropTypes } from 'react';
 
export default Project = React.createClass({
  getInitialState() {
    return {
    
    }
  },

  propTypes: {
    text: React.PropTypes.string.isRequired,
  },

  render() {
   	return (
      <div className="project">
   		  {this.props.text}
   	  </div>
    );
   
  }
});
