import { Injectable, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserObserService {
  //activatedEmitter=new EventEmitter<boolean>();
  activatedEmitter=new Subject<boolean>();
  constructor() { }
}
