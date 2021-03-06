(function () {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($location, $routeParams, PageService) {
        var vm = this;

        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        vm.createPage = createPage;
        vm.linkToPageList = linkToPageList;

        function createPage(name){
            if(name) {
                var newPage = {
                    //_id: (new Date()).getTime()+"",
                    name: name,
                    _website: vm.websiteId
                };
                PageService
                    .createPage(vm.websiteId, newPage)
                    .then(function (response) {
                        var page = response.data;
                        if (page) {
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                        }
                        else {
                            vm.error = "Unable to create page";
                        }
                    });
            }
            else{
                vm.error="Page Name is Required";
            }
        }
        
        function linkToPageList() {
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
        }
    }

})();