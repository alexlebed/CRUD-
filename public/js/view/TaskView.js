App.Views.Task = Backbone.View.extend({
	tagName: 'tr',
	
	template: _.template(toDo()),
	
	events: {
		'click .edit': 'editTask',
		'click .delete': 'destroy',
		'click .title': 'title'
	},
	
	initialize: function () {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	render: function () {
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
		return this;
	},
	
	remove: function () {
		this.$el.remove();
	},
	
	editTask: function () {
		var editModel = new App.Views.Edit({model: this.model});

		$('#tabs').html(editModel.render().el);
	},
	
	destroy: function () {
		var modalVindow = new App.Views.Modal({model: this.model});

		$('body').append(modalVindow.render().el);
		
		$('#myModal').modal({
		  backdrop: false,
		  keyboard: false
		});	
	},
	
	title: function () {
		console.log(this.model);
	}
});