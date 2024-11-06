import { Component, OnInit } from '@angular/core';
import { BasicFormDirective } from '../directives/basic-form.directive';
import { concatMap, delay, takeUntil } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent extends BasicFormDirective implements OnInit {

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroyed),
      concatMap(formValue => this.formHistoryService.saveHistory(formValue).pipe(delay(2000)))
    ).subscribe(
      {
        next: (savedValue) => { console.log('Handle with saved value', savedValue) },
        error: (error) => { console.log('Error handler', error) },
     }
    );
  }
}
