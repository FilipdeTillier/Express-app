import { FavouriteModule } from './favourite.module';

describe('FavouriteModule', () => {
  let favouriteModule: FavouriteModule;

  beforeEach(() => {
    favouriteModule = new FavouriteModule();
  });

  it('should create an instance', () => {
    expect(favouriteModule).toBeTruthy();
  });
});
