const UserRepository = require('../repository/user.repository');
const UserDetailRepository = require('../repository/userDetail.repository');
module.exports = {
  'getUsersService': async () => {
    let data = [];
    let dataUser = await UserRepository.findUsersRepository();
    await Promise.all(dataUser.map( user => {
      return data.push(user._id);
   }));
    return data;
  },
  'postUserService': async (dataUser, dataUserDetail) => {
    if(dataUser && dataUserDetail) {
      let dataSave = await UserRepository.createUserRepository(dataUser);
      let userId = dataSave._id;
      await UserDetailRepository.createUserDetailRepository(userId,dataUserDetail);
      return dataSave;
    }
    return 'fail'
  }
}