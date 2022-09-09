import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() product_data:any;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item:any){
    if(!globalThis.cartData){
      globalThis.cartData = [];
    }
    globalThis.cartData.push(item);
    console.log("product Added to the cart");
    console.log(globalThis.cartData);
  }

  removeFromCart(item:any){
    if(globalThis.cartData.find((obj:any)=> (obj.name===item.name && obj.price===item.price))){
      let index = globalThis.cartData.indexOf(item);
      globalThis.cartData.splice(index,1);
      console.log("product Removed From the cart");
      console.log(globalThis.cartData);
    }else{
      alert('Product is not in the cart!');
    }
  }

}