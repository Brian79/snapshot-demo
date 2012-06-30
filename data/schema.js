
var Schema = require('mongoose').Schema, 
    ObjectId = Schema.ObjectId;

var schema = exports;

    //author    : ObjectId
schema.GuestPost = new Schema({
    name      : String
  , email     : String
  , title     : String
  , body      : String
  , date      : Date
});