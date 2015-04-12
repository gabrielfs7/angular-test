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
                soldOut: false,
                createdAt: new Date(),
                canPurchase: true,
                reviews: [
                    {
                        rating: 1,
                        comment: 'No non no non no non no non no non no'
                    },
                    {
                        rating: 3,
                        comment: 'No non no non no non no non no non no'
                    },
                    {
                        rating: 5,
                        comment: 'No non no non no non no non no non no'
                    }
                ],
                images: [
                    {
                        full: 'http://www.iconarchive.com/download/i7999/hopstarter/soft-scraps/Coin.ico',
                        thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooi8pjHSE4ZbhQ3IJ_-4LAEt2LaSW8LzbInQEVGea0hn8y_wj'
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
        'PanelController',
        function () {
            this.tab = 1;

            this.selectTab = function (setTab)
            {
                this.tab = setTab;
            }

            this.isSelected = function (checkTab)
            {
                return this.tab === checkTab;
            }
        }
    );
})();