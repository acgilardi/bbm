define([
    'backbone'
], function(
    Backbone
){
    var DiscModel = Backbone.Model.extend({

        //localStorage:new localStorage('user-backbone'),

        idAttribute: 'id',

        defaults: {
            brand: '',
            name: '',
            type: null,
            weight: null,
            speed: null
        },

        validate: function(attrs, options) {

        }

    });

    return DiscModel;
});
