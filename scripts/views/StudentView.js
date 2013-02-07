 //my/shirt.js now has some dependencies, a cart and inventory
//module in the same directory as shirt.js
define(["text!templates/student.html"], function(studentTemplate) {
        //return an object to define the "my/shirt" module.
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
 
 

 
