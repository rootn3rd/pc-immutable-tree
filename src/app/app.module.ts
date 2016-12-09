import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';


import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TreeViewComponent } from './treeview/treeview.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/index';
import { TreeEffects } from './effects/tree';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(TreeEffects)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
