module.exports = {
  'validateGetDataFormDatabase': () => {
    return {
      status: 503,
      message: "Can't get data from database!"
    }
  },
  'validateDataBody': () => {
    return {
      status: 400,
      message: "Can't get data from client send to server!"
    }
  },
  'statusSuccess': (message, data) => {
    return {
      status: 200,
      message,
      data
    }
  },
  'validateById': () =>  {
    return {
      status: 400,
      message: "Can't get id from request client!"
    }
  },
  'validateByDataFromClient': (message) => {
    return {
      status: 400,
      message
    }
  },
  'validateSaveDataToDatabase': (message) => {
    return {    
      status: 500,
      message
    }
  },
}