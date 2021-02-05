import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromConfigSelectors from 'src/app/shared/state/config/config.selector'
import { Language } from '../../models/language.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav!: MatSidenav;
  languageOB$!: Observable<Language>;
  languageSelected!: Language;

  private componentDestroyed$ = new Subject();
  constructor(private store: Store,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() { 
    this.languageOB$ = this.store.select(fromConfigSelectors.selectLanguageConfig);
    this.languageOB$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.languageSelected=value);

  }

  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  homePage(){
    this.router.navigateByUrl('/filmes/'+this.languageSelected.toString());
  }
}
