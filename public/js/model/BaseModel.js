App.Models.Task = Backbone.Model.extend({
	defaults: {
		name: {
			first: '',
			last: ''
		},
		dateOfBirth: ''
	},
	
	urlRoots: '/Ajax'	
});
