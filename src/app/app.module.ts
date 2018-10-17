import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AppRoutingModule } from './app-routing.module';


/**Feature modules are NgModules for the purpose of organizing code.*/
@NgModule({
  /** @NgModule.declarations does not imply that they will necessarily be included in the final bundle. */
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],/**A provider is an instruction to the DI system on how to obtain a value for a dependency */
  bootstrap: [AppComponent]
})
export class AppModule { }
