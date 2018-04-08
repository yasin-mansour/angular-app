import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Constants} from '../../../../../utils/constants';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  @Output() submit = new EventEmitter();
  config;

  constructor() {
  }

  ngOnInit() {
    this.config = this.getConfigJson();
  }


  getConfigJson() {

    const json = [
      {
        value: '',
        key: 'barcode',
        label: Constants.EVENT_PRODUCT_BARCODE,
        placeholder:  Constants.EVENT_PRODUCT_BARCODE,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'productName',
        label: Constants.EVENT_PRODUCT_NAME,
        placeholder: Constants.EVENT_PRODUCT_NAME,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 2,
        type: 'textbox',
      },
      {
        value: '',
        key: 'slip',
        label: Constants.EVENT_PRODUCT_SLIP,
        placeholder: '',
        containerClass: 'checkbox',
        required: true,
        order: 1,
        controlType: 'checkbox',
      },
      {
        value: '',
        key: 'unit',
        label: Constants.EVENT_PRODUCT_UNIT,
        placeholder: Constants.EVENT_PRODUCT_UNIT,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'size',
        label: Constants.EVENT_PRODUCT_SIZE,
        placeholder: Constants.EVENT_PRODUCT_SIZE,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'price',
        label: Constants.EVENT_PRODUCT_PRICE,
        placeholder: Constants.EVENT_PRODUCT_PRICE,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'quantiy',
        label: Constants.EVENT_PRODUCT_QUANITY,
        placeholder: Constants.EVENT_PRODUCT_QUANITY,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      }
    ];

    return json;

  }

}
