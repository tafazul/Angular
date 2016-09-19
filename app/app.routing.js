"use strict";
var router_1 = require('@angular/router');
var cart_checkout_component_1 = require('./cart-checkout.component');
var books_list_component_1 = require('./books-list.component');
var address_form_component_1 = require('./address-form.component');
var dummy_component_1 = require('./dummy.component');
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
    { path: 'home/:word',
        component: books_list_component_1.BooksListComponent
    },
    { path: 'dummy',
        component: dummy_component_1.DummyComponent
    },
    {
        path: 'addressform',
        component: address_form_component_1.AddressComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map