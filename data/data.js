
// Requires
var schema = require('./schema.js');
var mongoose = require('mongoose');

// Exports
var data = exports;

// Connection
mongoose.connect('mongodb://GuestbookUser:Jas0n2112@ds035027.mongolab.com:35027/brianguestbookdb');

// Export
data.GuestPost = mongoose.model('GuestPost', schema.GuestPost);
