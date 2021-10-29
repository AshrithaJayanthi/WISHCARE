import { Component, OnInit } from '@angular/core';
import { SchemesService } from '../schemes.service';

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css']
})
export class SchemesComponent implements OnInit {

  constructor(private ss:SchemesService) { }

  schemesObj=[]
  noschemes=false;
  ngOnInit(): void {
    this.ss.getSchemes().subscribe(
      res=>{
        if(res.message==='No schemes')
          this.noschemes=true
        else{
          this.schemesObj=res.message
      }},
      err=>{
        console.log(err)
        alert('Something went wrong...')
      }
    )}
  }