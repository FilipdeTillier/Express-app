import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'shared/interfaces/book.interface';
import { HttpClient } from '@angular/common/http';
import { FORM_PARAMS } from 'shared/variables/bookFormParams';


@Injectable({
  providedIn: 'root'
})
export class BookFormService {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    ) { }

  createForm(book?: Book): FormGroup {
    return this.fb.group({
      [FORM_PARAMS.ID]: [null],
      [FORM_PARAMS.TITLE]: [book ? book.title : '', [Validators.required]],
      [FORM_PARAMS.AUTHOR]: [book ? book.author : '', [Validators.required]],
      [FORM_PARAMS.PAGES]: [book ? book.pages : ''],
      [FORM_PARAMS.READED]: [book ? book.readed : false],
      [FORM_PARAMS.IMAGE]: [book ? book.image : ''],
      [FORM_PARAMS.FAVOURITE]: [book ? book.favourite : false],
    })
  }

  updateBookById(bookFormValue: Book) {
    return this.http.put(`/api/book?_id=${bookFormValue._id}`, bookFormValue);
  }

  deleteBookById(id: number) {
    return this.http.delete(`/api/book?_id=${id}`);
  }

  createBook(bookForm: FormGroup) {
    return this.http.post('/api/book', bookForm);
  }

  getBookById(id: number) {
    return this.http.get(`/api/book?_id=${id}`);
  }
}
