import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUnicornModalComponent } from './modal/create-unicorn-modal/create-unicorn-modal.component';
import { MainComponent } from './page/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CreateBabyUnicornModalComponent } from './modal/create-baby-unicorn-modal/create-baby-unicorn-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUnicornModalComponent,
    MainComponent,
    CreateBabyUnicornModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
