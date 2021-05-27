import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpercasePipe } from './pipes/upercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UpercasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
