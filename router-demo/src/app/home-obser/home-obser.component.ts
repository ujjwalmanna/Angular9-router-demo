import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-home-obser',
  templateUrl: './home-obser.component.html',
  styleUrls: ['./home-obser.component.css']
})
export class HomeObserComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }
 private firstSubscription:Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.firstSubscription=interval(1000).subscribe(count=>{
    //   console.log(count)
    // })

    const customIntervalObservable = Observable.create((observer)=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        if(count==4)
        {
          observer.complete();
        }
        if(count==3){
          observer.error(new Error('value greater than 3'))
        }
        count++;
      },1000)
    })
    
    this.firstSubscription=customIntervalObservable.pipe(filter((data:number)=>{return data>0;}),map((data:number)=>{
      return 'round:'+(data+1);
  })).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error)
    },()=>{console.log('complete')})
  }

}
