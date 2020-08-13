import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DirectiveComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
