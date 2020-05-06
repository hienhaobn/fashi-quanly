const UserService = require('../services/user.service')

module.exports = {
  'getUsersController': async (req, resp) => {
    let dataUsers = await UserService.getUsersService();
    return resp.status(200).json(dataUsers);
  },
  'postUserController': async (req, resp) => {
    let dataUser = req.body.user;
    let dataDetail = req.body.detail;
    let dataSave = await UserService.postUserService(dataUser, dataDetail);
    if(dataSave) return resp.status(200).json(dataSave);
  }
}