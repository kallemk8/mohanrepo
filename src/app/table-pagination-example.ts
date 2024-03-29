import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ExportToCsv } from 'export-to-csv';
import { AppService } from './app.service';
import * as moment from 'moment';
import 'moment-timezone';
import { environment } from './../environments/environment';
import { MatSort } from '@angular/material/sort';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { experiences, education, skills, achievements } from "./cv-data";
var format = require('xml-formatter');

import { DocumentCreator } from './cv-generator';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample implements AfterViewInit, OnInit {
  datevalue = moment('2020-10-20').format('YYYY.MM.DD')
  public download(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements
    ]);
    
    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
  xml = '<root><content><p xml:space="preserve">This is <b>some</b> content.</content></p>';

  formattedXml;
  
  myDate;
  minDate;
  options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: false,
    useTextFile: false,
    useBom: true,
    //useKeysAsHeaders: true,
    headers: ['position', 'name', 'symbol'] 
  };
  selectedvalueds = ['onew','two', 'three']

  selectedvalue2 = ['onew','two', 'three']
  constructor(private appService:AppService){}
  csvExporter = new ExportToCsv(this.options);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  Status="";
  ObjectId="";
  tstatus="";
  selectedValue="";
  radiobutton1 = "radiobutton1";
  radiobutton2 = "";
  radiobuttonchange2(){
    console.log('sdds')
    this.radiobutton2 = "radiobutton2"
    this.radiobutton1 = "";
    console.log(this.radiobutton1, this.radiobutton2)
  }
  radiobuttonchange1(){
    console.log('sdds')
    this.radiobutton1 = "radiobutton1"
    this.radiobutton2 = "";
    console.log(this.radiobutton1, this.radiobutton2)
  }
  heroForm;
  mapdata =  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'};
  @ViewChild(MatSort) sort: MatSort;
  
  ELEMENT_DATA= [
    {position: 1, name: '///Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: '//Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: '//Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: '\\Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: '\\Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon\\', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];
  demo = {position: 1, name: 'Hydrogen 1', weight: 1.0079, symbol: 'H'}
  
  ELEMENT_DATA1 = [
    
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;

  }
  onclickfuntion(data){
    var newarray = [];
    data.map((object,i)=>{
      var newobject = {"position":Number,"name":"","symbol":""};
      newobject.position = object.position;
      newobject.name = object.name;
      newobject.symbol = object.symbol;
      newarray.push(newobject);
    })
    this.csvExporter.generateCsv(newarray);

   this.appService.downloadFile(newarray, 'jsontocsv');
  }
  startDate:"";
  endDate:"";
  hero2 = [ {
    ObjectId:"",
    status:"",
    requestnumber:true,
    requestornumber:true,
    transferDate:true,
    processDate:true,
    transferAmount:true,
    applicationCode:true,
    statusv:true,
    obj:true,
    add:true,
    
  }
]
  ngOnInit(){
    console.log(moment().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss z'));
    console.log(environment.apiUrl)
    let mdate = new Date()
    mdate.setDate(mdate.getDate() + 30);
    this.myDate = moment(mdate).format('YYYY-MM-DDTHH:MM');
    
    let mindate = new Date()
    
    this.minDate = moment(mindate).format('YYYY-MM-DDTHH:MM');
    this
    var index = this.selectedvalueds.indexOf("onew");;
    console.log(index);
    var check = this.selectedvalue2.indexOf("onew");
    console.log(check);
    this.selectedvalue2.splice(index,1)
    console.log(this.selectedvalue2)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
    this.formattedXml =  format(this.xml);
    console.log(this.formattedXml)
  }
  addnewobjects(i){
    this.hero2[i].add = false
    var temparray = [];
    var object = 
    { 
      ObjectId:"", 
      status:"", 
      tstatus:"", 
      add:true, 
      obj:false,
      requestnumber:true,
      requestornumber:true,
      transferDate:true,
      processDate:true,
      transferAmount:true,
      applicationCode:true,
      statusv:true,
    }
    this.hero2.map((op,i)=>{
      if(op.ObjectId == "objectid"){
        object.obj = false
      }
      if(op.ObjectId == "status"){
        object.statusv = false
      }
      if(op.ObjectId == "requestnumber"){
        object.requestnumber = false
      }
      if(op.ObjectId == "requestornumber"){
        object.requestornumber = false
      }
      
    })
    console.log(object);
    
    this.hero2.push(object);
  } 
  removeoldobject(i){
    this.hero2.splice(i);
  }
  selectname(selected){
    this.mapdata = selected
  }
  startDatecom(){
    console.log(this.startDate);
  }
  endDatecom(){
    var isvalid =  moment(this.endDate).isAfter(moment(this.startDate));
    if(isvalid){
      this.endDate = this.endDate
    }else{
      this.endDate = "";
    }
  }
  submitvalue(){
    this.ELEMENT_DATA1 =   this.ELEMENT_DATA;
    console.log(this.radiobutton1)
    console.log(this.radiobutton2)
    //console.log(this.ELEMENT_DATA1)
   var data =  JSON.stringify(this.ELEMENT_DATA);
   //console.log(data);
  var sample= data.replace(/\//g, "");;
  var sample2= sample.replace(/\\/g, "");;
  
   var comp = JSON.parse(sample2)
   //console.log(comp);
    // this.dataSource = new MatTableDataSource(comp);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
     // console.log(this.hero2)

      // if(this.hero2[0].ObjectId==="objectid"){
      //   var completedata = this.ELEMENT_DATA.map((object,i)=>{
      //     if(object.symbol === "S"){
      //       object.symbol = "Changed Text"
      //     }
      //     return object;
      //   })
      //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      //   this.dataSource.paginator = this.paginator;
      // }
      // if(this.selectedValue==="status"){
      //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA1);
      //   this.dataSource.paginator = this.paginator;
      // }
    
    }
       
}