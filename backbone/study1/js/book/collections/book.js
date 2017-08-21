define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var BookModel = require('book/models/book');
    var BookCollection = Backbone.Collection.extend({
        url: 'list',
        model: BookModel,
        getNextId: function() {
            if (!this.length) return 1;
            return this.last().get('id') + 1;
        }
    }
    );
    return BookCollection;

});
