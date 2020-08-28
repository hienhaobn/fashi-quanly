const UserService = require('../services/user.service');
const e = require('express');

module.exports = {
  'getUsersController': async (req, resp) => {
    let dataUsers = await UserService.getUsersService();
    return resp.status(200).json(dataUsers);
  },
  'postUserController': async (req, resp) => {
    if (!req.body.title) return resp.status(400).json('Error get data from client');
    if(req.body.title) {
        const dataSave = await UserService.postUserService(req.body);
        if(dataSave) return resp.status(200).json(dataSave);
    }
    return resp.status(400).json('Error get data from client');
  },
  'editUserController': async (req, resp) => {
    if(req.body) {
      const statusEdit = await UserService.edituserService(req.query.id, req.body);
      console.log('----------------');
      return resp.status(200).json('edit success');
    }
    return resp.status(400).json('Error get data from client');
  },
  'deleteUserController': async (req, resp) => {
    // if(req.param) return resp.status(200).json('Error get data from client');
    console.log('param id: ', req.params);
    console.log('param child: ', req.body);
    const {id} = req.params;
    const {idChild} = req.body
    if(!id && !idChild) return resp.status(400).json('Error get data from client');
    if(id && idChild){
      console.log('This is user controller----');
      await UserService.deleteUserService(id, idChild);
      return resp.status(200).json('delete success');
    } else {
      await UserService.deleteUserService(id);
      return resp.status(200).json('delete success');
    }
    
  },
  'createUserController': async (req, resp) => {
    console.log('console log create user: ', req.body);
    const {title} = req.body;
    const {id} = req.params;
    if(id && title) {
      const dataSave = await UserService.createUserChildService(id, title);
      console.log('Data save: ',dataSave);
      if(dataSave) 
        return resp.status(200).json('add user child success');
      return resp.status(400).json('Error add user child controller');
    }

    // return resp.status(400).json('Error get data from client');
  }
}