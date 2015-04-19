(function() {
    var app = angular.module('store-products', []);

    app.directive(
        'productTabs',
        function ()
        {
            return {
                templateUrl: 'product-tabs.html',
                controllerAs: 'tab',
                controller: function () {
                    this.tab = 1;

                    this.selectTab = function (setTab) {
                        this.tab = setTab;
                    };


                    this.isSelected = function (checkTab) {
                        return this.tab === checkTab;
                    };
                }
            };
        }
    );

    app.directive(
        'productGallery',
        function ()
        {
            return {
                restrict: 'E',
                templateUrl: 'product-gallery.html',
                controllerAs: 'gallery',
                controller: function ()
                {
                    this.current = 0;

                    this.setCurrent = function(imageNumber)
                    {
                        this.current = imageNumber || 0;
                    };
                }
            };
        }
    );

    app.directive(
        'productDescription',
        function () {
            return {
                restrict: 'A',
                templateUrl: 'product-description.html'
            };
        }
    );

    app.directive(
        'productSpecs',
        function () {
            return {
                restrict: 'A',
                templateUrl: 'product-specs.html'
            };
        }
    );
})();