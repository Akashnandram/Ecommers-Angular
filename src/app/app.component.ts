import { Component, OnInit } from '@angular/core';
import { product_Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'cart-add-remove-app';
  data = product_Data?.data;
}
