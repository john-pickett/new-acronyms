import { Component, InputDecorator, Input } from '@angular/core';


@Component({
  selector: 'acronyms-list',
  templateUrl: './acronyms.component.html',
  styleUrls: ['./acronyms.component.scss']
})
export class AcronymsComponent {
    @Input() acronyms: []
	
	
}