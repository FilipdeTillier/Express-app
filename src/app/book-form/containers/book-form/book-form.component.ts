import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookFormService } from '../../services/book-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FORM_PARAMS } from 'shared/variables/bookFormParams';
import { Book } from 'shared/interfaces/book.interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  private bookForm: FormGroup;
  public currentBook: Book;
  public FORM_PARAMS = FORM_PARAMS;
  public isEditMode: boolean = false;
  constructor(
    private bookFormService: BookFormService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.bookForm = this.bookFormService.createForm();
    this.route.params.subscribe(params => {
      if(params.id){
        this.isEditMode = true;
        this.bookFormService.getBookById(params.id).subscribe((book: Book) => {
          this.currentBook = book;
          this.bookForm.patchValue({
            [FORM_PARAMS.ID]: book._id,
            [FORM_PARAMS.TITLE]: book.title,
            [FORM_PARAMS.AUTHOR]: book.author,
            [FORM_PARAMS.PAGES]: book.pages,
            [FORM_PARAMS.READED]: book.readed,
            [FORM_PARAMS.IMAGE]: book.image,
            [FORM_PARAMS.FAVOURITE]: book.favourite,
          })
        });
      }
    });
  }

  onDelete(id: number): void {
    this.bookFormService.deleteBookById(id).subscribe(() => this.router.navigate(['/main']));
  }

  onSubmit(): void {
    if(this.bookForm.valid) {
      if(this.isEditMode){
        this.bookFormService.updateBookById(this.bookForm.value).subscribe(el => this.router.navigate(['/main']));
      } else {
        this.bookFormService.createBook(this.bookForm.value).subscribe(el => this.router.navigate(['/main']));
      }
    }
  }

}
