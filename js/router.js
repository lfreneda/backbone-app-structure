define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '*actions': 'defaultAction'
        }
    });

    var initialize = function () {
        var app_router = new AppRouter;
        app_router.on('route:defaultAction', function (actions) {
            alert('default route :P');
        });

        Backbone.history.start();
    };

    return { initialize: initialize };
});