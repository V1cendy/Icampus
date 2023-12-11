import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room-summary',
  template: '{{ name, description }}',
  templateUrl: './room-summary.component.html',
  styleUrls: ['./room-summary.component.css'],
  standalone: true,
})
  export class RoomSummaryComponent {
  
  @Input() name:string = "";
  @Input() description:string = "";
  @Input() tipo:string = "";
  @Input() id:string = "";
  

  constructor(){
    this.name = ""
    this.description = ""
    this.tipo = ""
    this.id = ""
  }
  
  getImagemPorTipo(tipo: string): string {
    switch (tipo) {
      case '1':
        return "../../../../assets/open-book.png";
      case '2':
        return "../../../../assets/enzyme.png";
      case '3':
        return '../../../../assets/monitor.png';
      default:
        return 'caminho-para-imagem-por-padrao.jpg';
    }
  }
}