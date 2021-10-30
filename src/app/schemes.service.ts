import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchemesService {

  constructor(private hc:HttpClient) { }
  getSchemes():Observable<any>{
    return this.hc.get('scheme/getschemes')
  }

  getSchemeDetails(sno):Observable<any>{
    return this.hc.get("scheme/"+sno)
  }
}