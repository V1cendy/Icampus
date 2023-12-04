import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-room-summary',
  template: '{{nome}}',
  templateUrl: './room-summary.component.html',
  styleUrls: ['./room-summary.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})
export class RoomSummaryComponent {

  @Input() nome:string;
  description:string = "Espaço reservado a persquisa e estudo."

}
