(function(win) {
    // 配置baseUrl
    var baseUrl = document.getElementById('main').getAttribute('data-baseurl');

    /*
     * 文件依赖
     */
    var config = {
        baseUrl: baseUrl,           // 依赖相对路径
        paths: {                    // 如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
            jquery: 'jquery/dist/jquery.min',
            underscore: 'underscore/underscore',
            backbone: 'backbone/backbone',
            text: 'text/text'             // 用于requirejs导入html类型的依赖
        },
        shim: {                     // 引入没有使用requirejs模块写法的类库。backbone依赖underscore
            'underscore': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            }
        }
    };

    require.config(config);

    // Backbone会把自己加到全局变量中
    require(['backbone', 'underscore', 'book/router'], function() {
        Backbone.history.start();   // 开始监控url变化
    });

})(window);
