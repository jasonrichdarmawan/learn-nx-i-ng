import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterService } from '@learn-nx-i-ng/counter';
import { Counter2Service } from '@learn-nx-i-ng/counter2';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    CounterService,
    Counter2Service
  ],
})
export class AppModule {}
