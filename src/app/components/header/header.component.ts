import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
check = false;
  constructor(public route:Router) { }

  ngOnInit(): void {
    this.validate();
  }
  goto(){
    this.route.navigateByUrl('login');
  }
  out(){

  }
async validate(){
    if(localStorage.getItem('session_id')== undefined){
      this.check =false;
    }else{
      this.check =true;
    }
  }
 

}
