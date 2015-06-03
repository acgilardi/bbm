define([
    'backbone',
    'backbone.localStorage'
], function(
    Backbone,
    LocalStorage
){
    var DiscModel = Backbone.Model.extend({

        idAttribute: 'id',
        defaults: {
            brand: '',
            name: '',
            type: null,
            weight: null,
            speed: null
        },

        validate: function(attrs, options) {

        },

        sync: function(method, model, options) {
            model.localStorage = new LocalStorage('discs');
            var defer = $.Deferred();

            switch(method) {
                case 'read':
                    Backbone.LocalStorage.sync(method, model, options).done(function(response) {
                        console.log(response);
                        defer.resolve(response);
                    });
                    break;

                case 'update':
                    break;

                case 'create':
                    break;

                case 'delete':
                    break;
            }

            defer.promise();
        }

    });

    return DiscModel;
});
