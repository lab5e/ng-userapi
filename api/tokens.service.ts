/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.4 breezy-leafy
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { RpcStatus } from '../model/models';
import { Token } from '../model/models';
import { TokenList } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface UserCreateTokenRequestParams {
    body: Token;
}

export interface UserDeleteTokenRequestParams {
    /** The token to delete. */
    token: string;
}

export interface UserRetrieveTokenRequestParams {
    token: string;
}

export interface UserUpdateTokenRequestParams {
    /** The token  Use this in the &#x60;X-API-Token&#x60; header when using the API. */
    token: string;
    body: Token;
}


@Injectable({
  providedIn: 'root'
})
export class TokensService {

    protected basePath = 'https://api.lab5e.com/user';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Create token
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userCreateToken(requestParameters: UserCreateTokenRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Token>;
    public userCreateToken(requestParameters: UserCreateTokenRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Token>>;
    public userCreateToken(requestParameters: UserCreateTokenRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Token>>;
    public userCreateToken(requestParameters: UserCreateTokenRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling userCreateToken.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<Token>(`${this.configuration.basePath}/user/tokens`,
            body,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove token
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userDeleteToken(requestParameters: UserDeleteTokenRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<object>;
    public userDeleteToken(requestParameters: UserDeleteTokenRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<object>>;
    public userDeleteToken(requestParameters: UserDeleteTokenRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<object>>;
    public userDeleteToken(requestParameters: UserDeleteTokenRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const token = requestParameters.token;
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling userDeleteToken.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.delete<object>(`${this.configuration.basePath}/user/tokens/${encodeURIComponent(String(token))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List tokens
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userListTokens(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<TokenList>;
    public userListTokens(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<TokenList>>;
    public userListTokens(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<TokenList>>;
    public userListTokens(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<TokenList>(`${this.configuration.basePath}/user/tokens`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve token
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userRetrieveToken(requestParameters: UserRetrieveTokenRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Token>;
    public userRetrieveToken(requestParameters: UserRetrieveTokenRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Token>>;
    public userRetrieveToken(requestParameters: UserRetrieveTokenRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Token>>;
    public userRetrieveToken(requestParameters: UserRetrieveTokenRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const token = requestParameters.token;
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling userRetrieveToken.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<Token>(`${this.configuration.basePath}/user/tokens/${encodeURIComponent(String(token))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update token
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userUpdateToken(requestParameters: UserUpdateTokenRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Token>;
    public userUpdateToken(requestParameters: UserUpdateTokenRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Token>>;
    public userUpdateToken(requestParameters: UserUpdateTokenRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Token>>;
    public userUpdateToken(requestParameters: UserUpdateTokenRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const token = requestParameters.token;
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling userUpdateToken.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling userUpdateToken.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.patch<Token>(`${this.configuration.basePath}/user/tokens/${encodeURIComponent(String(token))}`,
            body,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}