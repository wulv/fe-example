define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var template = require('text!book/templates/item.html');

    var ItemView = Backbone.View.extend({
        tagName: 'tr',
        template: _.template(template),
        events: {
            'click .delete': 'deleteItem'
        },
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function() {
          console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        deleteItem: function(e) {

            var id = $(e.target).data('id');
            this.model.url = 'delete?id=' + id;
            this.model.destroy({wait: true});
        }
    });
    return ItemView;
});
