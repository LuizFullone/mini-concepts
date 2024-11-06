import { Component } from '@angular/core';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConcatMapComponent, MergeMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
