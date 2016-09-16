"use strict";
var router_1 = require('@angular/router');
var cart_checkout_component_1 = require('./cart-checkout.component');
var books_list_component_1 = require('./books-list.component');
var address_form_component_1 = require('./address-form.component');
var books_searched_component_1 = require('./books-searched.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'cart',
        component: cart_checkout_component_1.CartComponent },
    {
        path: 'home',
        component: books_list_component_1.BooksListComponent
    },
    { path: 'searchedhome',
        component: books_searched_component_1.SearchedBooksListComponent },
    {
        path: 'addressform',
        component: address_form_component_1.AddressComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map