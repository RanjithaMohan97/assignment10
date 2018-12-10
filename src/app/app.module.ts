import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserFilterPipe} from './app.pipe';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [AppComponent,UserFilterPipe],
  imports: [ BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
