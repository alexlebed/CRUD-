'use strict';
var App = {
	Models: {},
	Collections: {},
	Views: {},
};

$(function () {			  
	var peopleCollection = new App.Collections.Task(),
	    controller = new App.Controller(peopleCollection);
		
    App.mediator = new Mediator();
    peopleCollection.fetch();
});
