(function(){
	
	var Note = Backbone.Model.extend({
		text : function(){
			var text = "Note text";
			this.get({text: text});
			return text;
		}

	});

	var myNote = new Note();

	alert(myNote.text());

	
})();