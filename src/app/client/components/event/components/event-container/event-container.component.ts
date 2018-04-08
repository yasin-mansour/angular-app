import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../../services/client.service';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent implements OnInit {

  images = [];
  products = [];

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    /*this.clientService.getEvents().subscribe(data => {
      this.images = data['images'];
      this.products = data['prducts'];
    });*/
  }

  submitProduct(data) {

  }

  submitData(data){

  }

}
