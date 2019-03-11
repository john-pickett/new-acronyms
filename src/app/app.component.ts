import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private http:HttpClient) {}
    title = 'MCG Acronyms';
    acronyms = [];

    loadAcronymData() {
        console.log('loading data')
        this.getAcroData().subscribe(
            data => { this.acronyms = data },
            err => console.error(err),
            () => console.log('done loading acronyms')
        )
    }

    getAcroData() {
        return this.http.get(process.env.API_URL)
    }

    ngOnInit() {
        console.log('starting up');
        this.loadAcronymData()
    }
}