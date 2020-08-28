const UserEntity = require('../entity/user.entity');
const { v4: uuidv4 } = require('uuid');
const userEntity = require('../entity/user.entity');

module.exports = {
  'findUsersRepository': () => {
    return UserEntity.find();
  },
  'findOneRepository': (id) => {
    return UserEntity.findOne({_id: id});
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
  'deleteUserChildRepository': async (id, idChild) => {
    console.log('~~~delete user child reponsitor~~~', id, '---',idChild);
    return userEntity.findOneAndUpdate({_id: id}, { $pull: {children: {_id: idChild}}}, { safe: true, upsert: true }, function(error) {
      console.log('error respository~~');
    });
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
  },
  'createUserChildRepository': async (id, data) => {
    const dataCreateChild = await UserEntity.findOneAndUpdate({_id: id}, {$push: {children: {_id: uuidv4(), title: data, isComplete: false, isChildren: true} } } );
    console.log('log responsitory: ', dataCreateChild);
    
    if(dataCreateChild) return dataCreateChild;
    else return 'error save data from repository';
    // dataCreateChild ? dataCreateChild : 'error save data from repository';
  }
}