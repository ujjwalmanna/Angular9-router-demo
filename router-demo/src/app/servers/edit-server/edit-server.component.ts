import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate.guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  canDeactivate(): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree>{
    if(!this.allowEdit)
      return true;
    if((this.serverName!==this.server.name|| this.serverStatus!==this.server.status) && !this.changesSaved){
      return confirm('Do u want to discard?')
    }
    else{
      return true;
    }
  }
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;
  changesSaved=false;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    this.route.queryParams.subscribe(
      (params:Params)=>{
        this.allowEdit=params['allowEdit']==='1'?true:false

      }
    );
    const id= +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
   this.route.params.subscribe((param:Params)=>{
      this.server = this.serversService.getServer(+param['id']);
    })
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
    this.router.navigate(['../'],{relativeTo:this.route})
  }

}
