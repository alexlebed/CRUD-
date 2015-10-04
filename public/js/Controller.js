App.Controller = function (peopleCollection) {
	start();
	
	function start () {
		var addTaskView = new App.Views.AddTask({collection: peopleCollection}),
		    tasksView = new App.Views.Tasks({collection: peopleCollection});
		
		$('#form').html(addTaskView.render().el);
	    $('#one').html(tasksView.render().el);	
	}
}
