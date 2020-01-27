var app = angular.module("TopAngler", ["ui.bootstrap", "ngAnimate", "ngRoute"]).config(function ($routeProvider, $locationProvider) {
    // add time to templates to prevent caching
    var d = new Date();
    var t = d.getTime();

    $routeProvider
        .when("/LogFish", {
            templateUrl: "/HTMLTemplates/InsertFish.html?t=" + t,
            controller: 'InsertFish'
        })
        .otherwise({
            templateUrl: "/index.html?t=" + t
        })
    $locationProvider.html5Mode({ enabled: true });
});

app.service('appSettings', function () {
    // globals
    var as = this;

    // functions
    as.init = function() {

    };
});
