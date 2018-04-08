import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {tryParseJsonString} from '../../../utils/functions';
import {Router} from "@angular/router";
import {RouteConstants} from "../../../utils/route-constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginConfig = [];
  msgs = [];

  constructor(private clientService: ClientService,
              private router: Router) {

  }

  ngOnInit() {
    this.loginConfig = this.getLoginJson();
  }

  loginFunction(data) {
    this.msgs = [];

    this.clientService.login(data).then(() => {
      this.router.navigate([RouteConstants.EVENTS]);
    }, err => {
      let response = tryParseJsonString(err._body);
      let message = '';
      if (response.hasError) {
        message = response.data;
      } else {
        message = response.data.error;
      }
      this.msgs.push({severity: 'warn', summary: 'Warn Message', detail: message})

    });
  }

  getLoginJson() {

    const json = [
      {
        value: '',
        key: 'username',
        label: 'user name',
        placeholder: 'Email',
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'password',
        label: 'user name',
        placeholder: 'Password',
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        type: 'password',
      }
    ];

    return json;

  }
}
