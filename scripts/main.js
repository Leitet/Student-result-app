require(["views/StudentView"], function(StudentView) {
    //This function is called when scripts/app.js is loaded.
    //If app.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    
    
     
    var Student = Backbone.Model.extend({
		name : function() { return this.get('name'); }

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


    new StudentView({model: myStudent});

    myStudent.set({'name': "test"});
    
    myStudent.set({'name' : "Ellen Nu"});
});