define(function(require) {
    var Backbone = require('backbone');
    var $ = require('jquery');
    var Router = Backbone.Router.extend({

        routes: {
            'list': 'listBook',
            'edit(/:number)': 'editBook',
            'add(/:number)': 'addBook',
            'view(/:number)': 'viewBook',
            '*actions': 'defaultAction'
        },

        // 路由初始化可以做一些事
        initialize: function() {
          this.mainRegion = $('#app-main');
        },

        listBook: function() {
            var AppView = require('book/views/list');
            // 这里不能用模块依赖的写法，而改为url的写法，是为了grunt requirejs打包的时候断开依赖链，分开多个文件
            this.show(new AppView());
        },

        // name跟路由配置里边的:name一致
        editBook: function(id) {
            var EditView = require('book/views/edit');
          //  var edit = new EditView({id: id});
            this.show(new EditView({id: id}));
        },
        addBook: function() {
            // var model = new Model();
            var AddView = require('book/views/add');
            var add = new AddView();
            this.show(add);
        },
        viewBook: function(id) {
            var ViewView = require('book/views/view');
            var view = new ViewView({id: id});
            this.show(view);
        },
        defaultAction: function() {
            console.log('404');
            location.hash = 'list';
        },

        show: function(view) {
          if (this.view) {
            this.view.remove();
          }
          console.log(view.$el);
          this.mainRegion.append(view.$el);
          this.view = view;
        }

    });

    var router = new Router();
    router.on('route', function(route, params) {
        console.log('hash change', arguments);
        // 这里route是路由对应的方法名
    });

    return router;
    // 这里必须的，让路由表执行
});
