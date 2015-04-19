(function() {
    var app = angular.module('store', ['store-products']);

    app.controller(
        'StoreController',
        [
            '$http',
            function ($http) {
                var store = this;

                store.products = [];

                $http(
                    {
                        method: 'GET',
                        url: 'api/products.json'
                    }
                ).success(
                    function (data) {
                        store.products = data;
                    }
                );
            }
        ]
    );

    app.controller(
        'ReviewController',
        function () {
            this.review = {};

            this.addReview = function (product)
            {
                this.createdOn = Date.now();

                product.reviews.push(this.review);

                this.review = {};
            }
        }
    );
})();