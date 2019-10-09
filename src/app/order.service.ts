import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Order } from "./order";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getorders() {
    return this.http.get<Order[]>(environment.orderApi);
  }
}
