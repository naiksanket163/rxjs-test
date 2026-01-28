import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
import { TodosComponent } from './shared/component/todos/todos.component';
import { TodoscmpltComponent } from './shared/component/todoscmplt/todoscmplt.component';
import { TodosnocmpltComponent } from './shared/component/todosnocmplt/todosnocmplt.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { OneComponent } from './shared/subject/one/one.component';
import { TwoComponent } from './shared/subject/two/two.component';
import { ThreeComponent } from './shared/subject/three/three.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TodosComponent,
    TodoscmpltComponent,
    TodosnocmpltComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
