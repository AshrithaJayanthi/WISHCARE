import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private hc:HttpClient) { }
  Register(hsptlObj:any):Observable<any>{
    return this.hc.post('hsptl/register',hsptlObj)
  }

  getHospitals():Observable<any>{
    return this.hc.get('hsptl/gethospitals')
  }
}