import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from 'src/pages/movies.module';
import { MaterialModule } from './shared/material/material.module';
import { environment } from '../environments/environment';
import { reducers } from './shared/state/app.reducer';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ConfigBtnComponent } from './shared/components/config-btn/config-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConfigBtnComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MoviesModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports:[NavBarComponent],
  providers: [{provide: MAT_DATE_LOCALE, useValue:'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
