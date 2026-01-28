import { Component, OnInit } from '@angular/core';
import { OfService } from '../../service/ofservice/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    evenArr! : Array<number>

    oddArr! : Array<number>

    strInfo! : Array<string>


  constructor(
    private _ofservice : OfService
  ) { }

  ngOnInit(): void {



    this._ofservice.itsEven$
    .subscribe((res) => {
      this.evenArr=res
    })



    this._ofservice.odd$
    .subscribe((res) => {
      this.oddArr=res
    })

    this._ofservice.strArr$
    .subscribe(val => {
      this.strInfo=val
    })













  }







}
