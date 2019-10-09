import { Component, OnInit } from "@angular/core";
import { OrderService } from "./order.service";
import {Order} from "./order"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  orders: Order[];
  title:string = "Orders";
  abc: any;

  constructor(private orderService: OrderService) {
  }
  ngOnInit() {
    this.orderService.getorders().subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }
  getDetails(data) {
   this.abc = this.orders[data];
   console.log(this.abc);
  }

}
