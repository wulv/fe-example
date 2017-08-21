define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var template = require('text!book/templates/detail.html');
    var BookModel = require('book/models/book');
    var ViewView = Backbone.View.extend({
        template: _.template(template),
        initialize: function() {
            this.book = new BookModel();
            var that = this;
            this.book.fetch({url: '/get?id=' + this.id,
              success: function(model, response) {
                  that.render(model);

              }, error: function() {
                  // 当返回格式不正确或者是非json数据时，会执行此方法
                  alert('error');
              }
          });

        },
        render: function(model) {
            console.log(model, 30);
            this.$el.html(this.template(model.toJSON()));
            return this;

        }
    });
    return ViewView;
});
