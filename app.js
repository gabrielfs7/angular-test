(function() {
    var app = angular.module('gemStore', []);
    var gems = [];

    for (var i = 0; i < 10; i++) {
        gems.push(
            {
                id: i + 1,
                name: 'Product test 1' + Math.random().toFixed(2),
                price: (i + ((i + 1) * 0.1)).toFixed(2),
                description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
                spec: 'Intel processor 16.34GHz. 80GHz RAM',
                soldOut: false,
                createdAt: new Date(),
                canPurchase: true,
                reviews: [
                    {
                        author: 'John Smith',
                        rating: 1,
                        comment: 'Very good product. It supplied all my needs!',
                        color: 'blue',
                        terms: true,
                        createdOn: Date.now()
                    },
                    {
                        author: 'Anny love',
                        rating: 3,
                        comment: 'Oh! I love It. It is so cute!',
                        color: 'red',
                        terms: true,
                        createdOn: Date.now()
                    },
                    {
                        author: 'Mr. Nice',
                        rating: 5,
                        comment: 'That is very nice! Really, really nice! I recommend!',
                        color: 'green',
                        terms: true,
                        createdOn: Date.now()
                    }
                ],
                images: [
                    {
                        full: 'http://images.pcworld.com/news/graphics/161647-intel_core2quad_cpu_original.jpg',
                        thumb: 'http://images.pcworld.com/news/graphics/161647-intel_core2quad_cpu_original.jpg'
                    },
                    {
                        full: 'http://www.iconarchive.com/download/i7999/hopstarter/soft-scraps/Coin.ico',
                        thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooi8pjHSE4ZbhQ3IJ_-4LAEt2LaSW8LzbInQEVGea0hn8y_wj'
                    }
                ]
            }
        );
    }

    app.controller(
        'StoreController',
        function () {
            this.products = gems;
        }
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