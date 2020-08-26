const UserEntity = require('../entity/user.entity');

module.exports = {
  'findUsersRepository': () => {
    return UserEntity.find();
  },
  'createUserRepository': async (data) => {
    console.log('data repon: ', data);
    let dataUser = new UserEntity({
      title: data
    });
    await dataUser.save();
    return dataUser;
  },
  'deleteUserRepository': async (id) => {
    return UserEntity.findByIdAndDelete({_id: id});
  },
  'editUserRepository': async (id, data) => {
    const dataEdit = await UserEntity.findByIdAndUpdate({_id: id},
      {$set: {
        title: data.title,
        isComplete: data.isComplete,
        children: data.children,
        updated_at: Date.now()
      }}, 
      {new: true}
    )
    dataEdit ? dataEdit : 'error save data from repository';
  } 
}