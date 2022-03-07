import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../models/Vagas.model';
import { VagasService } from '../../vagas.service';

@Component({
  selector: 'app-mural-de-vagas',
  templateUrl: './mural-de-vagas.component.html',
  styleUrls: ['./mural-de-vagas.component.css']
})
export class MuralDeVagasComponent implements OnInit {


  public vagas : Vaga[] = [];
  constructor(private _vagaService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }
  listarVagas(){
     this._vagaService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
            item =>{
              return new Vaga(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.salario,

              );
            }
          )
        }
      )

  }


  }

