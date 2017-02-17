import Projects from './Projects.js';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  addProject: function(name) {
  	//Add project to database
    // const intake = Intake.findOne({_id: intakeId});
    // let newCount = parseInt(intake.studentLimit + numberOfUsersToAdd);
    // Projects.update({_id: intakeId}, {$set: {studentLimit: newCount}}, (err, res) => {
    //   if(err) {
    //     console.log(err);
    //   }
    //});
  }
});