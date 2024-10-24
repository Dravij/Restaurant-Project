import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:3000/restaurants";
  rootUrl="http://localhost:3000/"

  constructor(private http : HttpClient) {}

  getList(){
  return this.http.get(this.url)
  }
  saveResto(data:any){
    // console.warn("service", data );
     return this.http.post(this.url, data);
  }
  deleteResto(id:any){
    return this.http.delete(`http://localhost:3000/restaurants/${id}`)
  }
  getCurrentResto(id:any){
    return this.http.get(`http://localhost:3000/restaurants/${id}`)
  }
  updateResto(id:any , data :any){
    return this.http.put(`http://localhost:3000/restaurants/${id}` , data )
  }
  registerUser(data: any ){
    return this.http.post(this.rootUrl + "users" , data)
  }

 
  
}
