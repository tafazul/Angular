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
var books_in_cart_1 = require('./books-in-cart');
var BooksInCartService = (function () {
    function BooksInCartService() {
    }
    BooksInCartService.prototype.getBooksInCart = function () {
        return Promise.resolve(books_in_cart_1.CartBooks);
    };
    BooksInCartService.prototype.insertBooksInCart = function (book) {
        Promise.resolve(books_in_cart_1.CartBooks).then(function (books) { return books.push(book); });
    };
    BooksInCartService.prototype.clearCart = function () {
        books_in_cart_1.CartBooks.splice(0, books_in_cart_1.CartBooks.length);
    };
    BooksInCartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BooksInCartService);
    return BooksInCartService;
}());
exports.BooksInCartService = BooksInCartService;
//# sourceMappingURL=books-in-cart.service.js.map