define([
    'backbone'
], function(
    Backbone
){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '/discs': 'showDiscs',
            '/courses': 'showCourses',
            '*actions': 'defaultAction'
        }
    });

    var start = function(){
        var app_router = new AppRouter;
        app_router.on('showDiscs', function(){
            // Load discs view
        });
        app_router.on('showCourses', function(){
            // Load courses view
        });
        app_router.on('defaultAction', function(actions){
            console.log('No route:', actions);
        });
        Backbone.history.start();
    };
    return {
        start: start
    };
});
