import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsernameService } from '../../service/usernameservice/username.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private _userservice : UsernameService
  ) { }

  @ViewChild('userForm') userForm! : NgForm

  ngOnInit(): void {
  }


  onsubmit(){
    {
      let val = this.userForm.value
      this._userservice.usernamesub$.next(val.userName)
      console.log(val);
      this.userForm.reset()
      
    }
    
    
      

  }

}
