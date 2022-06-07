import { Movie } from "../models/movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 1, title: "Movie 1", description: "Description 1", imageUrl: "1.jpeg", isPopular:true },
            { id: 2, title: "Movie 2", description: "Description 2", imageUrl: "2.jpeg", isPopular:false },
            { id: 3, title: "Movie 3", description: "Description 3", imageUrl: "3.jpeg", isPopular:true },
            { id: 4, title: "Movie 4", description: "Description 4", imageUrl: "4.jpeg", isPopular:true },
            { id: 5, title: "Movie 5", description: "Description 5", imageUrl: "5.jpeg", isPopular:false }
        ]
    }

    getMovies() : Movie[]{
        return this.movies;
    }

    getPopularMovies() : Movie[]{
        return this.movies.filter(i => i.isPopular);
    }

    getMovieById(id: number) : Movie | undefined{
        return this.movies.find(i => i.id == id);
    }
}