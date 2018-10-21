import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  movies: Movie[] = [
    new Movie('Star Wars', '...', new Date('1977-05-25'), 3.9 ),
    new Movie('Empire strikes back', '...', new Date('1980-05-21'), 1.2 ),
    new Movie('Return of the Jedi', '...', new Date('1983-05-25'), 3.0 )
  ];

  movieForm: {
    title: string;
    desc: string,
    year: string,
    rating: number
  } = {
    title: '',
    desc: '',
    year: '',
    rating: 0
  };

  public addMovie(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.movies.push(new Movie(
      this.movieForm.title,
      this.movieForm.desc,
      new Date(this.movieForm.year),
      this.movieForm.rating
    ));
    this.movieForm = {
      title: '',
      desc: '',
      year: '',
      rating: 0
    };
  }
}
