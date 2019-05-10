var mongoose = require('mongoose');
// Schema Validation
var userSchema = mongoose.Schema({
    "name" : String, 
    "surname" : String,
    "doctype" : String, 
    "user" : String, 
    "password" : String, 
    "salary" : Number, 
    "OT" : Number, 
    "bonus" : Number, 
},{
    collection: 'mst_employee'
});

var User = mongoose.model('mst_employee', userSchema);
module.exports = User;