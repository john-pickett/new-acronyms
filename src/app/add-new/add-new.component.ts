import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'add-new-acronym',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {
    constructor(private http:HttpClient) {}
	newAcro = {
		abrev: "",
		def: "",
		notes: ""
	};

	setAcroData () {
		this.postNewAcro().then(
			data => console.log(data),
			() => console.log('new acro posted')
		)
	}
	postNewAcro () {
		return this.http.post(environment.API_URL, this.newAcro).toPromise()
			.then(res => res)
			.catch(err => console.error(err))
	}
    
	
}