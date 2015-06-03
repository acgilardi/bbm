define([
    'backbone',
    'models/disc',
    'models/discs',
    'apps/discs/list/list-view',
    'apps/discs/edit/edit-view',
    'common/main-view'
], function(
    Backbone,
    DiscModel,
    DiscCollection,
    DiscListView,
    DiscEditView,
    MainView
){
    var AppRouter = Backbone.Router.extend({
        routes: {
            'discs': 'showDiscs',
            'disc/:id/edit' : 'editDisc',
            'courses': 'showCourses',
            'course/:id/view': 'viewCourse',
            '': 'mainView'
        },
        start: function(){
            Backbone.history.start();
            return this;
        },

        mainView: function(){
            var mainView = new MainView();
            this.setView(mainView);
        },

        showDiscs: function(){
            var _this = this;
            var discCollection = new DiscCollection();
            discCollection.fetch().done(function() {
                var discListView = new DiscListView({
                    collection: discCollection
                });
                _this.setView(discListView);
            });
        },

        editDisc: function(id) {
            var _this = this;
            //var discCollection = new DiscCollection();
            //discCollection.fetch().done(function() {

                //var discModel = discCollection.get(id);
                var discModel = new DiscModel({id: id});

                discModel.fetch().done(function() {
                    var discEditView = new DiscEditView({ model: discModel });
                    _this.setView(discEditView);
                });


            //});
        },

        showCourses: function(){
            // Load courses view
        },

        viewCourse: function(id) {

        },

        setView: function(view) {
            if (this.view) {
                this.view.close();
            }

            this.view = view;
            view.setElement($('#content')).render();
            return this;
        }

    });

    return AppRouter;
});
