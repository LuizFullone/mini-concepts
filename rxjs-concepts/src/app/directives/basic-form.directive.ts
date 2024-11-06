import { Directive, OnDestroy } from '@angular/core';
import { FormHistoryService } from '../services/form-history.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appBasicForm]',
  standalone: true,
})
export class BasicFormDirective implements OnDestroy {

  form: FormGroup;
  destroyed = new Subject();

  constructor(readonly formHistoryService: FormHistoryService, readonly fb: FormBuilder,) {
    this.form = fb.group({
      foodName: [],
      comment: []
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next(null);
    this.destroyed.complete();
  }

}
