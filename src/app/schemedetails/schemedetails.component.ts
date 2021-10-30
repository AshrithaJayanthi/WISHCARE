import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SchemesService } from '../schemes.service';

@Component({
  selector: 'app-schemedetails',
  templateUrl: './schemedetails.component.html',
  styleUrls: ['./schemedetails.component.css']
})
export class SchemedetailsComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private ss:SchemesService) { }

  mysubscription:Subscription
  scheme:any;
  ngOnInit(): void {
    let sno=this.ar.snapshot.params.sno;
    this.mysubscription=this.ss.getSchemeDetails(sno).subscribe(
    res=>{
    this.scheme=res.message;
    },
    err=>{
    console.log(err)
    alert('Something went wrong...')
    }
    )
    }

}