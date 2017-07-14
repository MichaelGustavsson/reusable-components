import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ServerListComponent } from './servers/server-list.component';
import { ServerInfoComponnet } from './servers/server-info.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    ServerListComponent,
    ServerInfoComponnet
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
