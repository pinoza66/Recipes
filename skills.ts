import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { KontomireStewPage } from '../kontomire-stew/kontomire-stew';
import { KontomireSoupPage } from '../kontomire-soup/kontomire-soup';
import { AprapransaPage } from '../aprapransa/aprapransa';
import { PlantainPage } from '../plantain/plantain';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

  fufu(){
    this.navCtrl.push(ListPage);
  }
kon(){
  this.navCtrl.push(KontomireStewPage);
}

soup(){
  this.navCtrl.push(KontomireSoupPage);
}

apa(){
  this.navCtrl.push(AprapransaPage);
}
bo(){
  this.navCtrl.push(PlantainPage);
}
}
