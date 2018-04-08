import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];
  cols = [
    {field: 'name', header: 'Name'},
    {field: 'shopEventStatus', header: 'Status'},
  ];
  totalRecords: number;
  loading: boolean;

  constructor(private clientService: ClientService) {

  }

  ngOnInit() {
    this.clientService.getEvents(0, 10).subscribe(data => {
      this.events = data['content'];
       this.totalRecords = data['totalElements'];
    });
  }

  loadEventsLazy() {

  }


}
