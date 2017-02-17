import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from "meteor/aldeed:simple-schema"

export default Projects = new Mongo.Collection('projects');

// var schema = new SimpleSchema({
//   text: {
//     type: String,
//     label: "userId",
//   }
// });

// Projects.attachSchema(schema);
