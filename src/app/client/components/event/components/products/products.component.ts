import {Component, OnInit, Input} from '@angular/core';
import {Constants} from '../../../../../utils/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products = [];
  Constants = Constants;

  constructor() {
  }

  ngOnInit() {

  }

}
