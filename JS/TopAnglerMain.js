app.controller("TopAnglerMain", function ($scope, appSettings) {

    // variables that are used during execution, one-offs are not all shown here    
    var main = $scope;
    main.as = appSettings;
    main.test = "this is a test";

    main.init = function (moduleId, moduleName) {
        serviceClient.init(moduleId, moduleName);
        appSettings.init();
    };
});