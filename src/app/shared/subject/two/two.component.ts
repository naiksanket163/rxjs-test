import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/usernameservice/username.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  usename! : string

  constructor(
    private _userservice : UsernameService
  ) { }

  ngOnInit(): void {
    this._userservice.usernamesub$
    .subscribe(res => {
      this.usename=res
    })
  }

}
