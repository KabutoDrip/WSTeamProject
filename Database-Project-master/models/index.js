const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.SD1 = require('./sample1.js')(mongoose);
db.SD2 = require('./sample2.js')(mongoose);

module.exports = db;