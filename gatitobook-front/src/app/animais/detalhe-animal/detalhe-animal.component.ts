import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private readonly animaisSerivce: AnimaisService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = Number(
      this.activatedRoute.snapshot.params['animalId'] as string
    );
    this.animal$ = this.animaisSerivce.buscaPorID(this.animalId);
  }

  curtir() {
    this.animaisSerivce.curtir(this.animalId).subscribe({
      next: (curtida) => {
        if (curtida)
          this.animal$ = this.animaisSerivce.buscaPorID(this.animalId);
      },
    });
  }

  excluir() {
    this.animaisSerivce.excluiAnimal(this.animalId).subscribe({
      complete: () => this.router.navigate(['/animais/']),
      error: (error) => console.log(error),
    });
  }
}
