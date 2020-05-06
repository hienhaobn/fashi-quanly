const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
module.exports = {
  'connect': (uri) => {
    mongoose.connect(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    }).catch(err => console.info(err));
  }
}