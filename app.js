(function() {
    var app = angular.module('store', ['store-products']);

    app.controller(
        'StoreController',
        [
            '$http',
            function ($http) {
                this.products = [];

                var store = this;

                $http.get('api/products.json').success(
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