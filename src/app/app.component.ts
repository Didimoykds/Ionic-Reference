import { SegmentPage } from './../pages/segment/segment';
import { ToolbarPage } from './../pages/toolbar/toolbar';
import { ToastPage } from './../pages/toast/toast';
import { LoadingPage } from './../pages/loading/loading';
import { TogglePage } from './../pages/toggle/toggle';
import { ListPage } from './../pages/list/list';
import { InputPage } from './../pages/input/input';
import { IconPage } from './../pages/icon/icon';
import { GridPage } from './../pages/grid/grid';
import { FabPage } from './../pages/fab/fab';
import { DatetimePage } from './../pages/datetime/datetime';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { CardPage } from './../pages/card/card';
import { BotoesPage } from './../pages/botoes/botoes';
import { BadgesPage } from './../pages/badges/badges';
import { AlertPage } from './../pages/alert/alert';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Toolbar } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { RangePage } from '../pages/range/range';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'ActionSheet', component: ActionSheetPage },
      { title: 'Alert', component: AlertPage },
      { title: 'Badges', component: BadgesPage},
      { title: 'Buttons', component: BotoesPage},
      { title: 'Cards', component: CardPage},
      { title: 'Checkbox', component: CheckboxPage},
      { title: 'Range', component: RangePage},
      { title: 'DateTime', component: DatetimePage},
      { title: 'Fab', component: FabPage},
      { title: 'Grid', component: GridPage},
      { title: 'Icones', component: IconPage},
      { title: 'Input', component: InputPage},
      { title: 'List', component: ListPage},
      { title: 'Toggle', component: TogglePage},
      { title: 'Loading', component: LoadingPage},
      { title: 'Toast', component: ToastPage},
      { title: 'Toolbar', component: ToolbarPage},
      { title: 'Segment', component: SegmentPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
