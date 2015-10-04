var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
    id: '',
    name: {
		first: String,
		last: String
	},
    dateOfBirth: String,
	companyName: String,
		
	phone: {
		mobile: String,
		work: String
	},
	
	skype: String
});

mongoose.model('Blob', blobSchema);
module.exports = blobSchema;