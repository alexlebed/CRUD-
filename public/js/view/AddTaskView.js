App.Views.AddTask = Backbone.View.extend({
	formClass: 'input',
	ownModel: {},

	
	template: _.template(forma()),

	events: {
		 "blur .first": "blure",
		'submit': 'submit',
		'click .clean': 'cleanInput'
	},

	render: function () {
		var template = this.template(this.ownModel);
		this.$el.html(template);
	    this.$('#datetimepicker1').datetimepicker();	
		return this;
	},
	
	blure: function () {
		var name = this.getData(),
		    flag =  true;
		if(name.first) {
			this.$('.first').removeClass('err');
			flag =  true;
		} else {
			this.$('.first').addClass('err');
			flag =  false;
		}
		return flag;
	},
			
	submit: function (e) {
		e.preventDefault();
		var input = this.getData();

		var attr = {
			name: {
				first: input.first,
				last: input.last
			},	
			dateOfBirth: input.dateOfBirth,
			companyName: input.companyName,
			phone: {
				mobile: input.mobile,
				work: input.work
			},
			skype: input.skype
		};
				
		if(this.blure()){
			this.save(attr);
			this.cleanInput();
		} 
		
	},
	
	getData: function () {
		var input = {};
		$('.'+ this.formClass).each(function (i, el) {
			input[el.name] = el.value;
		});

		return input;
	},
	
	cleanInput: function () {
		$('.'+ this.formClass).each(function (i, el) {
			el.value = '';
		});
	},
	
	save: function (attr) {
		var newTask = new App.Models.Customer(attr);
		this.collection.add(newTask);
		newTask.save();
	}
});