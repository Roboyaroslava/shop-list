import { Component } from '@angular/core';
     
export class Item{
    purchase: string;
    done: boolean;
    price: number;
    quantity: number;
     
    constructor(purchase: string, price: number, quantity: number) {
  
        this.purchase = purchase;
        this.price = price;
        this.quantity = quantity;
        this.done = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> План покупок на сегодня </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="quantity" placeholder="Количество" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена за штуку" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, quantity, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Что купить</th>
                    <th>Сколько (количество)</th>
                    <th>Цена за штуку</th>
                    <th>Цена за всё</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.price * item.quantity}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    items: Item[] = 
    [
        { purchase: "Хлеб", done: false, price: 50, quantity: 1 },
        { purchase: "Масло", done: false, price: 125.5, quantity: 1 },
        { purchase: "Сыр", done: false, price:520, quantity:0.5 },
        { purchase: "Шоколад Милка", done: true, price: 89.9, quantity:1 }
    ];
    addItem(text: string, price: number, quantity: number): void {
         
        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
        if(quantity==null || quantity==undefined)
            return;
        this.items.push(new Item(text, price, quantity));
    }
}