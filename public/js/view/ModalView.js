App.Views.Modal = Backbone.View.extend({
	id: 'myModal',
	className: 'modal fade',

	template: _.template(modalWindow()),
	
	events: {
		'click .save': 'save',
		'click .closeet': 'cancel',
	},
	
	initialize: function () {
	},
	
	render: function () {
        var template = this.template(this.model.toJSON());
		this.$el.append(template);
		
		return this;
	},
	
	save: function () {
		var id = this.model.get('_id');
		this.model.set('id', id)
		this.model.destroy();
		this.remove();
		this.unbind();
		App.mediator.publish('closeEdit');
	},
	
	cancel: function () {
		this.unbind();
		this.remove();
	}
})