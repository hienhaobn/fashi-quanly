const mongoose = require('mongoose');


// const userSchema = mongoose.Schema({  
//   username: String,
//   password: String,
//   roles: {
//     type: Number,
//     default: 2
//   },
//   created_at: {
//     type: Date,
//     default: Date.now()
//   },
//   updated_at: Date
// });

const userSchema = mongoose.Schema({  
  title: String,
  isComplete: {
    type: Boolean,
    default: false
  },
  children: [],
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date
});
module.exports = mongoose.model('User', userSchema);