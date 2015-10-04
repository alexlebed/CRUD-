App.Views.Tasks = Backbone.View.extend({
	tagName: 'table',
	className: 'table',
	
	initialize: function () {
		this.collection.on('add', this.addOne, this);			
	},
	
	render: function () {
	
		this.collection.each(this.addOne, this);

		return this;
	},
	
	addOne: function (task) {
		var taskView = new App.Views.Task({model: task});	
		this.$el.append(taskView.render().el);
	}
});