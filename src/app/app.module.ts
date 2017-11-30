import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { D3Service, D3_DIRECTIVES } from './d3';

import { AppComponent } from './app.component';

import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import {HttpClientModule} from '@angular/common/http';

import { AppService } from './app.service'
import {InfoboxComponent} from './visuals/infobox.component';
import { SidebarModule } from 'ng-sidebar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ScrollToModule} from 'ng2-scroll-to';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {BarChartDemoComponent} from './visuals/shared/barchartdemo.component';
import {InViewportModule} from 'ng-in-viewport';
import 'intersection-observer';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    InfoboxComponent,
    BarChartDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    SidebarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ScrollToModule.forRoot(),
    ChartsModule,
    InViewportModule.forRoot(),
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [D3Service, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
