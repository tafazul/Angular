"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var books_in_cart_service_1 = require('./books-in-cart.service');
var router_1 = require('@angular/router');
var CartComponent = (function () {
    function CartComponent(router, booksInCartService) {
        this.router = router;
        this.booksInCartService = booksInCartService;
        this.selectedBooks = [];
        this.factor = 1;
        this.getBooksFromCart();
    }
    CartComponent.prototype.gotoForm = function () {
        this.router.navigate(['/addressform']);
    };
    CartComponent.prototype.getBooksFromCart = function () {
        var _this = this;
        this.booksInCartService.getBooksInCart().then(function (selectedBooks) { return _this.selectedBooks = selectedBooks; });
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: "app/cart-checkout.component.html",
            providers: [books_in_cart_service_1.BooksInCartService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, books_in_cart_service_1.BooksInCartService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart-checkout.component.js.map