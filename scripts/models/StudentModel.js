 /*
    StudentView
 */

define(['backbone'], function(Backbone) {
 
        return Backbone.Model.extend({
            
            name : function() { return this.get('name'); }

        });   
    }
);
 
 
