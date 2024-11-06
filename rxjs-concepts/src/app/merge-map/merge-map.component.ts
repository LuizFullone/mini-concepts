import { Component, OnInit } from '@angular/core';
import { BasicFormDirective } from '../directives/basic-form.directive';
import { delay, mergeMap, takeUntil } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent extends BasicFormDirective implements OnInit {

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroyed),
      mergeMap(formValue => this.formHistoryService.saveHistory(formValue).pipe(delay((Math.random()*1000))))
    ).subscribe(
      {
        next: (savedValue) => { console.log('Handle with saved value', savedValue) },
        error: (error) => { console.log('Error handler', error) },
     }
    );
  }
}
