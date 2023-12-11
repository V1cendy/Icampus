import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  template:
    '<app-room-summary [nome] [description] [tipo]></app-room-summary>'
})
export class RoomsComponent {

}
