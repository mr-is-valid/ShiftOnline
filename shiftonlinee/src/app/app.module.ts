import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import { PitBosInOutComponent } from './components/pit-bos-in-out/pit-bos-in-out.component';
import { PitBossBubbleComponent } from './components/pit-bos-in-out/components/pit-boss-bubble/pit-boss-bubble.component';

import { ChartsModule } from 'ng2-charts';
import { EventsStatusComponent } from './components/events-status/events-status.component';
import { ManPowerComponent } from './components/man-power/man-power.component';
import { CommandmentsComponent } from './components/commandments/commandments.component'


@NgModule({
  declarations: [
    AppComponent,
    PitBosInOutComponent,
    PitBossBubbleComponent,
    EventsStatusComponent,
    ManPowerComponent,
    CommandmentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
