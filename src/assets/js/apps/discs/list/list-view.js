define([
    'backbone',
    'text!apps/discs/list/templates/list.tpl',
    'apps/discs/list/title-view',
    'backbone.subviews'
], function(
    Backbone,
    template,
    TitleView
) {
    return Backbone.View.extend({

        // constructor
        initialize: function() {
            Backbone.Subviews.add( this );
        },

        // handle all events from the templates controls
        events: {
        },

        subviewCreators : {
            "discsTitle" : function() {
                return new TitleView( );
            }
        },

        // render the template with data to the views $el (element)
        render: function() {
            var data = {
                discs: this.collection.toJSON()
            };
            this.$el.html(_.template(template, data));
            return this;
        },

        // after subviews are rendered. Subvies are in this.subviews.<mySubview>
        onSubviewsRendered : function() {
            //this.subviews.discsTitle.on('click', function(e) {
            //    alert('Discs');
            //});
           this.listenTo( this.subviews.discsTitle, "click", function() { alert('Dics'); } );
        }
    });
});
