import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Language } from 'src/app/shared/models/language.enum';
import * as fromConfigSelectors from 'src/app/shared/state/config/config.selector'
import * as fromConfigActions from 'src/app/shared/state/config/config.actions'

@Component({
  selector: 'app-config-btn',
  templateUrl: './config-btn.component.html',
  styleUrls: ['./config-btn.component.css']
})
export class ConfigBtnComponent implements OnInit {

  languageOB$!: Observable<string>;
  languageConfig!: string;
  languageSelected!:string;

  languageChosed = Language;

  url!:string;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store,
              private router: Router) { }

  ngOnInit(): void {
    this.languageOB$ = this.store.select(fromConfigSelectors.selectLanguageConfig);
    this.languageOB$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.languageConfig=value);
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  languageChose(language:Language){
    this.url=this.router.url
    if(!this.url.includes('/filmes/details')){
    this.store.dispatch(fromConfigActions.updateLanguage({language}));
    this.router.navigateByUrl('/filmes/'+language);
    }
    else{
      this.store.dispatch(fromConfigActions.updateLanguage({language}));
      this.router.navigateByUrl(this.url)
    }
  }

  setLanguage(){
    this.languageSelected=this.languageConfig;
  }
}
