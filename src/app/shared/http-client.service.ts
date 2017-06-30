import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClient extends BaseRequestOptions {
  constructor() {
    super();

    this.headers.set('Content-Type', 'application/json');
    // this.headers.set('Authorization', 'Bearer c2669247-877e-4eac-aaba-d8de5569af7d');
    // this.headers.set('Accept-Language', 'zh-CN');
    // this.headers.set("Access-Control-Allow-Origin", "*");
    // this.headers.set("X-Requested-With", "XMLHttpRequest");
  }
}

export const requestOptionsProvider = {
  provide: RequestOptions, useClass: HttpClient
};