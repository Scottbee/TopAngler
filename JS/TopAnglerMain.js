app.controller("TopAnglerMain", function ($scope, appSettings) {

    // variables that are used during execution, one-offs are not all shown here    
    var main = $scope;
    main.as = appSettings;
    main.test = "this is a test";

    main.init = function () {
        main.createNewDerby = false;

        // read from object files

        // fishing events
        main.derbies = localStorage.getItem('topAngler-derbies');

        // people
        main.people = localStorage.getItem('topAngler-people');

        // groups
        main.groups = localStorage.getItem('topAngler-groups');

        if (!derbies) {
            main.createNewDerby = true;
        }
    };
});