import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movielist/movielist.component';
import { StarRatingPipe } from './star-rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovielistComponent,
    StarRatingPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
