import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginConfig = [];

  ngOnInit() {
    this.loginConfig = this.getLoginJson();
  }

  getLoginJson() {

    const json = [
      {
        value: '',
        key: 'email',
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
