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
var router_1 = require('@angular/router');
var book_service_1 = require('./book.service');
var cart_checkout_component_1 = require('./cart-checkout.component');
var books_in_cart_service_1 = require('./books-in-cart.service');
var BooksListComponent = (function () {
    function BooksListComponent(bookService, booksInCartService, route, router) {
        this.bookService = bookService;
        this.booksInCartService = booksInCartService;
        this.route = route;
        this.router = router;
        this.mode = 'Observable';
        this.selectedBooks = [];
        this.isSuccess = false;
        this.noSelectedBooks = false;
        this.isEmpty = false;
        this.l = 0;
        this.checkedSubjects = [];
    }
    BooksListComponent.prototype.ngOnInit = function () {
        this.getBooks();
        this.isCartEmpty();
    };
    BooksListComponent.prototype.isCartEmpty = function () {
        this.cartitems = this.selectedBooks;
        this.l = this.cartitems.length;
        if (this.l != 0) {
            this.isSuccess = true;
        }
    };
    BooksListComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    BooksListComponent.prototype.gotoCart = function () {
        if (this.selectedBooks.length == 0) {
            this.isEmpty = true;
        }
        else {
            this.router.navigate(['/cart']);
        }
    };
    BooksListComponent.prototype.selectBook = function (book) {
        this.selectedBooks.push(book);
        this.booksInCartService.insertBooksInCart(book);
    };
    BooksListComponent.prototype.isBookSelected = function (book) {
        var flag = false;
        for (var _i = 0, _a = this.selectedBooks; _i < _a.length; _i++) {
            var selectedBook = _a[_i];
            if (selectedBook.id === book.id) {
                flag = true;
            }
        }
        return flag;
    };
    BooksListComponent.prototype.toggleCheck = function (subject) {
        console.log(this.checkedSubjects.indexOf(subject, 0));
        for (var _i = 0, _a = this.checkedSubjects; _i < _a.length; _i++) {
            var sub = _a[_i];
            if (this.checkedSubjects.indexOf(subject, 0) != -1) {
                var index = this.checkedSubjects.indexOf(subject, 0);
                this.checkedSubjects.splice(index, 1);
            }
            else if (this.checkedSubjects.indexOf(subject, 0) == -1) {
                console.log(subject);
                this.checkedSubjects.push(subject);
            }
        }
    };
    BooksListComponent = __decorate([
        core_1.Component({
            selector: 'books-list',
            templateUrl: 'app/books-list.component.html',
            providers: [book_service_1.BookService, books_in_cart_service_1.BooksInCartService],
            directives: [cart_checkout_component_1.CartComponent]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, books_in_cart_service_1.BooksInCartService, router_1.ActivatedRoute, router_1.Router])
    ], BooksListComponent);
    return BooksListComponent;
}());
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map