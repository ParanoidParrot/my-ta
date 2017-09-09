import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule } from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DndModule, DragDropService, DragDropConfig} from "ng2-dnd";
import { ProfessorComponent } from './professor/professor.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'prof', component: ProfessorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MdButtonModule,
    MdCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DndModule
  ],
  providers: [DragDropService, DragDropConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
}
