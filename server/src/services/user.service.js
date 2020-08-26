const UserRepository = require('../repository/user.repository');
const UserDetailRepository = require('../repository/userDetail.repository');
const userRepository = require('../repository/user.repository');
module.exports = {
  'getUsersService': async () => {
    let data = [];
    let dataUser = await UserRepository.findUsersRepository();
  //   await Promise.all(dataUser.map( user => {
  //     return data.push(user._id);
  //  }));
    return dataUser;
  },
  'postUserService': async (data) => {
    if(data) {
      let dataSave = await UserRepository.createUserRepository(data.title);
      return dataSave;
    }
    return 'error save by service'
  },
  'deleteUserService': async (id) => {
    const statusDelete = await userRepository.deleteUserRepository(id);
    statusDelete ? 'Delete success' : 'delete fail';
  },
  'edituserService': async (id, data) => {
    const statusEdit = await userRepository.editUserRepository(id, data);
    statusEdit ? 'edit todo success' : 'edit fail';
  }
}