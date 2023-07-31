import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  public data: any = [];
  public updated!: boolean;

  public userData = new BehaviorSubject<any>(this.data);
  public isUpdated = new Subject();

  sendUserData(params: any){
    this.data = params;
    this.userData.next(this.data);
  }

  sendUpdateFlag(params: any){
    this.updated = params;
    this.isUpdated.next(this.updated);
  }
}
