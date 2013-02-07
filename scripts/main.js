require(["views/Student", "models/Student"], function(StudentView, StudentModel) {
  

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

    var myStudent = new StudentModel();


    new StudentView({model: myStudent});

    myStudent.set({'name': "test"});
    
    myStudent.set({'name' : "Ellen Nu"});
});