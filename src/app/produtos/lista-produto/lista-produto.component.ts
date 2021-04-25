import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';
import { ProdutosService } from 'src/app/produtos/produtos.services';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos: Produto[]

  ngOnInit(): void {

    this.produtoService.obterProdutos()
    .subscribe(
      p => {
            this.produtos = p;
            console.log(p);
            },
           error => console.log(error)
    )
    
  
  }

}
