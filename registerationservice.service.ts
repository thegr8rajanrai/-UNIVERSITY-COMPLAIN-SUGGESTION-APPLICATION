import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterationserviceService {

  constructor( private http:HttpClient ) { }

  insertData(signup){
    return this.http.post('http://localhost:3000/gju_data',signup);
  }
  checklogin(login_forminput_data){
    return this.http.post('http://localhost:3000/login_check',login_forminput_data);
  }
  inhstlData(hostelfun){
    return this.http.post('http://localhost:3000/hstl_data',hostelfun);
  }
  indepartData(departfun){
    return this.http.post('http://localhost:3000/depart_data',departfun);
  }
  inadminData(adminfun){
    return this.http.post('http://localhost:3000/admin_data',adminfun);
  }
  innetData(networkfun){
    return this.http.post('http://localhost:3000/network_data',networkfun);
  }
  insportData(sportfun){
    return this.http.post('http://localhost:3000/sport_data',sportfun);
  }
  userlist(userdata) {
    return this.http.post('http://localhost:3000/list_users', userdata);
  }
}
