import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(remoteRoutes),
    MatSlideToggleModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
