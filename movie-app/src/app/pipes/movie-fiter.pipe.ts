import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFiter'
})
export class MovieFiterPipe implements PipeTransform {

  transform(movieList: Movie[], movieFilterText: string): Movie[] {

    movieFilterText = movieFilterText.toLowerCase();

    return movieList.filter((m: Movie) => {
      return m.title.toLowerCase().indexOf(movieFilterText) !== -1
        || m.description.toLowerCase().indexOf(movieFilterText) !== -1
    });
  }

}
