import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovielistService } from './movielist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

  public constructor(private movieslistService: MovielistService) {
    this.movieslistService.add(new Movie('Star Wars', '...', new Date(1977), 4.7 ));
    this.movieslistService.add(new Movie('Empire strikes back', '...', new Date(1980), 4.2 ));
    this.movieslistService.add(new Movie('Return of the Jedi', '...', new Date(1983), 4.9 ));
  }

  public addMovie(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.movieslistService.add(new Movie(
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
