import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventserviceService } from 'src/services/studentservice.service';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchEventsComponent implements OnInit {

  constructor(private service:EventserviceService,  private route: Router,public datepipe: DatePipe) { }
  searval!: number;
  noDataDisplay='';

  fetchedData:any;
  data=false;
  ngOnInit(): void {
  }

  searchByName(){
    this.service.searchbyid(this.searval).subscribe
    (
      data=>{
        this.fetchedData = data;
        console.log(this.fetchedData);
        this.data=true;
        if(this.fetchedData=='' || this.fetchedData==null){
          this.noDataDisplay ="No Match found!!"
          this.data=false;
        }
        // this.route.navigate(['/event']);
      },
      error=>{
        console.log("Event not added");
        this.noDataDisplay ="No Match found!!"
        this.data=false;
      }
    )
  }
  

}
