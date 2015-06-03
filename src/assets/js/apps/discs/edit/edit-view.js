define([
    'backbone',
    'text!apps/discs/edit/templates/edit.tpl'
], function(
    Backbone,
    template
) {
    return Backbone.View.extend({

        // constructor
        initialize: function() {
            //Backbone.Subviews.add( this );
        },

        // handle all events from the templates controls
        events: {
        },

        // render the template with data to the views $el (element)
        render: function() {
            //var data = {
            //    discs: this.collection.toJSON()
            //};
            this.$el.html(_.template(template, this.model.toJSON()));
            return this;
        }
    });
});
