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
  // 'getUserService': async () => {
  //   return 
  // },
  'postUserService': async (data) => {
    if(data) {
      let dataSave = await UserRepository.createUserRepository(data.title);
      return dataSave;
    }
    return 'error save by service'
  },
  'deleteUserService': async (id, idChild) => {
    if(id && idChild) {
      console.log('this is delete service---------');
      const statusDelete = await userRepository.deleteUserChildRepository(id, idChild);
      statusDelete ? 'Delete success' : 'delete fail';
    } else {
      const statusDelete = await userRepository.deleteUserRepository(id);
      statusDelete ? 'Delete success' : 'delete fail';
    }
    
  },
  'edituserService': async (id, data) => {
    const statusEdit = await userRepository.editUserRepository(id, data);
    statusEdit ? 'edit todo success' : 'edit fail';
  },
  'createUserChildService': async (id, data) => {
    const statusAddChild = await userRepository.createUserChildRepository(id, data);
    console.log('log service: ', statusAddChild);
    statusAddChild ? 'create todo child success service' : 'add child fail service';
    return statusAddChild;
  }
}