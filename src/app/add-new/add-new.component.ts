import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { trigger, style, animate, transition } from '@angular/animations';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
	  const isSubmitted = form && form.submitted;
	  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

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
    @Output() newPosted = new EventEmitter<boolean>();
    constructor(private http:HttpClient) {}
    newAcro = {};
    showCheck = false;
    loading = false;

    showSuccess () {
        this.showCheck = true;
        setTimeout(() => {
			this.showCheck = false;
			this.newAcro = {};
        },2000)
    }
	setAcroData () {
        this.loading = true;
		this.postNewAcro().then(
			data => console.log(data)
		).then(() =>  {
            this.showSuccess();
            this.newPosted.emit(true)
            this.loading = false;
        })
	}
	postNewAcro () {
		return this.http.post(environment.API_URL, this.newAcro).toPromise()
			.then(res => res)
			.catch(err => console.error(err))
	}

	acroFormControl = new FormControl('', [
		Validators.required
	  ]);

	defFormControl = new FormControl('', [
	Validators.required
	]);
	
	acroMatcher = new MyErrorStateMatcher();
    defMatcher = new MyErrorStateMatcher();
	
}