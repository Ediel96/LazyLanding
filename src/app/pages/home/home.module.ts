import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Diseño */
import {HeaderComponent} from '../../components/header/header.component';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routes';
import { HomeContComponent } from './home-cont/home-cont.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeContComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
