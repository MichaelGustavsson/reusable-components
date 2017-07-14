"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ServerListComponent = (function () {
    function ServerListComponent() {
    }
    ServerListComponent.prototype.ngOnInit = function () {
        this.servers = [
            { hostName: 'AppServerOne', ipAddress: '198.0.10.45', description: 'Servern används för primärt testning', status: 'Aktiv' },
            { hostName: 'AppServerTwo', ipAddress: '198.0.10.46', description: 'Server används för produktion', status: 'Aktiv' }
        ];
    };
    return ServerListComponent;
}());
ServerListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'server-list',
        templateUrl: './server-list.component.html'
    })
], ServerListComponent);
exports.ServerListComponent = ServerListComponent;
//# sourceMappingURL=server-list.component.js.map