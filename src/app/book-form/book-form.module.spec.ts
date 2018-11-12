import { BookFormModule } from './book-form.module';

describe('BookFormModule', () => {
  let bookFormModule: BookFormModule;

  beforeEach(() => {
    bookFormModule = new BookFormModule();
  });

  it('should create an instance', () => {
    expect(bookFormModule).toBeTruthy();
  });
});
