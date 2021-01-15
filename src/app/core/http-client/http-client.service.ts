/**
 * @author Mustafa Omran promustafaomran@hotmail.com
 *
 * Generic Http Client Service
 *
 * @class HttpClientService
 *
 * Abstract layer to communicate with backend APIs
 * It has all crud operations
 */
import { Observable } from 'rxjs';
import { App } from '../app';
import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 *
 * @constant httpOptions
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }),
  withCredentials: false,
};

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  lng: string;

  /**
   *
   * @param http HttpClient
   * @param locale LOCALE_ID
   */
  constructor(private http: HttpClient, @Inject(LOCALE_ID) locale: string) {
    this.lng = locale;
  }


  /**
   * full URl
   *
   *
   * @param resource
   */
  fullRequestURL(resource: string | number): string {
    return `${App.backEndUrl}/${resource}`;
  }

  /**
   * get method
   *
   *
   * @param resource
   * @param params
   */
  get<T>(resource?: string | number, params?: {}): Observable<T> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.get<T>(this.fullRequestURL(resource), httpOptions);
  }


  /**
   * post method
   *
   *
   * @param body
   * @param resource
   * @param params
   */
  post<T>(body: any = {}, resource?: string | number, params?: {}): Observable<T> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.post<T>(this.fullRequestURL(resource), body, httpOptions);
  }

  /**
   * put method
   *
   *
   * @param body
   * @param resource
   */
  put<T>(body: any = {}, resource?: string | number): Observable<T> {
    return this.http.put<T>(this.fullRequestURL(resource), body, httpOptions);
  }

  /**
   * delete method
   *
   *
   * @param params
   * @param resource
   */
  delete<T>(resource?: string | number, params?: {}): Observable<T> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.delete<T>(this.fullRequestURL(resource), httpOptions);
  }

  /**
   * convert get header params to query string
   *
   *
   * @param options
   */
  getArgs(options: any): string {
    if (!options) {
      return '';
    }
    var args = '?';
    Object.keys(options).forEach((key) => {
      args += this.optionToString(key, options[key]);
    });
    return args;
  }


  /**
   * convert options to string
   *
   *
   * @param key
   * @param value
   */
  optionToString(key: string, value: any): string {
    if (!value) {
      return '';
    }
    var str = '';
    if (value instanceof Array) {
      value.forEach((element, index) => {
        str += `${key}[${index}]=${element}&`;
      });
    } else if (value instanceof Object) {
      Object.keys(value).forEach((element) => {
        if (value instanceof Object) {
          str += this.serializeObject(value[element], `${key}[${element}]`);
        } else {
          str += `${key}[${element}]=${value[element]}&`;
        }
      });
    } else {
      str += `${key}=${value}&`;
    }
    return str;
  }

  /**
   * serializing
   *
   *
   * @param obj
   * @param parentSerialized
   */
  private serializeObject(obj: any, parentSerialized: string): string {
    var str = '';
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (value instanceof Object) {
        str += `${this.serializeObject(value, `${parentSerialized}[${key}]`)}`;
      } else {
        str += `${parentSerialized}[${key}]=${value}&`;
      }
    });
    return str;
  }

}
