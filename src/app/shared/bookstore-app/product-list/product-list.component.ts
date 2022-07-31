import { Component, OnInit } from '@angular/core';
import { book } from './product-item/model/book';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  bookService : BookService
  livros : Array<book> = []

  constructor(bookService : BookService) { 
    this.bookService = bookService
  }

  ngOnInit(): void {

    this.bookService.getBook().subscribe(data => {
      this.livros = this.formataPrecos(data.books.splice(0, 15));
      console.log(this.livros);
    })
  }

  formataPrecos(lista: Array<book>) {
    for (let i = 0; i < lista.length; i++) {
      const precoSemSimbolo = lista[i].price.substring(1);
      lista[i].precoComoNumero = Number(precoSemSimbolo);
    }
    return lista;
  }

}
