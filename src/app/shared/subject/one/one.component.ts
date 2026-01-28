import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/usernameservice/username.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  usernameInfo! : string

  constructor(
    private _userservice : UsernameService
  ) { }

  ngOnInit(): void {

    this._userservice.usernamesub$
    .subscribe(res => {
      this.usernameInfo=res
      console.log(res);
      
    })



  }

}
