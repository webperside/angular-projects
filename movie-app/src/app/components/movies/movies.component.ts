import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MovieFiterPipe } from 'src/app/pipes/movie-fiter.pipe';
import { MovieRepository } from 'src/app/repository/movie.repository';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title: string = "Movies"
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  movieFilter: MovieFiterPipe = new MovieFiterPipe();

  @Input()
  movieFilterText:string = '';

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.movies = this.movieFilter.transform(this.movieRepository.getMovies(), changes['movieFilterText'].currentValue);
  }

}