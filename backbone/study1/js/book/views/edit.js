define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var template = require('text!book/templates/edit.html');
    var BookModel = require('book/models/book');
    var EditView = Backbone.View.extend({
        template: _.template(template),
        events: {
            'click #edit': 'edit'
        },
        initialize: function() {
            this.book = new BookModel();
            var that = this;
            this.book.fetch({url: '/get?id=' + this.id,
              success: function(model, response) {
                  model.set({type: 'edit'});
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
        },
        edit: function(e) {
            e.preventDefault();
          // var book = new BookModel({
          //   title:$('#title').val(),
          //   content:$('#content').val(),
          //   author:$('#author').val(),
          //   id:this.id
          // });
            this.book.set('title', $('#title').val());
            this.book.set('content', $('#content').val());
            this.book.set('author', $('#author').val());
            this.book.url  = '/edit';
            console.log(this.book);
          //
            this.book.save(null,{
                wait: true,
                success: function(model, response) {
                    alert('修改成功');

                },
                error: function(model, error) {
                    console.log(model.toJSON());
                    console.log('error.responseText');
                }
            });
        }
    });
    return EditView;
});
