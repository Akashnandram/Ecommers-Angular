import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-with-category',
  templateUrl: './card-with-category.component.html',
  styleUrls: ['./card-with-category.component.css']
})
export class CardWithCategoryComponent implements OnInit {

  @Input() data:any;

  constructor() { }



  ngOnInit(): void {
  }

}
