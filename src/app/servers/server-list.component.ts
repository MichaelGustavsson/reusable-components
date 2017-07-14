import { Component, OnInit } from '@angular/core';

import { Server } from './server';

@Component({
  moduleId: module.id,
  selector: 'server-list',
  templateUrl: './server-list.component.html'
})
export class ServerListComponent implements OnInit {
  servers: Server[];


  ngOnInit() {
    this.servers = [
      { hostName: 'AppServerOne', ipAddress: '198.0.10.45', description: 'Servern används för primärt testning', status: 'Aktiv' },
      { hostName: 'AppServerTwo', ipAddress: '198.0.10.46', description: 'Server används för produktion', status: 'Aktiv' }
    ];
  }
}
