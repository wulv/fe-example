define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var listTemplate = require('text!book/templates/list.html');
    var statusTemplate = require('text!book/templates/status.html');
    var ItemView = require('book/views/item');
    var BookCollection = require('book/collections/book');

    var Books = new BookCollection();
    var AppView = Backbone.View.extend({

        template: _.template(statusTemplate),

        initialize: function() {
            this.$el.html(listTemplate);
            // console.log(19);
            this.listenTo(Books, 'reset', this.addAll);
            this.listenTo(Books, 'all', this.render);
            Books.fetch({reset: true});
        },

        render: function() {
            console.log('render');
            var count = Books.length || 0;
            this.$('#footer').html(this.template({count: count}));
        },

        addOne: function(book) {
            var view = new ItemView({model: book});
             console.log(book);
            this.$('#table-body').append(view.render().el);

        },
        addAll: function() {
            console.log('addAll');
            Books.each(this.addOne, this);
        }

    });
    return AppView;
});
