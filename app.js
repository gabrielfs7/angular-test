(function() {
    var app = angular.module('gemStore', []);

    var gems = [
        {
            name: 'Product test 1',
            price: 2.95,
            description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
            soldOut: true,
            canPurchase: true
        },
        {
            name: 'Product test 2',
            price: 2.95,
            description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
            soldOut: false,
            canPurchase: true
        },
        {
            name: 'Product test 3',
            price: 2.95,
            description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
            soldOut: true,
            canPurchase: true
        },
        {
            name: 'Product test 4',
            price: 2.95,
            description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
            soldOut: false,
            canPurchase: false
        },
        {
            name: 'Product test 5',
            price: 2.95,
            description: 'Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes Yes no no yes no no yes',
            soldOut: false,
            canPurchase: true
        }
    ];

    app.controller(
        'StoreController',
        function () {
            this.products = gems;
        }
    );
})();