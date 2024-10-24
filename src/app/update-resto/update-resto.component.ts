import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {RestoService} from '../resto.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name :  new  FormControl(''),
    email : new  FormControl(''),
    Address : new  FormControl(''),
  })
  constructor(private router :ActivatedRoute , private  resto :RestoService) { }
  alert:boolean= false ;
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).
    subscribe((result:any)=>{
      this.editResto = new FormGroup({
        name :  new FormControl(result.name),
        email : new FormControl(result.email),
        Address : new FormControl(result.Address),
      })
    }
  )
  }
  collection(){
      this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
      this.alert = true 
    })
  }
  closeAlert(){
    this.alert = false;
  }

}
