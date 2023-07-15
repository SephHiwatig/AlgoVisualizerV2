import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SelectionComponent } from './sort/selection/selection.component';
import { BubbleComponent } from './sort/bubble/bubble.component';
import { InsertionComponent } from './sort/insertion/insertion.component';
import { QuickComponent } from './sort/quick/quick.component';
import { LinearComponent } from './search/linear/linear.component';
import { BinaryComponent } from './search/binary/binary.component';
import { JumpComponent } from './search/jump/jump.component';
import { DijsktraComponent } from './path/dijsktra/dijsktra.component';
import { AstarComponent } from './path/astar/astar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SelectionComponent,
    BubbleComponent,
    InsertionComponent,
    QuickComponent,
    LinearComponent,
    BinaryComponent,
    JumpComponent,
    DijsktraComponent,
    AstarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
