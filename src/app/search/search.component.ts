import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private rs:RegisterService) { }

  hsptlObjs:any
  nohsptls=false
  SearchTerm:string;

  ngOnInit(): void {
    this.rs.getHospitals().subscribe(
      res=>{
        if(res.message==='No hospitals')
          this.nohsptls=true
        else{
          this.hsptlObjs=res.message
        }
      },
      err=>{
        console.log(err)
        alert('Something went wrong...')
      }
    )}
}