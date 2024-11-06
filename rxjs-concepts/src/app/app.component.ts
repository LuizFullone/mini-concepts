import { Component } from '@angular/core';
import { ConcatMapComponent } from './concat-map/concat-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConcatMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
