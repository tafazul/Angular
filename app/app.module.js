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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
var cart_checkout_component_1 = require('./cart-checkout.component');
var books_list_component_1 = require('./books-list.component');
var http_1 = require('@angular/http');
var address_form_component_1 = require('./address-form.component');
var app_routing_1 = require('./app.routing');
var search_pipe_1 = require('./search.pipe');
var books_in_cart_1 = require('./books-in-cart');
var books_searched_component_1 = require('./books-searched.component');
var multiply_pipe_1 = require('./multiply.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                books_list_component_1.BooksListComponent,
                footer_component_1.FooterComponent,
                cart_checkout_component_1.CartComponent,
                address_form_component_1.AddressComponent,
                search_pipe_1.SearchFilterPipeComponent,
                books_in_cart_1.CartBooks,
                books_searched_component_1.SearchedBooksListComponent,
                multiply_pipe_1.MultiplyPipe
            ],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map