import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

const api_url = "http://localhost:3000";

@Injectable()
export class HttpService {
	public headers: Headers;
	public borrowers: any[];

	constructor(private http: Http) {
		this.headers = new Headers({ 'Content-Type': 'application/json' });
	}

	getBorrowers() {
		return new Observable((observer) => {
			if(this.borrowers) {
				observer.next(this.borrowers);
				observer.complete();
			}else {
				this.http.get(api_url+'/api/borrower').subscribe(
					res => {
						this.borrowers = res.json();
						observer.next(this.borrowers);
						observer.complete();
					}, err => console.log(err)
				)
			}
		})
	}
}
