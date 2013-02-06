(function(){
    
	var Student = Backbone.Model.extend({
		name : function() { return this.get('name'); }

	});
    
    var StudentView = Backbone.View.extend({
    
        template: _.template($('#student-template').html()),
        
        tagName: "p",
    
        className: "student-view",
    
        events: {
     
        },
    
        initialize: function() {
            this.listenTo(this.model, "change", this.render);   // alt: this.model.on('change', this.render, this);
        
        },
    
        render: function() {
            console.log(this.template(this.model.attributes));
        }
    
    });
    
    var Router = Backbone.Router.extend({
        routes: {
            "":                     "index",
            "students":             "students",
            "students/:username":   "student"
        },
        index: function()               { console.log("on index");},
        students: function()            { console.log("on students"); },
        student: function(username)     { console.log("on one student"); },
        
    });

    var app = new Router();
    
    Backbone.history.start()
 
    app.navigate("students", {trigger:true});
    app.navigate("students/tstjo", {trigger:true});

    var myStudent = new Student();


    var studentView = new StudentView({model: myStudent});

    myStudent.set({'name': "test"});
    
    myStudent.set({'name' : "Ellen Nu"});
	
})();