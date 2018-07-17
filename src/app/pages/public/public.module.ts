import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [HomeComponent, MoviesComponent, SeriesComponent, NewsComponent]
})
export class PublicModule { }
