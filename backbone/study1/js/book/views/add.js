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
            'click #add': 'addOne'
        },
        initialize: function() {
          this.book = new BookModel();
          console.log(this.book);
          this.book.set({type: 'add'});
          //this.listenTo(this.model,'add',this.addOne);
          this.render(this.book);

        },
        render: function() {

            this.$el.html(this.template(this.book.toJSON()));
            return this;
        },
        addOne: function(e) {
          this.book.set('title', $('#title').val());
          this.book.set('content', $('#content').val());
          this.book.set('author', $('#author').val());
          this.book.url  = '/edit';
          console.log(this.book);
        //
          this.book.save(null,{
              wait: true,
              success: function(model, response) {
                  alert('添加成功');

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
