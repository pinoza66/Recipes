import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SkillsPage } from '../pages/skills/skills';
import { ListPage } from '../pages/list/list';
import { KontomireStewPage } from '../pages/kontomire-stew/kontomire-stew';
import { KontomireSoupPage } from '../pages/kontomire-soup/kontomire-soup';
import { AprapransaPage } from '../pages/aprapransa/aprapransa';
import { PlantainPage } from '../pages/plantain/plantain';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SkillsPage,
    ListPage,
    KontomireStewPage,
    KontomireSoupPage,
    AprapransaPage,
    PlantainPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SkillsPage,
    ListPage,
    KontomireStewPage,
    KontomireSoupPage,
    AprapransaPage,
    PlantainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
