import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event-images',
  templateUrl: './event-images.component.html',
  styleUrls: ['./event-images.component.css']
})
export class EventImagesComponent implements OnInit {

  @Input() images = [];

  constructor() {
  }

  ngOnInit() {
  }

}
