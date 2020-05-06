const UserDetailEntity = require('../entity/userDetail.entity');

module.exports = {
  'findUsersDetailRepository': () => {
    return UserDetailEntity.find();
  },
  'createUserDetailRepository': async (userId,data) => {
    let dataUserDetail = new UserDetailEntity({
      user_id: userId,
      name: data.name,
      dob: data.dob,
      email: data.email,
      address: data.address
    });
    await dataUserDetail.save();
    return dataUserDetail;
  }
}