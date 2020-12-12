import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'from-group',
  styleUrls: ['fromgroup.component.css'],
  templateUrl: './fromgroup.component.html',
})
export class Fromgroup implements OnInit {
    form:any
    @Input() model: any; 
    search1="";
    search2="";
    search3="";
    searchstr1="";
    searchstr2="";
    searchstr3="";
    twosearch1 ="";
    twosearch2 ="";
    twosearch3 ="";
    
    threesearch1="";
    threesearch2="";
    threesearch3="";

    selectOption1 = ["one", "two", "three", "four", "five",'six']
    selectOption2 = ["one", "two", "three", "four", "five",'six']
    selectOption3 = ["one", "two", "three", "four", "five",'six']
    ngOnInit(){
        
    }
    onchangevalues(){
        if(!this.threesearch3){
            console.log('enterdfgdfgfdg');
        }
        
    }
    
    submitvalues(){
        if((this.search1)){
            if((this.searchstr1 || this.twosearch1 || this.threesearch1)){
                console.log('enter 1');
            }else{
                console.log('enter wrong 1');
            }
        }
        if((this.search2)){
            if((this.searchstr2 || this.twosearch2 || this.threesearch2)){
                console.log('enter 2');
            }else{
                console.log('enter wrong 2');
            }
        }
        if((this.search3)){
            if((this.searchstr3 || this.twosearch3 || this.threesearch3)){
                console.log('enter 3');
            }else{
                console.log('enter wrong 3');
            }
        }
        
    }
    onselected1(value1) {
        this.selectOption2 = ["one", "two", "three", "four", "five",'six']
        this.selectOption3 = ["one", "two", "three", "four", "five",'six']
        let checkisthere =  this.selectOption2.indexOf(value1);
        console.log(checkisthere);
        if(checkisthere !== -1){
            this.selectOption2.splice(checkisthere,1)
            if(this.search3){
                let checkisthere12 =  this.selectOption2.indexOf(this.search3);
                this.selectOption2.splice(checkisthere12,1)
            }
        }

        let checkisthere2 =  this.selectOption3.indexOf(value1);
        if(checkisthere2 !== -1){
            this.selectOption3.splice(checkisthere2,1)
            if(this.search2){
                let checkisthere22 =  this.selectOption3.indexOf(this.search2);
                this.selectOption3.splice(checkisthere22,1)
            }
            
        }


    }
    onselected2(value1) { 
        this.selectOption1 = ["one", "two", "three", "four", "five",'six']
        this.selectOption3 = ["one", "two", "three", "four", "five",'six']
        let checkisthere =  this.selectOption3.indexOf(value1);
        let checkisthere1 =  this.selectOption1.indexOf(value1);
        console.log(checkisthere1);
        console.log(this.selectOption1);
        if(checkisthere !== -1){
            this.selectOption3.splice(checkisthere,1)
        }
        if(checkisthere1 !== -1){
            console.log('enter');
            this.selectOption1.splice(checkisthere1,1)
            if(this.search1){
                let checkisthere12 =  this.selectOption3.indexOf(this.search1);
                this.selectOption3.splice(checkisthere12,1)
            }
        }
    }
    onselected3(value1) {
        this.selectOption1 = ["one", "two", "three", "four", "five",'six']
        this.selectOption2 = ["one", "two", "three", "four", "five",'six']
        let checkisthere =  this.selectOption2.indexOf(value1);
        let checkisthere1 =  this.selectOption1.indexOf(value1);
        if(checkisthere !== -1){
            this.selectOption2.splice(checkisthere,1)
            if(this.search1){
                let checkisthere3 =  this.selectOption2.indexOf(this.search1);
                this.selectOption2.splice(checkisthere3,1)
            }
        }
        if(checkisthere1 !== -1){
            this.selectOption1.splice(checkisthere1,1)
            if(this.search2){
                let checkisthere33 =  this.selectOption1.indexOf(this.search2);
                console.log(checkisthere33);
                this.selectOption1.splice(checkisthere33,1)
            }
            
            
        }
    }

}
