define([
    'backbone',
    'text!apps/discs/edit/templates/edit.tpl',
    'backbone.modelBinder'
], function(
    Backbone,
    template,
    ModelBinder
) {
    return Backbone.View.extend({

        // constructor
        initialize: function() {
            //Backbone.Subviews.add( this );
            //_.bindAll(this, _.functions(this));
           // this.modelBinder = new ModelBinder();
            this.modelBinder = new ModelBinder();
        },

        // handle all events from the templates controls
        events: {
            'click .dropdown-menu a' : 'changeDiscType'
            //"click #discType": 'changeDiscType'
        },

        changeDiscType: function(e) {
            if(e) {e.preventDefault();}
            var selected = this.$(e.target).text();
            this.model.set('type');

        },

        // render the template with data to the views $el (element)
        render: function() {
            //var data = {
            //    discs: this.collection.toJSON()
            //};
            this.$el.html(_.template(template, this.model.toJSON()));
            this.modelBinder.bind(this.model, this.el);
            return this;
        }
    });
});
