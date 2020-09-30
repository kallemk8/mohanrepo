import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'select-value',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
    @Input() model: any; 
    ngOnInit(){
        
    }
}
