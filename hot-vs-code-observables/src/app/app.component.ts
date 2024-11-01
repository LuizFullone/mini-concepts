import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hot-vs-code-observables';

  /**
   * The code inside the subscriber is executed when someone calls the subscribe method.
   */
  cold$ = new Observable<number>((subscriber) => {
    const randomNUmber = Math.round(Math.random() * 100);
    subscriber.next(randomNUmber);
  });

  /**
   * The code inside the subscriber is executed when someone calls the subscribe method.
   */
  hot$ = new Observable<number>((subscriber) => {
    const randomNUmber = Math.round(Math.random() * 100);
    subscriber.next(randomNUmber);
  }).pipe(
    shareReplay() // <-- makes the observable hot
  );

  /**
   * With this type of Observable you can emit value with the function next
   */
  hotWithBehavior$ = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    this.hotWithBehavior$.next(100);
    for(let i = 0; i < 2; i++) {
      this.hot$.subscribe(value => {
        console.log('Data from HOT observable ' + value);
      });
    }

    for(let i = 0; i < 2; i++) {
      this.cold$.subscribe(value => {
        console.log('Data from COLD observable ' + value);
      });
    }

    for(let i = 0; i < 2; i++) {
      this.hotWithBehavior$.subscribe(value => {
        console.log('Data from Behavior emitter ' + value);
      });
    }
  }
}
