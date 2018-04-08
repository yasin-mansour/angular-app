import {Injectable} from '@angular/core';
import {HttpCommunicationService} from '../../core/services/http-communication.service';
import {ApiConstants} from '../../utils/api-constants';
import {AuthService} from '../../core/services/auth.service';

@Injectable()
export class ClientService {

  constructor(private http: HttpCommunicationService, private authService: AuthService) {

  }

  login(data) {

    return this.http.post(ApiConstants.USER_LOGIN, data).toPromise().then(response => {
      this.authService.setToken(response.token);
    });
  }

  getEvents(start, length) {
    return this.http.get(ApiConstants.USER_EVENTS + `?start=${start}&length=${length}`);
  }

  getEvent(id) {
    return this.http.post(ApiConstants.EVENT_DETAILS + id, {});
  }
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
