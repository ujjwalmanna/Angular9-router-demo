import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface server{
  id:number;
  name:string;
  status:string; 
}
@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<server> {
  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):server | Observable<server> | Promise<server> {
    return this.serverService.getServer(+route.params['id'])
  }

  constructor(private serverService:ServersService) { }
}
