import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Constants} from "../../../../../utils/constants";

@Component({
  selector: 'app-data-to-be-entered',
  templateUrl: './data-to-be-entered.component.html',
  styleUrls: ['./data-to-be-entered.component.css']
})
export class DataToBeEnteredComponent implements OnInit {

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
        key: 'date',
        label: Constants.EVENT_DATA_TO_BE_ENTERED_DATE,
        placeholder:  Constants.EVENT_DATA_TO_BE_ENTERED_DATE,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'time',
        label: Constants.EVENT_DATA_TO_BE_ENTERED_TIME,
        placeholder: Constants.EVENT_DATA_TO_BE_ENTERED_TIME,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 2,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'storeName',
        label: Constants.EVENT_DATA_TO_BE_ENTERED_STORE_NAME,
        placeholder: Constants.EVENT_DATA_TO_BE_ENTERED_STORE_NAME,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'suburb',
        label: Constants.EVENT_DATA_TO_BE_ENTERED_SUBURB,
        placeholder: Constants.EVENT_DATA_TO_BE_ENTERED_SUBURB,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'channel',
        label: Constants.EVENT_DATA_TO_BE_ENTERED_CHANNEL,
        placeholder: Constants.EVENT_DATA_TO_BE_ENTERED_CHANNEL,
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'retailer',
        label: Constants.EVENT_DATA_TO_BE_ENTERED_RETAILER,
        placeholder: Constants.EVENT_DATA_TO_BE_ENTERED_RETAILER,
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
