import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { trigger, style, animate, transition } from '@angular/animations';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
    selector: 'add-new-acronym',
    templateUrl: './add-new.component.html',
    styleUrls: ['./add-new.component.scss'],
    animations: [
        trigger(
          'enterAnimation', [
            transition(':enter', [
              style({transform: 'translateX(100%)', opacity: 0}),
              animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
            ]),
            transition(':leave', [
              style({transform: 'translateX(0)', opacity: 1}),
              animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
            ])
          ]
        )
      ]
})
export class AddNewComponent {
    constructor(private http:HttpClient) {}
    newAcro = {};
    showCheck = false;

    showSuccess () {
        this.showCheck = true;
        setTimeout(() => {
            this.showCheck = false;
        },3000)
    }
	setAcroData () {
		this.postNewAcro().then(
			data => console.log(data)
		).then(() =>  {
            console.log('new acronym posted')
            this.newAcro = {};
            this.showSuccess();
        })
	}
	postNewAcro () {
		return this.http.post(environment.API_URL, this.newAcro).toPromise()
			.then(res => res)
			.catch(err => console.error(err))
	}
    
	
}