import { LoadingPage } from './../pages/loading/loading';
import { TogglePage } from './../pages/toggle/toggle';
import { ListPage } from './../pages/list/list';
import { InputPage } from './../pages/input/input';
import { IconPage } from './../pages/icon/icon';
import { GridPage } from './../pages/grid/grid';
import { FabPage } from './../pages/fab/fab';
import { DatetimePage } from './../pages/datetime/datetime';
import { RangePage } from './../pages/range/range';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { CardPage } from './../pages/card/card';
import { BotoesPage } from './../pages/botoes/botoes';
import { BadgesPage } from './../pages/badges/badges';
import { AlertPage } from './../pages/alert/alert';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    RangePage,
    DatetimePage,
    FabPage,
    GridPage,
    IconPage,
    InputPage,
    ListPage,
    TogglePage,
    LoadingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    RangePage,
    DatetimePage,
    FabPage,
    GridPage,
    IconPage,
    InputPage,
    ListPage,
    TogglePage,
    LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
