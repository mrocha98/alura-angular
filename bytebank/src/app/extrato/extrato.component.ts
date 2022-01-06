import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: any[] = [];

  constructor(private readonly transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.transferenciaService
      .todas()
      .subscribe((transferencias) => (this.transferencias = transferencias));
  }
}
