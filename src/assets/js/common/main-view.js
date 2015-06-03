define([
    'backbone',
    'text!common/templates/main.tpl'
], function(Backbone, template) {
    return Backbone.View.extend({
        render: function() {
            var data = {
                title: 'Redisculous'
            };
            this.$el.html(_.template(template, data));
            return this;
        }
    });
});
