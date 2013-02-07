 /*
    StudentView
 */
 
define(['text!templates/student.html', 'underscore', 'backbone'], function(studentTemplate, _, Backbone) {
 
        return Backbone.View.extend({
    
            template: _.template(studentTemplate),
            
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
    }
);
 
 

 
