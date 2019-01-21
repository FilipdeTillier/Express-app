import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'shared/interfaces/book.interface';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
  @Input() allBooks: Book[];
  constructor() { }

  ngOnInit() {
  }

}
