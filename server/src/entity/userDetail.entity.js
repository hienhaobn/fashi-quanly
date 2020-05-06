const mongoose = require('mongoose');

const userDetailSchema = mongoose.Schema({  
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  dob: Date,
  email: String,
  phone: String,
  address: String,
  status: {
    type: Boolean,
    default: true
  },
  image_avatar: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date 
});

module.exports = mongoose.model('UserDetail', userDetailSchema);