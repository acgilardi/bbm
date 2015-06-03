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
        //url: '/api/disc-v1',
        model: Disc
    });

    return DiscCollection;
});
