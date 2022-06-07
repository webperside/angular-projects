import { MovieFiterPipe } from './movie-fiter.pipe';

describe('MovieFiterPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieFiterPipe();
    expect(pipe).toBeTruthy();
  });
});
