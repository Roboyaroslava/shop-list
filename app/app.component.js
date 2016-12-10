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
var Item = (function () {
    function Item(purchase, price, quantity) {
        this.purchase = purchase;
        this.price = price;
        this.quantity = quantity;
        this.done = false;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.items = [
            { purchase: "Хлеб", done: false, price: 50, quantity: 1 },
            { purchase: "Масло", done: false, price: 125.5, quantity: 1 },
            { purchase: "Сыр", done: false, price: 520, quantity: 0.5 },
            { purchase: "Шоколад Милка", done: true, price: 89.9, quantity: 1 }
        ];
    }
    AppComponent.prototype.addItem = function (text, price, quantity) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        if (quantity == null || quantity == undefined)
            return;
        this.items.push(new Item(text, price, quantity));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'purchase-app',
            template: "<div class=\"page-header\">\n        <h1> \u041F\u043B\u0430\u043D \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F </h1>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" [(ngModel)]=\"text\" placeholder = \"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-6\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"quantity\" placeholder=\"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-6\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\" placeholder=\"\u0426\u0435\u043D\u0430 \u0437\u0430 \u0448\u0442\u0443\u043A\u0443\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(text, quantity, price)\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n                </div>\n            </div>\n        </div>\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\u0427\u0442\u043E \u043A\u0443\u043F\u0438\u0442\u044C</th>\n                    <th>\u0421\u043A\u043E\u043B\u044C\u043A\u043E (\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E)</th>\n                    <th>\u0426\u0435\u043D\u0430 \u0437\u0430 \u0448\u0442\u0443\u043A\u0443</th>\n                    <th>\u0426\u0435\u043D\u0430 \u0437\u0430 \u0432\u0441\u0451</th>\n                    <th>\u041A\u0443\u043F\u043B\u0435\u043D\u043E</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{item.purchase}}</td>\n                    <td>{{item.quantity}}</td>\n                    <td>{{item.price}}</td>\n                    <td>{{item.price * item.quantity}}</td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"item.done\" /></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map