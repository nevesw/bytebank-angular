import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  //Metadata Decorator @Injectable na classe de service permite a injeção de dependencia dos servicos
  //sendo nescessario apenas receber no contrutor para utilizacao
  constructor(private service: TransferenciaService){

  };

}
