import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor?: number;
  destino?: string;

  constructor(
    private readonly transferenciaService: TransferenciaService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  transferir() {
    const { valor, destino } = this;
    if (!valor || !destino) return;

    this.transferenciaService.adicionar({ valor, destino }).subscribe({
      error: (error) => console.error(error),
      complete: () => {
        this.limparCampos(), this.router.navigateByUrl('/extrato');
      },
    });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
