import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable()
export class BackendConnector {

    private baseUrl: string = "http://localhost:2000/";

    getFlickr_photos = new Subject<any>();

    constructor(
        private http: HttpClient
    ) { }


    flickr_photos() {
        var promise = new Promise((resolve, reject) => {
            return this.http.get(this.baseUrl + "flickr_photos").subscribe(
                (response: any) => {
                    this.getFlickr_photos.next(response);
                    resolve(response);
                }
            );
        });
        return promise;
    }

}