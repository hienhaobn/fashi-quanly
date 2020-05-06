const UserEntity = require('../entity/user.entity');

module.exports = {
  'findUsersRepository': () => {
    return UserEntity.find().select('_id');
  },
  'createUserRepository': async (data) => {
    let dataUser = new UserEntity(data);
    await dataUser.save();
    return dataUser;
  }
}