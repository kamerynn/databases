var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages

    // a function which can be used to insert a message into the database
    post: function (data) {

      var connection = db.dbConnection();
      connection.connect();

      // MySQL only accepts a certain format for Date, JS does not have a native format method
      var d = new Date,
      dformat = [d.getFullYear(),
              d.getMonth()+1,
              d.getDate()].join('-')+' '+
              [d.getHours(),
              d.getMinutes(),
              d.getSeconds()].join(':');

      var writeSuccess, result;
      // build query string using data to enter data into messages table on db
      var queryString = "INSERT INTO messages (text, room_id, created_at, user_id) " +
                        "VALUES ('" + data.text + "', 1, '" + dformat + "', " +
                        "1)";

      // attempting to write to db
      // IS THE ASSIGNMENT HERE MAKING IT A SYNCHRONOUS OPERATION? - HELP DESK
      result = connection.query(queryString, function(err, results) {
        writeSuccess = err ? false : true;
        console.log('SUCCESS?', writeSuccess);
        return writeSuccess;
      });

      connection.end();
      return result;
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
