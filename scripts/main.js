require.config({
        paths: {
            "jquery":                   "lib/jquery/jquery",
            "underscore":               "lib/underscore/underscore",
            "backbone":                 "lib/backbone/backbone",
            "backbone.localStorage":    "lib/backbone.localStorage/backbone.localStorage",
            "text":                     "lib/text/text"
        },
        shim: {
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            },
            'backbone.localStorage': ['backbone']
            
        }
    });

require(['backbone','views/StudentView', 'models/StudentModel'], function(Backbone, StudentView, StudentModel) {


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
    
    Backbone.history.start();
 
    app.navigate("students", {trigger:true});
    app.navigate("students/tstjo", {trigger:true});

    var myStudent = new StudentModel();


    new StudentView({model: myStudent, el: $("#app-container") });

    myStudent.set({'name': "test"});
    
    myStudent.set({'name' : "Ellen Nu"});
});