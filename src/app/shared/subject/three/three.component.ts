import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/usernameservice/username.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  username! : string

  constructor(
    private _userservice : UsernameService
  ) { }

  ngOnInit(): void {
    this._userservice.usernamesub$
    .subscribe(res => {
      this.username=res
    })
  }

}
