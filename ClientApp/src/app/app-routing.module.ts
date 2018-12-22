import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectCropComponent } from './pages/select-crop/select-crop.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LocationComponent } from './pages/location/location.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path: '', component: LocationComponent, pathMatch: 'full' },
      { path: '', component: LoginComponent },
      { path: 'crop', component: SelectCropComponent },
      { path: 'location', component: LocationComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
