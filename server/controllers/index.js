var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      // a function which handles a get request for all messages
    },
    post: function (req, res) {
      console.log('POST RECEIVED');

      // already parsed from parser.json in app.js
      var msg = req.body;
      console.log('msg', msg);

      // a function which handles posting a message to the database
      // call post method on model, pass in data to write

      if (models.messages.post(msg)) {
      // if successful write
        // express#send method for status code/headers (201 - Created)
        // in response, pass the *Obj.id back* (maybe a refactor)
        console.log('written!');
      } else {
        // express#send 400 - Bad Request
        console.log('failed to write!');
        // (may need to send object back)
      }
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

