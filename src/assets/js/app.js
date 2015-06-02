define([
    'backbone',
    'router'
], function(
    Backbone,
    Router
){
    var start = function(){
        Router.start();
    };

    return {
        start: start
    };
});
