import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  setData(data: any): void{
    return this.dataSubject.next(data);
  }


  getData(): any{
    return this.dataSubject.getValue();
  }

  

}
