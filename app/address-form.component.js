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
var AddressComponent = (function () {
    function AddressComponent(router, booksInCartService) {
        this.router = router;
        this.booksInCartService = booksInCartService;
        this.isSuccess = false;
    }
    AddressComponent.prototype.gotoHome = function () {
        localStorage.setItem("success", "success");
        this.booksInCartService.clearCart();
        this.router.navigate(['/home']);
    };
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            templateUrl: "app/address-form.component.html",
            providers: [books_in_cart_service_1.BooksInCartService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, books_in_cart_service_1.BooksInCartService])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address-form.component.js.map