import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormAddComponent } from './form-add/form-add.component';
import { AllTableComponent } from './all-table/all-table.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { VerbService } from './shared-services/verb-service';
import { VerbCardComponent } from './verb-card/verb-card.component';
import { TrainingComponent } from './training/training.component';
import { DoTestComponent } from './do-test/do-test.component';
import { ReadyTeastComponent } from './ready-teast/ready-teast.component';
import { TestPropsComponent } from './test-props/test-props.component';
import { VerbRowComponent } from './verb-row/verb-row.component';
import { DoOptionTestComponent } from './do-option-test/do-option-test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormAddComponent,
    AllTableComponent,
    VerbCardComponent,
    TrainingComponent,
    DoTestComponent,
    ReadyTeastComponent,
    TestPropsComponent,
    VerbRowComponent,
    DoOptionTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    VerbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
