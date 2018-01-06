import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KontomireSoupPage } from './kontomire-soup';

@NgModule({
  declarations: [
    KontomireSoupPage,
  ],
  imports: [
    IonicPageModule.forChild(KontomireSoupPage),
  ],
})
export class KontomireSoupPageModule {}
