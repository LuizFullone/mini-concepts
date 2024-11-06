import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormHistoryService } from './services/form-history.service';
import { concatMap, delay, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy, OnInit {

  form: FormGroup;
  destroyed = new Subject();

  constructor(private formHistoryService: FormHistoryService, private fb: FormBuilder,) {
    this.form = fb.group({
      foodName: [],
      comment: []
    });
  }

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

  ngOnDestroy(): void {
    this.destroyed.next(null);
    this.destroyed.complete();
  }
}
