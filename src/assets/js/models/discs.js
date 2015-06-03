define([
    'backbone',
    'backbone.localStorage',
    'models/disc'
], function(
    Backbone,
    LocalStorage,
    Disc
){
    var DiscCollection = Backbone.Collection.extend({

        localStorage: new LocalStorage('discs'),

        model: Disc

    });

    return DiscCollection;
});
