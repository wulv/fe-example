define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    var BookModel = Backbone.Model.extend({
        url: '/edit',
        idAttribute: "_id",
        defaults: {
            title: '',
            content: '',
            meta: {},
            author: ''
        }
        //
        // fetch: function() {
        //   Utils.ajax({
        //     url: 'item.json'
        //   }).done(function(data) {
        //     _this.set(data, {silent: true});
        //     _this.trigger('sync');
        //   })
        // },
        //
        // save: function() {
        //   Utils.ajax({
        //     url: 'saveItem.json',
        //     type: 'POST',
        //     data: this.toJSON()
        //   }).done(function() {})
        //   .fail(function() {})
        // }
    }
    );

    return BookModel;
});
