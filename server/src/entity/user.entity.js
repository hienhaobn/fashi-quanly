const mongoose = require('mongoose');

const userSchema = mongoose.Schema({  
  username: String,
  password: String,
  roles: {
    type: Number,
    default: 2
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date
});

module.exports = mongoose.model('User', userSchema);