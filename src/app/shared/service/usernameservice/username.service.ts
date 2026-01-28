import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor() { }

  usernamesub$ : Subject<string> = new Subject<string>()
}
