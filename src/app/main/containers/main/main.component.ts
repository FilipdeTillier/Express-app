import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Book } from 'shared/interfaces/book.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public allBooks: Book[] = [];
  private instanceSubscription: Subscription[] = [];
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.instanceSubscription.push(
      this.mainService.getAllBooks().subscribe((books: Book[]) => this.allBooks = books),
    );
  }

  ngOnDestroy(){
    this.instanceSubscription.forEach(sub => sub.unsubscribe());
  }

}
