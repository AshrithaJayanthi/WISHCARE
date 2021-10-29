import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  hsptlRegister(hsptlObj:any){
    this.rs.Register(hsptlObj).subscribe(
      res=>{
        console.log(res.message)
        if(res.message==="Hospital registered")
        {
          alert('Hospital successfully registered')
        }
        else
        {
          alert('Hospital already exists!!')
        }
      },
      err=>{
        console.log(err)
        alert('Something went wrong in registering....')
      }
    )
  }
}