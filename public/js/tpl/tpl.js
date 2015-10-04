function Edit () {
    var Edit = [
	'<h3>Edit</h3>',
    '<form action="#" id="editTask">',
		'<div class="form-group">',
		    '<label>First name</label>',
			'<input type="text" class="inputEdit form-control input-sm first" name="first" value="<%=name.first %>">',
			'<label>Last name</label>',
			'<input type="text" class="inputEdit form-control input-sm" name="last" value="<%=name.last %>" >',
			'<label>Date of birthd</label>',
			'<div class="input-group date" id="datetimepicker1" >',
				'<input type="text" class="inputEdit form-control input-sm" name="dateOfBirth" value="<%= dateOfBirth %>">',
				'<span class="input-group-addon">',
					'<span class="glyphicon glyphicon-calendar"></span>',
				'</span>',
			'</div>',
			'<label>Company name</label>',
			'<input type="text" class="inputEdit form-control input-sm" name="companyName" value="<%= companyName %>" >',
			'<label>Phone mobile</label>',
			'<input type="text" class="inputEdit form-control input-sm " name="mobile" value="<%= phone.mobile %>" >',
			'<label>Phone work</label>',
			'<input type="tel" class="inputEdit form-control input-sm" name="work" value="<%= phone.work %>" >',
			'<label>Skype</label>',
			'<input type="tel" class="inputEdit form-control input-sm " name="skype" value="<%= skype %>"><br>',
			'<input type="submit" value="save" class="btn btn-default">',
			'<input type="button" value="back" class="closet btn btn-default">',
		'</div>',
	'</form>'].join('');
    return Edit;
}

function forma () {
    var forma = [
	'<h3>Add Customer</h3>',
    '<form action="#" id="addTask">',
		'<div class="form-group">',
			'<label>First name</label>',
			'<input type="text" class="input form-control input-sm first" name="first" >',
			'<label>Last name</label>',
			'<input type="text" class="input form-control input-sm" name="last">',
			'<label>Date of birthd</label>',
			'<div class="input-group date" id="datetimepicker1" >',
				'<input type="text" class="input form-control input-sm" name="dateOfBirth">',
				'<span class="input-group-addon">',
					'<span class="glyphicon glyphicon-calendar"></span>',
				'</span>',
			'</div>',
			'<label>Company name</label>',
			'<input type="text" class="input form-control input-sm" name="companyName">',
			'<label>Phone mobile</label>',
			'<input type="text" class="input form-control input-sm" name="mobile" >',
			'<label>Phone work</label>',
			'<input type="tel" class="input form-control input-sm" name="work" >',
			'<label>Skype</label>',
			'<input type="tel" class="input form-control input-sm" name="skype"><br>',
			'<input type="submit" value="save" class="btn btn-default" >',
			'<input type="button" value="clean" class="clean btn btn-default" >',
		'</div>',
	'</form>'].join('');
    return forma;
}

function toDo () {
    var toDo = [
		'<td><span class=title><%= name.first %> <%= name.last %></span></td>',
		'<td><button class="edit btn btn-default">Edit</button></td>',
        '<td><button class="delete btn btn-default">Delete</button></td>'
		].join('');
    return toDo;
}

function modalWindow () {
	var modalWindow = [
	  '<div class="modal-dialog">',
		'<div class="modal-content">',
		  '<div class="modal-header">',
			'<button type="button" class="close closeet" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
			'<h4 class="modal-title">Are you sure?</h4>',
		  '</div>',
		  '<div class="modal-body">',
			'<p><h3><%=name.first%> <%= name.last %></h3> will be delete.</p>',
		  '</div>',
		  '<div class="modal-footer">',
			'<button type="button" class="closeet btn btn-default" data-dismiss="modal">No</button>',
			'<button type="button" class="save btn btn-primary" data-dismiss="modal">Yes</button>',
		  '</div>',
		'</div>',
	  '</div>'].join('');
    return modalWindow;
}

