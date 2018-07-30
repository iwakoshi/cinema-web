import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../core/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, MoviesComponent, SeriesComponent, NewsComponent]
})
export class PublicModule { }
