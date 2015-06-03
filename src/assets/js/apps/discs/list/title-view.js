define([
    'backbone',
    'text!apps/discs/list/templates/title.tpl'
], function(
    Backbone,
    template
) {
    return Backbone.View.extend({

        events: {
            'click #discs-title': 'titleClicked'
        },

        titleClicked: function(e) {
            alert('Clicked Title in Title View');
        },

        // render the template with data to the views $el (element)
        render: function() {
            this.$el.html(_.template(template));
            return this;
        }

    });
});
