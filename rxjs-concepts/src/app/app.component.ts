import { Component } from '@angular/core';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConcatMapComponent, MergeMapComponent, SwitchMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
