import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BasicFormDirective } from '../directives/basic-form.directive';
import { delay, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent extends BasicFormDirective implements OnInit {

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroyed),
      switchMap(formValue => this.formHistoryService.saveHistory(formValue).pipe(delay((400))))
    ).subscribe(
      {
        next: (savedValue) => { console.log('Handle with saved value', savedValue) },
        error: (error) => { console.log('Error handler', error) },
     }
    );
  }
}
