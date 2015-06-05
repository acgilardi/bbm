require.config({
    baseUrl: 'assets/js',
    paths: {
        'jquery': 'vendor/jquery/jquery',
        'underscore': 'vendor/underscore/underscore',
        'backbone': 'vendor/backbone/backbone',
        'backbone.wreqr': 'vendor/backbone.wreqr/backbone.wreqr',
        'backbone.babysitter': 'vendor/backbone.babysitter/backbone.babysitter',
        'marionette': 'vendor/backbone.marionette/backbone.marionette',
        'text': "vendor/text/text",
        'backbone.localStorage': 'vendor/backbone.localstorage/backbone.localStorage',
        'backbone.subviews' : 'vendor/backbone.subviews/backbone.subviews',
        'backbone.modelBinder' : 'vendor/backbone-modelbinder/backbone.modelbinder'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

require([
    'app',
    'models/disc',
    'models/discs'
], function(
    App,
    DiscModel,
    DiscCollection
) {

    // Add a close() function to all Backbone.Views.
    Backbone.View.prototype.close = function () {
        this.$el.empty();
        this.stopListening();
        this.undelegateEvents();
        this.unbind();
    };

    // Initialize localstorage database
    var discs = new DiscCollection();
    discs.fetch().done(function() {

        discs.chain().clone().each(function(model) {
                model.destroy();
            }
        );
        var disc1 = new DiscModel({
            brand: 'Innov',
            name: 'Beast',
            type: 'mid-range',
            weight: '150',
            speed: '5'
        });
        var disc2 = new DiscModel({
            brand: 'Discraft',
            name: 'Roc3',
            type: 'driver',
            weight: '170',
            speed: '13'
        });
        discs.add(disc1);
        discs.add(disc2);
        disc1.save();
        disc2.save();
    });

    // start the app
    window.app = App;
    App.start();
});
