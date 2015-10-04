App.Views.Edit = App.Views.AddTask.extend({
	formClass: 'inputEdit',
	ownModel: {},
	
	template: _.template(Edit()),
	
	events: {
		'submit': 'submit',        // inherit from AddTaskView.js
		'click .closet': 'close'
	},
	
	initialize: function () {
		this.ownModel = this.model.toJSON();
		App.mediator.subscribe('closeEdit', this.close, null, this);
	},
	
	// render inherit from AddTaskView.js	
	
	save: function (attr) {
		this.model.set(attr)    
		this.model.save();
		this.close();
	},
	
	close: function () {
        this.unbind();
		this.remove();
	}	
});