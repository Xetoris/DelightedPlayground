import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';
import { DelightedService } from './delighted/delighted.service';
import { MockDelightedService } from './delighted/mock.delighted.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class AppServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppServicesModule,
      providers: [
        { provide: DelightedService, useClass: environment.mockServices ? MockDelightedService : DelightedService }
      ]
    };
  }
}
