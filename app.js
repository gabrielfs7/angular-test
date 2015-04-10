(function() {
    var app = angular.module('gemStore', []);

    var gems = [
        {
            name: 'Product test 1',
            price: 2.95,
            description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
            soldOut: false,
            createdAt: new Date(),
            canPurchase: true,
            images: [
                {
                    full: 'http://www.iconarchive.com/download/i7999/hopstarter/soft-scraps/Coin.ico',
                    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooi8pjHSE4ZbhQ3IJ_-4LAEt2LaSW8LzbInQEVGea0hn8y_wj'
                }
            ]
        },
        {
            name: 'Product test 2',
            price: 2,
            description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
            soldOut: false,
            canPurchase: true,
            createdAt: new Date(),
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
        },
        {
            name: 'Product test 3',
            price: 2.95,
            description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
            soldOut: false,
            createdAt: new Date(),
            canPurchase: true,
            images: []
        }
    ];

    app.controller(
        'StoreController',
        function () {
            this.products = gems;
        }
    );
})();