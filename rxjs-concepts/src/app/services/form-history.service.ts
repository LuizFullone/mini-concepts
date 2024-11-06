import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormHistoryService {
  constructor() { }

  formHistory: any[] = [];

  saveHistory(formValue: any): Observable<any> {
    this.formHistory.push({...formValue, date: new Date()});
    return of(formValue);
  }
}
