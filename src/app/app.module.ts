import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './modules/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelsComponent } from './_components/hotels/hotels.component';
import { WeatherComponent } from './_components/weather/weather.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { FeaturesComponent } from './_components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    WeatherComponent,
    ProfileComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
