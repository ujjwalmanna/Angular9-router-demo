import { Component } from '@angular/core';
import { UserObserService } from './user-obser/user-obser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   *
   */
  userActivated=false;
  constructor(private userObsService:UserObserService) {
    
  }
  ngOnInit(){
    this.userObsService.activatedEmitter.subscribe(daidActivated=>{
      this.userActivated=daidActivated;
    })
  }
  
}
