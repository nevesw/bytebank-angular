import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Provide in indica em qual modulo será disponibilizado essa injeção
})
export class TransferenciaService {
  private lstTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';
  constructor(private httpClient: HttpClient) {
    this.lstTransferencia = [];
  }

  get transferencias() {
    return this.lstTransferencia;
  }

  getAll(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia) : Observable<Transferencia> {
    this.addCampos(transferencia);
    //console.log(transferencia);
    //this.transferencias.push(transferencia);
    return this.httpClient.post<Transferencia>(this.url,transferencia);
  }

  private addCampos(transferencia: any) {
    transferencia.data = new Date();
  }
}
