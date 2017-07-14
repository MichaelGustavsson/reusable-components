import { Component, Input } from '@angular/core';

import { Server } from './server';

@Component({
  moduleId: module.id,
  selector: 'server-info',
  templateUrl: './server-info.component.html'
})
export class ServerInfoComponnet {
  @Input()
  server: Server;
}
