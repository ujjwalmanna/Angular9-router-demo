import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserObserService } from './user-obser.service';


@Component({
  selector: 'app-user-obser',
  templateUrl: './user-obser.component.html',
  styleUrls: ['./user-obser.component.css']
})
export class UserObserComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute,private userService:UserObserService) {
    console.log('hello')
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
  onActivate(){
    //this.userService.activatedEmitter.emit(true)
    this.userService.activatedEmitter.next(true)
  }
}
