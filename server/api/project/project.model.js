'use strict';

import mongoose from 'mongoose';
import constants from 'constants'

//#TEMP
var Comment = new mongoose.Schema({
    content: String,
    author: String
});
//#END
console.log("styatusy" + constants.projectStatuses);
var ProjectSchema = new mongoose.Schema({
  name: String,
  info: String,
  status: {type: String, enum: constants.projectStatuses},
  comments: [Comment],
  active: {type: Boolean, default: true}
});

export default mongoose.model('Project', ProjectSchema);
