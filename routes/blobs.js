var express = require('express'),
    router = express.Router(),
	fs = require('fs'),
    blobSchema = require('../model/blobs'), //mongo connection
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
	

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

router.route('/')
    .get(function(req, res, next) {
        mongoose.model('Blob').find({}, function (err, blobs) {
              if (err) {
                  return console.error(err);
              } else {	  
				res.sendFile('index.html', { root: './public' }); 
              }     
        });
    });
   
router.route('/Ajax')
	//GET the individual blob by Mongo ID
	.get(function(req, res) {
	    //search for the blob within Mongo
	    mongoose.model('Blob').find({}, function (err, blob) {
	        if (err) {
	            console.log('GET Error: There was a problem retrieving: ' + err);
	        } else {
	            //Return the blob
	           res.format({
	                 //JSON response will return the JSON output
	                json: function(){
	                       res.json(blob);
	                 }
	            });
	        }
	    });
	})

 //POST a new blob
    .post(function(req, res) {
        var name = {},
		    phone = {},
            id = req.body._id,
			companyName = req.body.companyName,
		    dateOfBirth = req.body.dateOfBirth,
			skype = req.body.skype,
		    sendblob = req.body;
		
		name.first = req.body.name.first;
		name.last = req.body.name.last;
		phone.mobile = req.body.phone.mobile;
		phone.work = req.body.phone.work;

        //call the create function for our database
		if(req.body._id){
			creat(req, res);
			function creat (req, res) {
				//find the document by ID
				mongoose.model('Blob').findById(id, function (err, blob) {
					//update it
					blob.update({
						name: {first: name.first, last:name.last},
						companyName: companyName,
						dateOfBirth: dateOfBirth,
						phone: {mobile: phone.mobile, work: phone.work},
						skype: skype
					}, function (err, blobID) {
					    if (err) {
						    res.send("There was a problem updating the information to the database: " + err);
					    } 
					    else {
							res.format({
								 //JSON responds showing the updated values
								json: function(){
								   res.json(sendblob);
								}
							});
					   }
					})
				});
			}
		} else {
			mongoose.model('Blob').create({
				name: {first: name.first, last:name.last},
				companyName: companyName,
				dateOfBirth: dateOfBirth,
				phone: {mobile: phone.mobile, work: phone.work},
				skype: skype
			}, function (err, blob) {
				if (err) {
					res.send("There was a problem adding the information to the database.");
				} else {
					res.format({
						json: function(){
							res.json(blob);
						}
					});
				}
			});
		}
       
    });

router.route('/Ajax/:id')
    .delete(function(req, res) {
	    mongoose.model('Blob').findById(req.id, function (err, blob) {
	        if (err) {
	            return console.error(err);
	        } else {
	            //remove it from Mongo
	            blob.remove(function (err, blob) {
	                if (err) {
	                    return console.error(err);
	                } else {
	                    res.format({
	                         //JSON returns the item with the message that is has been deleted
	                        json: function () {
	                            res.json({message : 'deleted',
	                                item : blob
	                            });
	                        }
	                    });
	                }
	            });
	        }
	    });
    });

// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    mongoose.model('Blob').findById(id, function (err, blob) {
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                 },
                json: function(){
                       res.json({message : err.status  + ' ' + err});
                 }
            });
        } else {
            req.id = id;
            next(); 
        } 
    });
});	

module.exports = router;