import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromConfigActions from 'src/app/shared/state/config/config.actions'
import { Language } from '../../models/language.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav!: MatSidenav;

  languageChosed = Language;
  constructor(private store: Store,
              private router: Router) { }

  ngOnInit() { }


  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }

  languageChose(language:Language){
    this.store.dispatch(fromConfigActions.updateLanguage({language}));
    this.router.navigateByUrl('/filmes/'+language.toString());
  }
}
