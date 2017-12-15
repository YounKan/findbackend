const mongoose = require('mongoose');

module.exports = function(){
       var config = require('./config');
       mongoose.set('debug', config.debug);
       mongoose.Promise = global.Promise;
       const db = mongoose.connect(config.mongoUri, {
              useMongoClient: true
              /* other options */
       });
/************************************************************** */
       require('../app/models/user.model');
       require('../app/models/comment.model');
       require('../app/models/topic.model');
       require('../app/models/item.model');
        require('../app/models/upload.model');

    /************************************************************** */
       return db;
}
