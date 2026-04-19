import { Component } from '@angular/core';
import { PnrStatusComponent } from './pnr-status/pnr-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PnrStatusComponent],
  template: `<app-pnr-status></app-pnr-status>`
})
export class AppComponent {}