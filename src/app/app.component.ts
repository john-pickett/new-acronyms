import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

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
    acronyms: any = [];
    
    loadAcronymData() {
        console.log('loading data')
        this.getAcroData().subscribe(
            data => this.acronyms = data,
            err => console.error(err),
            () => console.log('done loading acronyms')
        )
    }

    getAcroData() {
        return this.http.get(environment.API_URL)
    }

    ngOnInit() {
        this.loadAcronymData()
    }
    
    onNewPost(posted: boolean) {
        this.loadAcronymData()
    }
}