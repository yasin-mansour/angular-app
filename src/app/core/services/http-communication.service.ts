import {Injectable} from '@angular/core';
import {Headers, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import {ApiConstants} from "../../utils/api-constants";

@Injectable()
export class HttpCommunicationService {

  constructor(public http: HttpClient) {

  }

  post(url: string, body: any, headers?: HttpHeaders, isFormUrl = true) {

    if (!headers) {
      headers = new HttpHeaders();
    }
    this.setHeaders(headers);

    //let options: RequestOptions = new RequestOptions({headers: headers, withCredentials: true});
    //body = isFormUrl ? this.objToFormUrlencoded(body) : body;
    return this.http.post(this.buildUrl(url), body)
      .map((data: Response) => this.handleResponse(data))
      .catch(this.handleErrors());
  }

  get(url: string) {
    return this.http.get(this.buildUrl(url))
      .map(response => response);
  }

  public handleErrors() {
    return (res: Response) => {


      return Observable.throw(res);
    };
  }

  buildUrl(url) {
    return environment.SERVER_NAME + url;
  }

  public setHeaders(objectToSetHeadersTo: HttpHeaders) {
    objectToSetHeadersTo.set('Content-Type', 'application/json');
  }

  public handleResponse(res: Response) {
    return res;
  }

  objToFormUrlencoded(object) {
    const keys = Object.keys(object);

    const urlEncoded = [];

    keys.map(key => {
      const parameter = key + '=' + object[key];
      urlEncoded.push(parameter);
    });

    return urlEncoded.join('&');
  }
}

