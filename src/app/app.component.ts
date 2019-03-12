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
    
    // loadAcronymData() {
    //     console.log('loading data')
    //     this.getAcroData().subscribe(
    //         data => { console.log(JSON.stringify(data)); this.acronyms = data },
    //         err => console.error(err),
    //         () => console.log('done loading acronyms')
    //     )
    // }

    // getAcroData() {
    //     return this.http.get('')
    // }

    ngOnInit() {
        console.log('starting up');
        // this.loadAcronymData()
    }

    acronyms:any = [{"id":1,"abrev":"OM Team","def":"Operations Modernization Team","notes":"The team at MCG dedicated to automating and simplifying complex business workflows.","createdAt":"2019-03-01T16:39:23.789Z","updatedAt":"2019-03-01T16:39:23.789Z"},{"id":2,"abrev":"CSM","def":"Certified Scrum Master","notes":"Certification for implementing and teaching the Agile methodology","createdAt":"2019-03-01T16:39:40.862Z","updatedAt":"2019-03-01T16:39:40.862Z"},{"id":3,"abrev":"SOW","def":"Statement of Work","notes":"A contract that defines the work to be done in an engagement. Most projects at MCG begin with a SOW.","createdAt":"2019-03-01T16:40:00.959Z","updatedAt":"2019-03-01T16:40:00.959Z"},{"id":4,"abrev":"TTYL","def":"Talk To You Later","notes":"Frequently said by teenagers","createdAt":"2019-03-09T16:39:03.188Z","updatedAt":"2019-03-09T16:39:03.188Z"},{"id":5,"abrev":"B2B","def":"Business to Business","notes":"A B2B company provides services to other businesses, rather than directly to consumers. MCG is an example of a B2B company.","createdAt":"2019-03-09T16:41:15.249Z","updatedAt":"2019-03-09T16:41:15.249Z"},{"id":6,"abrev":"C Suite","def":"C(hief) Suite","notes":"The highest level of directors in a business. Generally, those people with Chief in their title (CEO, CFO, CIO, etc) are part of the C Suite.","createdAt":"2019-03-09T16:43:46.285Z","updatedAt":"2019-03-09T16:43:46.285Z"}];


}